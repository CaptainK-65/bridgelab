///|
fn seed_magnitude(seed : Int) -> Int {
  if seed < 0 {
    -seed
  } else {
    seed
  }
}

///|
/// Generate a reproducible staircase puzzle with a provably unique path solution.
/// The seed controls orientation and mirroring without relying on platform RNGs.
pub fn generate_puzzle(
  rows : Int,
  cols : Int,
  seed : Int,
) -> Result[Board, String] {
  if rows < 3 || cols < 3 || rows > 64 || cols > 64 {
    return Err("生成尺寸必须在 3 到 64 之间")
  }
  let normalized = seed_magnitude(seed)
  let reverse_rows = normalized % 2 == 1
  let reverse_cols = normalized / 2 % 2 == 1
  let mut horizontal = normalized / 4 % 2 == 0
  let row_direction = if reverse_rows { -1 } else { 1 }
  let col_direction = if reverse_cols { -1 } else { 1 }
  let mut row = if reverse_rows { rows - 1 } else { 0 }
  let mut col = if reverse_cols { cols - 1 } else { 0 }
  let positions : Array[Point] = [point(row, col)]
  let mut horizontal_open = true
  let mut vertical_open = true
  while horizontal_open || vertical_open {
    let mut moved = false
    if horizontal && horizontal_open {
      let next_col = col + col_direction * 2
      if next_col >= 0 && next_col < cols {
        col = next_col
        positions.push(point(row, col))
        moved = true
      } else {
        horizontal_open = false
      }
    } else if !horizontal && vertical_open {
      let next_row = row + row_direction * 2
      if next_row >= 0 && next_row < rows {
        row = next_row
        positions.push(point(row, col))
        moved = true
      } else {
        vertical_open = false
      }
    }
    horizontal = !horizontal
    if !moved && !(horizontal_open || vertical_open) {
      break
    }
  }
  if positions.length() < 2 {
    return Err("生成尺寸无法容纳足够岛屿")
  }
  let islands : Array[Island] = []
  for i = 0; i < positions.length(); i = i + 1 {
    let target = if i == 0 || i == positions.length() - 1 { 1 } else { 2 }
    islands.push(island(i + 1, positions[i].row, positions[i].col, target))
  }
  match Board::try_new(rows, cols, islands) {
    Err(_) => Err("生成器产生了无效棋盘")
    Ok(board) =>
      if board.assess().is_unique() {
        Ok(board)
      } else {
        Err("生成器未能证明谜题唯一")
      }
  }
}
