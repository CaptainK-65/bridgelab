///|
test "generator is deterministic and unique" {
  let first = match generate_puzzle(7, 7, 42) {
    Err(error) => fail(error)
    Ok(board) => board
  }
  let repeated = match generate_puzzle(7, 7, 42) {
    Err(error) => fail(error)
    Ok(board) => board
  }
  assert_eq(first.serialize(), repeated.serialize())
  assert_true(first.assess().is_unique())
  assert_eq(first.assess().difficulty(), "gentle")
}

///|
test "generator seed changes orientation" {
  let horizontal = match generate_puzzle(7, 9, 0) {
    Err(error) => fail(error)
    Ok(board) => board
  }
  let vertical = match generate_puzzle(7, 9, 4) {
    Err(error) => fail(error)
    Ok(board) => board
  }
  assert_false(horizontal.serialize() == vertical.serialize())
  assert_true(horizontal.assess().is_unique())
  assert_true(vertical.assess().is_unique())
}

///|
test "generator rejects unsupported dimensions" {
  match generate_puzzle(2, 8, 1) {
    Err(_) => ()
    Ok(_) => fail("too-small boards must be rejected")
  }
}
