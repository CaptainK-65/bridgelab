///|
test "v2 snapshots remain backward compatible" {
  let legacy = "BRIDGELAB|1,3|1,0,0,1;2,0,2,1|"
  let board = match Board::deserialize(legacy) {
    Err(error) => fail(error)
    Ok(value) => value
  }
  assert_true(board.serialize_v2().has_prefix("BRIDGELAB2|"))
  match Board::deserialize(board.serialize_v2()) {
    Err(error) => fail(error)
    Ok(decoded) => assert_eq(decoded.serialize(), legacy)
  }
}

///|
test "v2 adapter exposes analysis solve generation and topology" {
  let snapshot = "BRIDGELAB2|1,5|1,0,0,1;2,0,2,2;3,0,4,1|"
  assert_true(bridgelab_analyze(snapshot).contains("\"unique\":true"))
  assert_true(bridgelab_solve(snapshot).has_prefix("SOLUTION|BRIDGELAB2|"))
  assert_eq(bridgelab_topology(snapshot), "TOPOLOGY|1,2;2,3")
  let generated = bridgelab_generate(7, 7, 42)
  assert_true(generated.has_prefix("BRIDGELAB2|"))
  assert_true(bridgelab_analyze(generated).contains("\"unique\":true"))
}
