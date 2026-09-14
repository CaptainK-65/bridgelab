///|
/// Result of complete bounded search. Multiple solutions are capped at two.
pub enum SolveOutcome {
  NoSolution
  UniqueSolution(Board)
  MultipleSolutions(Board, Board)
  SearchLimitReached
} derive(Debug)

///|
/// Stable metadata used by the level catalogue and editor validation UI.
pub struct PuzzleAssessment {
  solvable : Bool
  unique : Bool
  difficulty : String
  island_count : Int
  candidate_count : Int
} derive(Eq, Debug)

///|
pub fn PuzzleAssessment::is_solvable(self : PuzzleAssessment) -> Bool {
  self.solvable
}

///|
pub fn PuzzleAssessment::is_unique(self : PuzzleAssessment) -> Bool {
  self.unique
}

///|
pub fn PuzzleAssessment::difficulty(self : PuzzleAssessment) -> String {
  self.difficulty
}

///|
pub fn PuzzleAssessment::island_count(self : PuzzleAssessment) -> Int {
  self.island_count
}

///|
pub fn PuzzleAssessment::candidate_count(self : PuzzleAssessment) -> Int {
  self.candidate_count
}

///|
pub fn SolveOutcome::kind(self : SolveOutcome) -> String {
  match self {
    NoSolution => "none"
    UniqueSolution(_) => "unique"
    MultipleSolutions(_, _) => "multiple"
    SearchLimitReached => "limit"
  }
}

///|
pub fn SolveOutcome::first_solution(self : SolveOutcome) -> Board? {
  match self {
    UniqueSolution(board) => Some(board)
    MultipleSolutions(first, _) => Some(first)
    _ => None
  }
}

///|
fn search_solutions(
  board : Board,
  edges : Array[CandidateEdge],
  edge_index : Int,
  solutions : Array[Board],
  nodes : Array[Int],
  max_nodes : Int,
) -> Unit {
  if solutions.length() >= 2 || nodes[0] >= max_nodes {
    return
  }
  nodes[0] = nodes[0] + 1
  let current = match board.propagate() {
    Err(_) => return
    Ok(value) => value
  }
  if current.is_complete() {
    solutions.push(current)
    return
  }
  if current.has_contradiction() || edge_index >= edges.length() {
    return
  }
  let edge = edges[edge_index]
  let existing = current.bridge_count(edge.first(), edge.second())
  for count = existing; count <= 2; count = count + 1 {
    if count == existing {
      search_solutions(
        current,
        edges,
        edge_index + 1,
        solutions,
        nodes,
        max_nodes,
      )
    } else {
      match current.set_bridge(edge.first(), edge.second(), count) {
        Err(_) => continue
        Ok(next) =>
          search_solutions(
            next,
            edges,
            edge_index + 1,
            solutions,
            nodes,
            max_nodes,
          )
      }
    }
    if solutions.length() >= 2 || nodes[0] >= max_nodes {
      return
    }
  }
}

///|
/// Find up to two completions while preserving every bridge already placed.
pub fn Board::solve(self : Board, max_nodes? : Int = 100000) -> SolveOutcome {
  if max_nodes <= 0 {
    return SolveOutcome::SearchLimitReached
  }
  let solutions : Array[Board] = []
  let nodes = [0]
  search_solutions(self, self.candidate_edges(), 0, solutions, nodes, max_nodes)
  if nodes[0] >= max_nodes && solutions.length() < 2 {
    SolveOutcome::SearchLimitReached
  } else if solutions.length() == 0 {
    SolveOutcome::NoSolution
  } else if solutions.length() == 1 {
    SolveOutcome::UniqueSolution(solutions[0])
  } else {
    SolveOutcome::MultipleSolutions(solutions[0], solutions[1])
  }
}

///|
/// Verify solvability and uniqueness, then assign a deterministic difficulty band.
pub fn Board::assess(self : Board) -> PuzzleAssessment {
  let outcome = self.solve()
  let solvable = outcome.kind() == "unique" || outcome.kind() == "multiple"
  let unique = outcome.kind() == "unique"
  let difficulty = if outcome.kind() == "none" {
    "impossible"
  } else if outcome.kind() == "multiple" {
    "ambiguous"
  } else if outcome.kind() == "limit" {
    "unrated"
  } else {
    match self.propagate() {
      Ok(board) =>
        if board.is_complete() {
          "gentle"
        } else if self.candidate_edges().length() <= 12 {
          "moderate"
        } else if self.candidate_edges().length() <= 24 {
          "challenging"
        } else {
          "expert"
        }
      Err(_) => "impossible"
    }
  }
  PuzzleAssessment::{
    solvable,
    unique,
    difficulty,
    island_count: self.islands.length(),
    candidate_count: self.candidate_edges().length(),
  }
}
