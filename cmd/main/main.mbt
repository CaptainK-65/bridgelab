///|
/// Minimal executable smoke test for the domain package.
fn main {
  let board = @core.Board::new(1, 3, [
    @core.island(1, 0, 0, 1),
    @core.island(2, 0, 2, 1),
  ])
  match board.set_bridge(1, 2, 1) {
    Ok(done) => println(done.serialize())
    Err(_) => println("move rejected")
  }
}
