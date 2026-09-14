///|
/// Result of complete bounded search. Multiple solutions are capped at two.
pub enum SolveOutcome {
  NoSolution
  UniqueSolution(Board)
  MultipleSolutions(Board, Board)
  SearchLimitReached
} derive(Debug)

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
