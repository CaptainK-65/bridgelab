import test from 'node:test';
import assert from 'node:assert/strict';
import * as core from '../web/bridgelab-core.js';

const exportsExpected = [
  'bridgelab_validate', 'bridgelab_apply', 'bridgelab_status', 'bridgelab_hint',
  'bridgelab_analyze', 'bridgelab_solve', 'bridgelab_generate', 'bridgelab_topology',
];

test('browser core exposes the complete v0.2 contract', () => {
  for (const name of exportsExpected) assert.equal(typeof core[name], 'function', name);
});

test('legacy snapshots validate and solve through the v2 engine', () => {
  const legacy = 'BRIDGELAB|1,5|1,0,0,1;2,0,2,2;3,0,4,1|';
  assert.equal(JSON.parse(core.bridgelab_validate(legacy)).ok, true);
  assert.match(core.bridgelab_solve(legacy), /^SOLUTION\|BRIDGELAB2\|/);
});

test('analysis distinguishes unique, multiple and invalid puzzles', () => {
  const unique = 'BRIDGELAB2|1,5|1,0,0,1;2,0,2,2;3,0,4,1|';
  const multiple = 'BRIDGELAB2|3,3|1,0,0,3;2,0,2,3;3,2,0,3;4,2,2,3|';
  assert.equal(JSON.parse(core.bridgelab_analyze(unique)).unique, true);
  assert.equal(core.bridgelab_solve(multiple), 'MULTIPLE_SOLUTIONS');
  assert.equal(JSON.parse(core.bridgelab_validate('broken')).ok, false);
});

test('seeded generation is deterministic and unique', () => {
  const first = core.bridgelab_generate(7, 7, 42);
  const repeated = core.bridgelab_generate(7, 7, 42);
  assert.equal(first, repeated);
  assert.equal(JSON.parse(core.bridgelab_analyze(first)).unique, true);
});

test('all twelve catalogue puzzles have a unique solution', () => {
  const authored = [
    'BRIDGELAB2|5,7|1,0,0,1;2,2,0,2;3,2,2,2;4,4,2,2;5,4,4,2;6,4,6,1|',
    'BRIDGELAB2|7,9|1,6,0,1;2,4,0,2;3,4,2,2;4,2,2,2;5,2,4,2;6,0,4,2;7,0,6,2;8,0,8,1|',
    'BRIDGELAB2|9,11|1,0,10,1;2,2,10,2;3,2,8,2;4,4,8,2;5,4,6,2;6,6,6,2;7,6,4,2;8,8,4,2;9,8,2,2;10,8,0,1|',
  ];
  const generated = [[5, 7, 0], [7, 5, 4], [7, 7, 1], [7, 9, 2], [9, 7, 5], [9, 9, 6], [9, 11, 7], [11, 9, 10], [11, 11, 13]].map(([rows, cols, seed]) => core.bridgelab_generate(rows, cols, seed));
  for (const snapshot of [...authored, ...generated]) assert.equal(JSON.parse(core.bridgelab_analyze(snapshot)).unique, true);
});
