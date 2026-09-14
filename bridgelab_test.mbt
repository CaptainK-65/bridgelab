///|
/// Basic public API and rule regression tests.
test "bridge toggle and degree constraint" {
  let board = Board::new(3, 3, [island(1, 1, 0, 2), island(2, 1, 2, 2)])
  let one = match board.toggle_bridge(1, 2) {
    Err(_) => fail("expected first bridge")
    Ok(value) => value
  }
  assert_eq(one.bridge_count(1, 2), 1)
  let two = match one.toggle_bridge(1, 2) {
    Err(_) => fail("expected second bridge")
    Ok(value) => value
  }
  assert_eq(two.bridge_count(1, 2), 2)
  let empty = match two.toggle_bridge(1, 2) {
    Err(_) => fail("expected removal")
    Ok(value) => value
  }
  assert_eq(empty.bridge_count(1, 2), 0)
  let constrained = Board::new(3, 3, [island(1, 1, 0, 1), island(2, 1, 2, 1)])
  match constrained.set_bridge(1, 2, 2) {
    Ok(_) => fail("degree must reject bridge above target")
    Err(BridgeError::ExceedsDegree) => ()
    Err(_) => fail("wrong error")
  }
}

///|
/// Crossing edges are rejected while parallel bridges are allowed.
test "crossing rejection" {
  let board = Board::new(5, 5, [
    island(1, 2, 1, 1),
    island(2, 2, 3, 1),
    island(3, 1, 2, 1),
    island(4, 3, 2, 1),
  ])
  let horizontal = match board.set_bridge(1, 2, 1) {
    Err(_) => fail("horizontal edge should be valid")
    Ok(value) => value
  }
  match horizontal.set_bridge(3, 4, 1) {
    Ok(_) => fail("vertical edge must cross")
    Err(BridgeError::CrossesExisting) => ()
    Err(_) => fail("wrong error")
  }
}

///|
/// Completion includes exact degrees and connectivity.
test "completion and connectivity" {
  let board = Board::new(2, 5, [
    island(1, 0, 0, 1),
    island(2, 0, 2, 2),
    island(3, 0, 4, 1),
  ])
  let first = match board.set_bridge(1, 2, 1) {
    Err(_) => fail("first edge")
    Ok(value) => value
  }
  let done = match first.set_bridge(2, 3, 1) {
    Err(_) => fail("second edge")
    Ok(value) => value
  }
  assert_true(done.is_connected())
  assert_true(done.is_complete())
  assert_eq(done.violations().length(), 0)
}

///|
/// Undo and redo retain immutable board snapshots.
test "undo redo" {
  let board = Board::new(1, 3, [island(1, 0, 0, 1), island(2, 0, 2, 1)])
  let game = Game::new(board)
  let changed = match game.apply(1, 2, 1) {
    Err(_) => fail("move")
    Ok(value) => value
  }
  assert_eq(changed.board().bridge_count(1, 2), 1)
  assert_eq(changed.undo().board().bridge_count(1, 2), 0)
  assert_eq(changed.undo().redo().board().bridge_count(1, 2), 1)
}

///|
/// Snapshot serialization is stable and round-trips legal positions.
test "serialization round trip" {
  let board = Board::new(1, 3, [island(1, 0, 0, 1), island(2, 0, 2, 1)])
  let changed = match board.set_bridge(1, 2, 1) {
    Err(_) => fail("move")
    Ok(value) => value
  }
  let encoded = changed.serialize()
  assert_eq(encoded, "BRIDGELAB|1,3|1,0,0,1;2,0,2,1|1,2,1")
  let decoded = match Board::deserialize(encoded) {
    Err(_) => fail("round trip")
    Ok(value) => value
  }
  assert_eq(decoded.serialize(), changed.serialize())
}

///|
/// A single remaining candidate produces an actionable hint.
test "forced hint" {
  let board = Board::new(1, 5, [
    island(1, 0, 0, 1),
    island(2, 0, 2, 2),
    island(3, 0, 4, 1),
  ])
  let hint = match board.hint() {
    None => fail("expected a forced edge")
    Some(value) => value
  }
  assert_eq(hint.a, 1)
  assert_eq(hint.b, 2)
  assert_eq(hint.count, 1)
}

///|
/// A hint must never consume capacity from an already satisfied endpoint.
test "hint is always applicable" {
  let board = Board::new(3, 3, [
    island(1, 0, 0, 1),
    island(2, 0, 2, 1),
    island(3, 2, 2, 1),
  ])
  let occupied = match board.set_bridge(2, 3, 1) {
    Ok(value) => value
    Err(_) => fail("setup bridge")
  }
  match occupied.hint() {
    None => ()
    Some(hint) =>
      match occupied.set_bridge(hint.a, hint.b, hint.count) {
        Ok(_) => ()
        Err(_) => fail("every hint must be directly applicable")
      }
  }
}

///|
/// Existing single bridges remain candidates when they must become double.
test "hint can extend an existing bridge" {
  let board = Board::new(1, 3, [island(1, 0, 0, 2), island(2, 0, 2, 2)])
  let one = match board.set_bridge(1, 2, 1) {
    Ok(value) => value
    Err(_) => fail("setup bridge")
  }
  let hint = match one.hint() {
    None => fail("expected bridge extension")
    Some(value) => value
  }
  assert_eq(hint.count, 2)
  match one.set_bridge(hint.a, hint.b, hint.count) {
    Ok(done) => assert_true(done.is_complete())
    Err(_) => fail("hint must be applicable")
  }
}

///|
/// External puzzle definitions reject malformed dimensions and islands.
test "checked board construction" {
  match Board::try_new(0, 4, []) {
    Err(PuzzleError::InvalidDimensions(0, 4)) => ()
    _ => fail("zero-sized board must be rejected")
  }
  match Board::try_new(3, 3, [island(1, 0, 0, 1), island(1, 2, 2, 1)]) {
    Err(PuzzleError::DuplicateIslandId(1)) => ()
    _ => fail("duplicate ids must be rejected")
  }
  match Board::try_new(3, 3, [island(1, 0, 0, 1), island(2, 0, 0, 1)]) {
    Err(PuzzleError::DuplicateIslandPosition(0, 0)) => ()
    _ => fail("duplicate positions must be rejected")
  }
  match Board::try_new(3, 3, [island(1, 4, 0, 1)]) {
    Err(PuzzleError::IslandOutOfBounds(1)) => ()
    _ => fail("out-of-range coordinates must be rejected")
  }
  match Board::try_new(3, 3, [island(1, 0, 0, 9)]) {
    Err(PuzzleError::InvalidTarget(1, 9)) => ()
    _ => fail("targets above eight must be rejected")
  }
}

///|
/// Alignment failures and blocked sight lines have distinct diagnostics.
test "edge diagnostics distinguish geometry failures" {
  let board = Board::new(3, 3, [
    island(1, 0, 0, 1),
    island(2, 0, 1, 1),
    island(3, 0, 2, 1),
    island(4, 2, 2, 1),
  ])
  match board.set_bridge(1, 4, 1) {
    Err(BridgeError::NotAligned) => ()
    _ => fail("diagonal islands must report NotAligned")
  }
  match board.set_bridge(1, 3, 1) {
    Err(BridgeError::NoIslandBetween) => ()
    _ => fail("blocked sight line must report NoIslandBetween")
  }
}

///|
/// Snapshot decoding applies the same structural validation as authored puzzles.
test "snapshot rejects invalid definitions" {
  match Board::deserialize("BRIDGELAB|2,2|1,0,0,0|") {
    Err(_) => ()
    Ok(_) => fail("zero target must be rejected")
  }
  match Board::deserialize("BRIDGELAB|2,2|1,0,0,1;2,0,1,1|1,2,1;1,2,1") {
    Err(_) => ()
    Ok(_) => fail("duplicate bridge records must be rejected")
  }
}
