///|
/// The stable coordinate of an island on the puzzle grid.
pub struct Point {
  row : Int
  col : Int
} derive(Eq, Debug)

///|
/// An island and its required number of incident bridge segments.
pub struct Island {
  id : Int
  position : Point
  target : Int
} derive(Eq, Debug)

///|
/// A bridge edge is identified by its two island ids in ascending order.
pub struct Bridge {
  a : Int
  b : Int
  count : Int
} derive(Eq, Debug)

///|
/// User-facing reasons for a rejected move.
pub enum BridgeError {
  InvalidIsland
  SameIsland
  NotAligned
  NoIslandBetween
  CrossesExisting
  ExceedsDegree
  InvalidCount
} derive(Eq, Debug)

///|
/// A local rule diagnostic. `island` is optional because some errors are global.
pub enum Violation {
  IslandOverfull(Int, Int, Int)
  IslandIncomplete(Int, Int, Int)
  Disconnected
} derive(Eq, Debug)

///|
/// A deterministic next move suggested by the constraint engine.
pub struct Hint {
  a : Int
  b : Int
  count : Int
  reason : String
} derive(Eq, Debug)

///|
/// Immutable puzzle position. Arrays are copied when a move creates a new board.
pub struct Board {
  rows : Int
  cols : Int
  islands : Array[Island]
  bridges : Array[Bridge]
} derive(Eq, Debug)

///|
/// A session with undo and redo stacks.
pub struct Game {
  current : Board
  past : Array[Board]
  future : Array[Board]
} derive(Debug)

///|
fn min_int(a : Int, b : Int) -> Int {
  if a < b {
    a
  } else {
    b
  }
}

///|
fn max_int(a : Int, b : Int) -> Int {
  if a > b {
    a
  } else {
    b
  }
}

///|
fn island_index(board : Board, id : Int) -> Int? {
  for i = 0; i < board.islands.length(); i = i + 1 {
    if board.islands[i].id == id {
      return Some(i)
    }
  }
  None
}

///|
fn bridge_index(board : Board, a : Int, b : Int) -> Int? {
  let low = min_int(a, b)
  let high = max_int(a, b)
  for i = 0; i < board.bridges.length(); i = i + 1 {
    let bridge = board.bridges[i]
    if bridge.a == low && bridge.b == high {
      return Some(i)
    }
  }
  None
}

///|
fn point_between(a : Point, b : Point, p : Point) -> Bool {
  if a.row == b.row && p.row == a.row {
    p.col > min_int(a.col, b.col) && p.col < max_int(a.col, b.col)
  } else if a.col == b.col && p.col == a.col {
    p.row > min_int(a.row, b.row) && p.row < max_int(a.row, b.row)
  } else {
    false
  }
}

///|
fn visible_pair(board : Board, a : Int, b : Int) -> Bool {
  if a == b {
    return false
  }
  match island_index(board, a) {
    None => false
    Some(ai) =>
      match island_index(board, b) {
        None => false
        Some(bi) => {
          let ap = board.islands[ai].position
          let bp = board.islands[bi].position
          if ap.row != bp.row && ap.col != bp.col {
            return false
          }
          for island in board.islands {
            if island.id != a &&
              island.id != b &&
              point_between(ap, bp, island.position) {
              return false
            }
          }
          true
        }
      }
  }
}

///|
fn segments_cross(a : Point, b : Point, c : Point, d : Point) -> Bool {
  let first_horizontal = a.row == b.row
  let second_horizontal = c.row == d.row
  if first_horizontal == second_horizontal {
    return false
  }
  let horizontal_a = if first_horizontal { a } else { c }
  let horizontal_b = if first_horizontal { b } else { d }
  let vertical_a = if first_horizontal { c } else { a }
  let vertical_b = if first_horizontal { d } else { b }
  let cross_row = horizontal_a.row
  let cross_col = vertical_a.col
  let inside_horizontal = cross_col >
    min_int(horizontal_a.col, horizontal_b.col) &&
    cross_col < max_int(horizontal_a.col, horizontal_b.col)
  let inside_vertical = cross_row > min_int(vertical_a.row, vertical_b.row) &&
    cross_row < max_int(vertical_a.row, vertical_b.row)
  inside_horizontal && inside_vertical
}

///|
fn would_cross(board : Board, a : Int, b : Int) -> Bool {
  match island_index(board, a) {
    None => true
    Some(ai) =>
      match island_index(board, b) {
        None => true
        Some(bi) => {
          let ap = board.islands[ai].position
          let bp = board.islands[bi].position
          for bridge in board.bridges {
            if bridge.a != min_int(a, b) || bridge.b != max_int(a, b) {
              match island_index(board, bridge.a) {
                None => continue
                Some(ci) =>
                  match island_index(board, bridge.b) {
                    None => continue
                    Some(di) =>
                      if segments_cross(
                          ap,
                          bp,
                          board.islands[ci].position,
                          board.islands[di].position,
                        ) {
                        return true
                      }
                  }
              }
            }
          }
          false
        }
      }
  }
}

///|
/// Construct an empty board. Island ids must be unique and targets must be non-negative.
pub fn Board::new(rows : Int, cols : Int, islands : Array[Island]) -> Board {
  Board::{ rows, cols, islands: islands.copy(), bridges: [], }
}

///|
/// Convenience constructor for island data.
pub fn island(id : Int, row : Int, col : Int, target : Int) -> Island {
  Island::{ id, position: Point::{ row, col, }, target, }
}

///|
/// Convenience constructor for coordinates.
pub fn point(row : Int, col : Int) -> Point {
  Point::{ row, col, }
}

///|
/// Read-only access to the current board.
pub fn Game::new(board : Board) -> Game {
  Game::{ current: board, past: [], future: [], }
}

///|
pub fn Game::board(self : Game) -> Board {
  self.current
}

///|
pub fn Board::find_island(self : Board, id : Int) -> Island? {
  match island_index(self, id) {
    None => None
    Some(index) => Some(self.islands[index])
  }
}

///|
pub fn Board::bridge_count(self : Board, a : Int, b : Int) -> Int {
  match bridge_index(self, a, b) {
    None => 0
    Some(index) => self.bridges[index].count
  }
}

///|
fn incident_count(board : Board, id : Int) -> Int {
  let mut total = 0
  for bridge in board.bridges {
    if bridge.a == id || bridge.b == id {
      total = total + bridge.count
    }
  }
  total
}

///|
/// Current degree of one island.
pub fn Board::degree(self : Board, id : Int) -> Int {
  incident_count(self, id)
}

///|
/// Find whether a candidate edge is legal before applying its count.
fn validate_edge(board : Board, a : Int, b : Int, count : Int) -> BridgeError? {
  if count < 0 || count > 2 {
    return Some(BridgeError::InvalidCount)
  }
  if island_index(board, a) is None || island_index(board, b) is None {
    return Some(BridgeError::InvalidIsland)
  }
  if a == b {
    return Some(BridgeError::SameIsland)
  }
  if !visible_pair(board, a, b) {
    return Some(BridgeError::NoIslandBetween)
  }
  if would_cross(board, a, b) {
    return Some(BridgeError::CrossesExisting)
  }
  let old = board.bridge_count(a, b)
  match island_index(board, a) {
    None => Some(BridgeError::InvalidIsland)
    Some(ai) =>
      match island_index(board, b) {
        None => Some(BridgeError::InvalidIsland)
        Some(bi) => {
          let new_degree_a = incident_count(board, a) - old + count
          let new_degree_b = incident_count(board, b) - old + count
          if new_degree_a > board.islands[ai].target ||
            new_degree_b > board.islands[bi].target {
            Some(BridgeError::ExceedsDegree)
          } else {
            None
          }
        }
      }
  }
}

///|
/// Set an edge to zero, one, or two bridge segments.
pub fn Board::set_bridge(
  self : Board,
  a : Int,
  b : Int,
  count : Int,
) -> Result[Board, BridgeError] {
  match validate_edge(self, a, b, count) {
    Some(error) => Err(error)
    None => {
      let low = min_int(a, b)
      let high = max_int(a, b)
      let next_bridges = self.bridges.copy()
      match bridge_index(self, a, b) {
        None =>
          if count == 0 {
            Ok(self)
          } else {
            next_bridges.push(Bridge::{ a: low, b: high, count, })
            Ok(Board::{ ..self, bridges: next_bridges, })
          }
        Some(index) => {
          if count == 0 {
            let _ = next_bridges.remove(index)
          } else {
            next_bridges[index] = Bridge::{ a: low, b: high, count, }
          }
          Ok(Board::{ ..self, bridges: next_bridges, })
        }
      }
    }
  }
}

///|
/// Cycle an edge through empty -> single -> double -> empty.
pub fn Board::toggle_bridge(
  self : Board,
  a : Int,
  b : Int,
) -> Result[Board, BridgeError] {
  let next = (self.bridge_count(a, b) + 1) % 3
  self.set_bridge(a, b, next)
}

///|
/// Validate all local and global rules without mutating the board.
pub fn Board::violations(self : Board) -> Array[Violation] {
  let result : Array[Violation] = []
  for island in self.islands {
    let actual = incident_count(self, island.id)
    if actual > island.target {
      result.push(Violation::IslandOverfull(island.id, actual, island.target))
    } else if actual < island.target {
      result.push(Violation::IslandIncomplete(island.id, actual, island.target))
    }
  }
  if self.islands.length() > 0 && !self.is_connected() {
    result.push(Violation::Disconnected)
  }
  result
}

///|
fn root_find(parent : Array[Int], value : Int) -> Int {
  let mut current = value
  while parent[current] != current {
    current = parent[current]
  }
  current
}

///|
/// All islands must be reachable through placed bridges.
pub fn Board::is_connected(self : Board) -> Bool {
  if self.islands.length() <= 1 {
    return self.islands.length() == 1
  }
  let parent = Array::make(self.islands.length(), 0)
  for i = 0; i < parent.length(); i = i + 1 {
    parent[i] = i
  }
  for bridge in self.bridges {
    match island_index(self, bridge.a) {
      None => continue
      Some(ai) =>
        match island_index(self, bridge.b) {
          None => continue
          Some(bi) => {
            let root_a = root_find(parent, ai)
            let root_b = root_find(parent, bi)
            parent[root_a] = root_b
          }
        }
    }
  }
  let first = root_find(parent, 0)
  for i = 1; i < parent.length(); i = i + 1 {
    if root_find(parent, i) != first {
      return false
    }
  }
  true
}

///|
/// Completion requires exact island degrees and one connected component.
pub fn Board::is_complete(self : Board) -> Bool {
  if self.islands.length() == 0 || !self.is_connected() {
    return false
  }
  for island in self.islands {
    if incident_count(self, island.id) != island.target {
      return false
    }
  }
  true
}

///|
fn available_edge(board : Board, a : Int, b : Int) -> Bool {
  board.bridge_count(a, b) == 0 &&
  visible_pair(board, a, b) &&
  !would_cross(board, a, b)
}

///|
/// Return a forced edge using local remaining-degree constraints.
pub fn Board::hint(self : Board) -> Hint? {
  for island in self.islands {
    let degree = incident_count(self, island.id)
    if degree >= island.target {
      continue
    }
    let mut options = 0
    let mut last_id = -1
    for other in self.islands {
      if other.id != island.id && available_edge(self, island.id, other.id) {
        options = options + 1
        last_id = other.id
      }
    }
    let remaining = island.target - degree
    if options == 1 && remaining <= 2 {
      return Some(Hint::{
        a: min_int(island.id, last_id),
        b: max_int(island.id, last_id),
        count: remaining,
        reason: "该岛只剩一条可用边",
      })
    }
    if options > 0 && remaining == options * 2 {
      return Some(Hint::{
        a: min_int(island.id, last_id),
        b: max_int(island.id, last_id),
        count: 2,
        reason: "该岛的所有候选边都必须为双桥",
      })
    }
  }
  None
}

///|
/// Apply one forced hint; returns the unchanged game when no hint exists.
pub fn Game::apply_hint(self : Game) -> Result[Game, BridgeError] {
  match self.current.hint() {
    None => Ok(self)
    Some(hint) => self.apply(hint.a, hint.b, hint.count)
  }
}

///|
/// Apply a move and record it in the undo stack.
pub fn Game::apply(
  self : Game,
  a : Int,
  b : Int,
  count : Int,
) -> Result[Game, BridgeError] {
  let next = self.current.set_bridge(a, b, count)
  match next {
    Err(error) => Err(error)
    Ok(board) => {
      let history = self.past.copy()
      history.push(self.current)
      Ok(Game::{ current: board, past: history, future: [], })
    }
  }
}

///|
/// Undo the most recent move.
pub fn Game::undo(self : Game) -> Game {
  match self.past.pop() {
    None => self
    Some(previous) => {
      let redo = self.future.copy()
      redo.push(self.current)
      Game::{ current: previous, past: self.past, future: redo, }
    }
  }
}

///|
/// Redo the most recently undone move.
pub fn Game::redo(self : Game) -> Game {
  match self.future.pop() {
    None => self
    Some(next) => {
      let history = self.past.copy()
      history.push(self.current)
      Game::{ current: next, past: history, future: self.future, }
    }
  }
}

///|
fn write_island(builder : StringBuilder, island : Island) -> Unit {
  builder.write_string(
    "\{island.id},\{island.position.row},\{island.position.col},\{island.target}",
  )
}

///|
/// Stable, dependency-free snapshot format for browser localStorage/share links.
pub fn Board::serialize(self : Board) -> String {
  let builder = StringBuilder()
  builder.write_string("BRIDGELAB|\{self.rows},\{self.cols}|")
  for i = 0; i < self.islands.length(); i = i + 1 {
    if i > 0 {
      builder.write_char(';')
    }
    write_island(builder, self.islands[i])
  }
  builder.write_string("|")
  for i = 0; i < self.bridges.length(); i = i + 1 {
    if i > 0 {
      builder.write_char(';')
    }
    let bridge = self.bridges[i]
    builder.write_string("\{bridge.a},\{bridge.b},\{bridge.count}")
  }
  builder.to_string()
}

///|
fn parse_number(text : StringView) -> Int? {
  let mut value = 0
  let mut found = false
  for ch in text.iter() {
    let digit = ch.to_int() - '0'.to_int()
    if digit < 0 || digit > 9 {
      return None
    }
    found = true
    value = value * 10 + digit
  }
  if found {
    Some(value)
  } else {
    None
  }
}

///|
fn parse_four(text : StringView) -> (Int, Int, Int, Int)? {
  let parts = text.split(",").to_array()
  if parts.length() != 4 {
    return None
  }
  match parse_number(parts[0]) {
    None => None
    Some(a) =>
      match parse_number(parts[1]) {
        None => None
        Some(b) =>
          match parse_number(parts[2]) {
            None => None
            Some(c) =>
              match parse_number(parts[3]) {
                None => None
                Some(d) => Some((a, b, c, d))
              }
          }
      }
  }
}

///|
fn parse_three(text : StringView) -> (Int, Int, Int)? {
  let parts = text.split(",").to_array()
  if parts.length() != 3 {
    return None
  }
  match parse_number(parts[0]) {
    None => None
    Some(a) =>
      match parse_number(parts[1]) {
        None => None
        Some(b) =>
          match parse_number(parts[2]) {
            None => None
            Some(c) => Some((a, b, c))
          }
      }
  }
}

///|
/// Parse a snapshot produced by `Board::serialize`.
pub fn Board::deserialize(text : String) -> Result[Board, String] {
  let sections = text.split("|").to_array()
  if sections.length() != 4 || sections[0] != "BRIDGELAB" {
    return Err("无效的 BridgeLab 快照头")
  }
  let dimensions = sections[1].split(",").to_array()
  if dimensions.length() != 2 {
    return Err("无效的棋盘尺寸")
  }
  match parse_number(dimensions[0]) {
    None => Err("无效的行数")
    Some(rows) =>
      match parse_number(dimensions[1]) {
        None => Err("无效的列数")
        Some(cols) => {
          let islands : Array[Island] = []
          if sections[2].length() > 0 {
            for item in sections[2].split(";") {
              match parse_four(item) {
                None => return Err("无效的岛屿记录")
                Some((id, row, col, target)) =>
                  islands.push(island(id, row, col, target))
              }
            }
          }
          let board = Board::new(rows, cols, islands)
          let mut result = board
          if sections[3].length() > 0 {
            for item in sections[3].split(";") {
              match parse_three(item) {
                None => return Err("无效的桥记录")
                Some((a, b, count)) =>
                  match result.set_bridge(a, b, count) {
                    Err(_) => return Err("快照包含非法桥")
                    Ok(next) => result = next
                  }
              }
            }
          }
          Ok(result)
        }
      }
  }
}
