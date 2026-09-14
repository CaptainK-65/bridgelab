///|
test "solver finds a unique completion" {
  let board = Board::new(1, 5, [
    island(1, 0, 0, 1),
    island(2, 0, 2, 2),
    island(3, 0, 4, 1),
  ])
  match board.solve() {
    SolveOutcome::UniqueSolution(solution) =>
      assert_true(solution.is_complete())
    _ => fail("chain should have one solution")
  }
}

///|
test "solver proves an impossible topology" {
  let board = Board::new(3, 3, [island(1, 0, 0, 1), island(2, 2, 2, 1)])
  match board.solve() {
    SolveOutcome::NoSolution => ()
    _ => fail("diagonal pair has no solution")
  }
}

///|
test "solver detects multiple solutions" {
  let board = Board::new(3, 3, [
    island(1, 0, 0, 3),
    island(2, 0, 2, 3),
    island(3, 2, 0, 3),
    island(4, 2, 2, 3),
  ])
  match board.solve() {
    SolveOutcome::MultipleSolutions(first, second) => {
      assert_true(first.is_complete())
      assert_true(second.is_complete())
      assert_false(first.serialize() == second.serialize())
    }
    _ => fail("target-three square should have two solutions")
  }
}

///|
test "solver obeys its search budget" {
  let board = Board::new(3, 3, [
    island(1, 0, 0, 3),
    island(2, 0, 2, 3),
    island(3, 2, 0, 3),
    island(4, 2, 2, 3),
  ])
  assert_eq(board.solve(max_nodes=1).kind(), "limit")
}

///|
test "smart hint is withheld for ambiguous puzzles" {
  let board = Board::new(3, 3, [
    island(1, 0, 0, 3),
    island(2, 0, 2, 3),
    island(3, 2, 0, 3),
    island(4, 2, 2, 3),
  ])
  assert_true(board.smart_hint() is None)
}

///|
test "smart hint remains directly applicable" {
  let board = Board::new(1, 5, [
    island(1, 0, 0, 1),
    island(2, 0, 2, 2),
    island(3, 0, 4, 1),
  ])
  let hint = match board.smart_hint() {
    None => fail("unique puzzle should provide a hint")
    Some(value) => value
  }
  match board.set_bridge(hint.a, hint.b, hint.count) {
    Ok(_) => ()
    Err(_) => fail("smart hint must be applicable")
  }
}

///|
test "assessment labels forced and ambiguous puzzles" {
  let chain = Board::new(1, 5, [
    island(1, 0, 0, 1),
    island(2, 0, 2, 2),
    island(3, 0, 4, 1),
  ])
  let gentle = chain.assess()
  assert_true(gentle.is_solvable())
  assert_true(gentle.is_unique())
  assert_eq(gentle.difficulty(), "gentle")
  assert_eq(gentle.island_count(), 3)
  assert_eq(gentle.candidate_count(), 2)
  let square = Board::new(3, 3, [
    island(1, 0, 0, 3),
    island(2, 0, 2, 3),
    island(3, 2, 0, 3),
    island(4, 2, 2, 3),
  ])
  let ambiguous = square.assess()
  assert_true(ambiguous.is_solvable())
  assert_false(ambiguous.is_unique())
  assert_eq(ambiguous.difficulty(), "ambiguous")
}
