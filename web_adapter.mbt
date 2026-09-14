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
fn board_analysis_json(board : Board) -> String {
  let assessment = board.assess()
  let builder = StringBuilder()
  builder.write_string("{\"ok\":true,\"solvable\":")
  builder.write_string(if assessment.is_solvable() { "true" } else { "false" })
  builder.write_string(",\"unique\":")
  builder.write_string(if assessment.is_unique() { "true" } else { "false" })
  builder.write_string(",\"difficulty\":\"")
  builder.write_string(assessment.difficulty())
  builder.write_string("\",\"islands\":")
  builder.write_string(assessment.island_count().to_string())
  builder.write_string(",\"candidates\":")
  builder.write_string(assessment.candidate_count().to_string())
  builder.write_string(",\"contradictions\":")
  builder.write_string(board.contradictions().length().to_string())
  builder.write_string("}")
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
      match board.smart_hint() {
        None => "NONE"
        Some(hint) => "HINT|\{hint.a}|\{hint.b}|\{hint.count}|" + hint.reason
      }
  }
}

///|
#export_name("bridgelab_analyze")
pub fn bridgelab_analyze(snapshot : String) -> String {
  match Board::deserialize(snapshot) {
    Err(error) => "{\"ok\":false,\"error\":\"" + error + "\"}"
    Ok(board) => board_analysis_json(board)
  }
}

///|
#export_name("bridgelab_solve")
pub fn bridgelab_solve(snapshot : String) -> String {
  match Board::deserialize(snapshot) {
    Err(error) => "ERROR|Snapshot|" + error
    Ok(board) =>
      match board.solve() {
        NoSolution => "NO_SOLUTION"
        UniqueSolution(solution) => "SOLUTION|" + solution.serialize_v2()
        MultipleSolutions(_, _) => "MULTIPLE_SOLUTIONS"
        SearchLimitReached => "SEARCH_LIMIT"
      }
  }
}

///|
#export_name("bridgelab_generate")
pub fn bridgelab_generate(rows : Int, cols : Int, seed : Int) -> String {
  match generate_puzzle(rows, cols, seed) {
    Err(error) => "ERROR|Generator|" + error
    Ok(board) => board.serialize_v2()
  }
}

///|
#export_name("bridgelab_topology")
pub fn bridgelab_topology(snapshot : String) -> String {
  match Board::deserialize(snapshot) {
    Err(error) => "ERROR|Snapshot|" + error
    Ok(board) => {
      let builder = StringBuilder()
      builder.write_string("TOPOLOGY|")
      let edges = board.candidate_edges()
      for i = 0; i < edges.length(); i = i + 1 {
        if i > 0 {
          builder.write_char(';')
        }
        builder.write_string("\{edges[i].first()},\{edges[i].second()}")
      }
      builder.to_string()
    }
  }
}
