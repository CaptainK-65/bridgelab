import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const app = await readFile(new URL('../web/app.js', import.meta.url), 'utf8');
const html = await readFile(new URL('../web/index.html', import.meta.url), 'utf8');

test('web client has no embedded solutions or JavaScript rule fallback', () => {
  assert.doesNotMatch(app, /solution\s*:/);
  assert.doesNotMatch(app, /function\s+(visible|crosses|legal)\s*\(/);
});

test('workbench exposes play solve and create modes', () => {
  for (const mode of ['play', 'solve', 'create']) {
    assert.match(html, new RegExp(`id="${mode}-panel"`));
    assert.match(html, new RegExp(`data-mode="${mode}"`));
  }
  assert.match(app, /const GENERATED_LEVELS = \[/);
  assert.equal((app.match(/^\s*\['[^\n]+$/gm) || []).length, 9);
});
