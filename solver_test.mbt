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
