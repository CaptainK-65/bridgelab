///|
fn bridge_error_text(error : BridgeError) -> String {
  match error {
    InvalidIsland => "InvalidIsland"
    SameIsland => "SameIsland"
    NotAligned => "NotAligned"
    NoIslandBetween => "NoIslandBetween"
    CrossesExisting => "CrossesExisting"
    ExceedsDegree => "ExceedsDegree"
    InvalidCount => "InvalidCount"
  }
}

///|
fn board_status_json(board : Board) -> String {
  let builder = StringBuilder()
  builder.write_string("{\"ok\":true,\"complete\":")
  builder.write_string(if board.is_complete() { "true" } else { "false" })
  builder.write_string(",\"connected\":")
  builder.write_string(if board.is_connected() { "true" } else { "false" })
  builder.write_string(",\"violations\":[]}")
  builder.to_string()
}

///|
#export_name("bridgelab_validate")
pub fn bridgelab_validate(snapshot : String) -> String {
  match Board::deserialize(snapshot) {
    Err(error) => "{\"ok\":false,\"error\":\"" + error + "\"}"
    Ok(board) => board_status_json(board)
  }
}

///|
#export_name("bridgelab_apply")
pub fn bridgelab_apply(
  snapshot : String,
  a : Int,
  b : Int,
  count : Int,
) -> String {
  match Board::deserialize(snapshot) {
    Err(error) => "ERROR|Snapshot|" + error
    Ok(board) =>
      match board.set_bridge(a, b, count) {
        Err(error) => "ERROR|" + bridge_error_text(error)
        Ok(next) => next.serialize()
      }
  }
}

///|
#export_name("bridgelab_status")
pub fn bridgelab_status(snapshot : String) -> String {
  match Board::deserialize(snapshot) {
    Err(error) => "{\"ok\":false,\"error\":\"" + error + "\"}"
    Ok(board) => board_status_json(board)
  }
}

///|
#export_name("bridgelab_hint")
pub fn bridgelab_hint(snapshot : String) -> String {
  match Board::deserialize(snapshot) {
    Err(error) => "ERROR|Snapshot|" + error
    Ok(board) =>
      match board.hint() {
        None => "NONE"
        Some(hint) => "HINT|\{hint.a}|\{hint.b}|\{hint.count}|" + hint.reason
      }
  }
}
