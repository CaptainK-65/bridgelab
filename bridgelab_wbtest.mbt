///|
/// Whitebox tests for geometric helpers.
test "point between only sees strict interior" {
  assert_true(point_between(point(0, 0), point(0, 4), point(0, 2)))
  assert_false(point_between(point(0, 0), point(0, 4), point(0, 0)))
  assert_false(point_between(point(0, 0), point(0, 4), point(1, 2)))
}

///|
test "parallel segments do not cross" {
  assert_false(
    segments_cross(point(0, 0), point(0, 3), point(1, 0), point(1, 3)),
  )
  assert_true(
    segments_cross(point(0, 0), point(0, 3), point(-1, 1), point(1, 1)),
  )
}
