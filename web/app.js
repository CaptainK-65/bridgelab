const LEVELS = {
  harbor: {
    title: 'Harbor Lines', subtitle: '暖港航线 · 入门', rows: 6, cols: 8,
    islands: [
      [1, 0, 1, 2], [2, 0, 4, 4], [3, 0, 7, 2], [4, 2, 1, 2], [5, 2, 4, 5], [6, 2, 7, 2], [7, 5, 4, 1],
    ],
    solution: [[1, 2, 1], [2, 3, 1], [1, 4, 1], [2, 5, 2], [3, 6, 1], [4, 5, 1], [5, 6, 1], [5, 7, 1]],
  },
  orchard: {
    title: 'Orchard Grid', subtitle: '果园网格 · 进阶', rows: 7, cols: 9,
    islands: [
      [1, 0, 1, 2], [2, 0, 4, 4], [3, 0, 7, 2], [4, 2, 1, 3], [5, 2, 4, 5], [6, 2, 7, 3], [7, 4, 1, 2], [8, 4, 4, 4], [9, 4, 7, 2], [10, 6, 4, 1],
    ],
    solution: [[1, 2, 1], [2, 3, 1], [1, 4, 1], [2, 5, 2], [3, 6, 1], [4, 5, 1], [4, 7, 1], [5, 6, 1], [5, 8, 1], [6, 9, 1], [7, 8, 1], [8, 9, 1], [8, 10, 1]],
  },
  archipelago: {
    title: 'Moon Archipelago', subtitle: '月下群岛 · 挑战', rows: 8, cols: 10,
    islands: [
      [1, 0, 1, 2], [2, 0, 4, 4], [3, 0, 8, 2], [4, 2, 1, 3], [5, 2, 4, 5], [6, 2, 8, 3], [7, 5, 1, 2], [8, 5, 4, 4], [9, 5, 8, 3], [10, 7, 4, 2], [11, 7, 8, 2],
    ],
    solution: [[1, 2, 1], [2, 3, 1], [1, 4, 1], [2, 5, 2], [3, 6, 1], [4, 5, 1], [4, 7, 1], [5, 6, 1], [5, 8, 1], [6, 9, 1], [7, 8, 1], [8, 9, 1], [8, 10, 1], [9, 11, 1], [10, 11, 1]],
  },
};

const state = { levelKey: 'harbor', islands: [], bridges: [], selectedIsland: null, selectedEdge: null, history: [], future: [], hint: null, moves: 0 };
const board = document.querySelector('#board');
const $ = (selector) => document.querySelector(selector);
let engine = null;

async function loadEngine() {
  try {
    engine = await import('./bridgelab-core.js');
    $('#engine-status').textContent = 'MOONBIT ENGINE · READY';
    render();
  } catch (_) {
    $('#engine-status').textContent = 'MOONBIT ENGINE · FALLBACK';
  }
}

function coreSnapshot() {
  const islandData = state.islands.map((item) => `${item.id},${item.row},${item.col},${item.target}`).join(';');
  const bridgeData = state.bridges.map((edge) => `${edge.a},${edge.b},${edge.count}`).join(';');
  return `BRIDGELAB|${LEVELS[state.levelKey].rows},${LEVELS[state.levelKey].cols}|${islandData}|${bridgeData}`;
}

function coreApply(a, b, count) {
  if (!engine?.bridgelab_apply) return null;
  const result = engine.bridgelab_apply(coreSnapshot(), a, b, count);
  if (result.startsWith('ERROR|')) return result;
  const bridgePart = result.split('|')[3];
  state.bridges = bridgePart ? bridgePart.split(';').filter(Boolean).map((item) => { const [x, y, value] = item.split(',').map(Number); return { a: x, b: y, count: value }; }) : [];
  return result;
}

function coreStatus() {
  if (!engine?.bridgelab_status) return null;
  try { return JSON.parse(engine.bridgelab_status(coreSnapshot())); } catch (_) { return null; }
}

function makeBoard(level) {
  state.islands = level.islands.map(([id, row, col, target]) => ({ id, row, col, target }));
  state.bridges = [];
  state.history = [];
  state.future = [];
  state.selectedIsland = null;
  state.selectedEdge = null;
  state.hint = null;
  state.moves = 0;
  render();
}

function islandById(id) { return state.islands.find((item) => item.id === id); }
function pairKey(a, b) { return `${Math.min(a, b)}-${Math.max(a, b)}`; }
function currentCount(a, b) { return state.bridges.find((edge) => pairKey(edge.a, edge.b) === pairKey(a, b))?.count || 0; }
function degree(id) { return state.bridges.reduce((sum, edge) => sum + (edge.a === id || edge.b === id ? edge.count : 0), 0); }
function visible(a, b) {
  const one = islandById(a), two = islandById(b);
  if (!one || !two || (one.row !== two.row && one.col !== two.col)) return false;
  return !state.islands.some((item) => item.id !== a && item.id !== b && ((one.row === two.row && item.row === one.row && item.col > Math.min(one.col, two.col) && item.col < Math.max(one.col, two.col)) || (one.col === two.col && item.col === one.col && item.row > Math.min(one.row, two.row) && item.row < Math.max(one.row, two.row))));
}
function crosses(a, b, c, d) {
  const firstHorizontal = a.row === b.row, secondHorizontal = c.row === d.row;
  if (firstHorizontal === secondHorizontal) return false;
  const horizontal = firstHorizontal ? [a, b] : [c, d];
  const vertical = firstHorizontal ? [c, d] : [a, b];
  return vertical[0].col > Math.min(horizontal[0].col, horizontal[1].col) && vertical[0].col < Math.max(horizontal[0].col, horizontal[1].col) && horizontal[0].row > Math.min(vertical[0].row, vertical[1].row) && horizontal[0].row < Math.max(vertical[0].row, vertical[1].row);
}
function legal(a, b, count) {
  if (!visible(a, b)) return '这两个岛之间不是一条可见的直线航线。';
  const one = islandById(a), two = islandById(b), old = currentCount(a, b);
  for (const edge of state.bridges) {
    if (pairKey(edge.a, edge.b) !== pairKey(a, b) && crosses(one, two, islandById(edge.a), islandById(edge.b))) return '桥梁不能穿过已有航线。';
  }
  if (degree(a) - old + count > one.target || degree(b) - old + count > two.target) return '这座岛的桥梁数不能超过目标。';
  return null;
}
function setBridge(a, b, count) {
  const before = JSON.stringify(state.bridges);
  state.history.push(before);
  state.future = [];
  const coreResult = coreApply(a, b, count);
  if (coreResult?.startsWith('ERROR|')) { state.history.pop(); flash(`核心规则拒绝了此操作：${coreResult.split('|')[1]}`, true); return false; }
  if (!coreResult) {
    const error = legal(a, b, count);
    if (error) { state.history.pop(); flash(error, true); return false; }
    const key = pairKey(a, b), index = state.bridges.findIndex((edge) => pairKey(edge.a, edge.b) === key);
    if (count === 0 && index >= 0) state.bridges.splice(index, 1);
    else if (index >= 0) state.bridges[index].count = count;
    else if (count > 0) state.bridges.push({ a: Math.min(a, b), b: Math.max(a, b), count });
  }
  state.moves += 1;
  state.hint = null;
  persist(); render();
  if (complete()) flash('所有岛屿已满足目标，群岛已连成。');
  return true;
}
function toggle(a, b) { setBridge(a, b, (currentCount(a, b) + 1) % 3); }
function edges() {
  const result = [];
  for (const one of state.islands) for (const two of state.islands) if (one.id < two.id && visible(one.id, two.id)) result.push([one, two]);
  return result;
}
function pointFor(item) {
  const level = LEVELS[state.levelKey];
  return { x: 7 + (item.col / Math.max(1, level.cols - 1)) * 86, y: 9 + (item.row / Math.max(1, level.rows - 1)) * 82 };
}
function drawLine(x1, y1, x2, y2, cls, extra = '') { return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}" ${extra}/>`; }
function render() {
  const level = LEVELS[state.levelKey];
  board.setAttribute('viewBox', '0 0 100 100');
  const parts = [];
  for (const [one, two] of edges()) {
    const start = pointFor(one), end = pointFor(two), count = currentCount(one.id, two.id), selected = state.selectedEdge && pairKey(...state.selectedEdge) === pairKey(one.id, two.id);
    parts.push(drawLine(start.x, start.y, end.x, end.y, 'edge-guide'));
    if (selected) parts.push(drawLine(start.x, start.y, end.x, end.y, 'bridge-highlight'));
    if (count > 0) {
      const offset = one.row === two.row ? 2.2 : 0;
      const offsetX = one.row === two.row ? 0 : 2.2;
      parts.push(drawLine(start.x + offsetX, start.y + offset, end.x + offsetX, end.y + offset, 'bridge'));
      if (count === 2) parts.push(drawLine(start.x - offsetX, start.y - offset, end.x - offsetX, end.y - offset, 'bridge secondary'));
    }
    parts.push(`<line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" class="edge-hit" data-a="${one.id}" data-b="${two.id}" tabindex="0" aria-label="岛屿 ${one.id} 到 ${two.id}，当前 ${count} 座桥"/>`);
  }
  for (const item of state.islands) {
    const p = pointFor(item), actual = degree(item.id), selected = item.id === state.selectedIsland;
    parts.push(`<g data-island="${item.id}" tabindex="0" role="button" aria-label="岛屿 ${item.id}，目标 ${item.target}，当前 ${actual}"><circle cx="${p.x}" cy="${p.y}" r="5.2" class="island-node ${selected ? 'selected' : ''} ${actual > item.target ? 'over' : ''}"/><text x="${p.x}" y="${p.y - .2}" class="island-label">${item.target}</text><text x="${p.x}" y="${p.y + 8}" class="island-degree">${actual}/${item.target}</text></g>`);
  }
  if (state.hint) { const one = pointFor(islandById(state.hint.a)), two = pointFor(islandById(state.hint.b)); parts.push(`<ellipse cx="${(one.x + two.x) / 2}" cy="${(one.y + two.y) / 2}" rx="7" ry="5" class="hint-mark"/>`); }
  board.innerHTML = parts.join('');
  board.querySelectorAll('.edge-hit').forEach((element) => { element.addEventListener('click', () => { const a = Number(element.dataset.a), b = Number(element.dataset.b); state.selectedEdge = [a, b]; state.selectedIsland = null; toggle(a, b); }); element.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); element.click(); } }); });
  board.querySelectorAll('[data-island]').forEach((element) => { element.addEventListener('click', () => { state.selectedIsland = Number(element.dataset.island); state.selectedEdge = null; render(); }); element.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); element.click(); } }); });
  updateInfo(level);
}
function connected() {
  const status = coreStatus();
  if (status) return status.connected;
  if (!state.islands.length) return false;
  const seen = new Set([state.islands[0].id]), queue = [state.islands[0].id];
  while (queue.length) { const id = queue.shift(); state.bridges.filter((edge) => edge.count > 0 && (edge.a === id || edge.b === id)).forEach((edge) => { const next = edge.a === id ? edge.b : edge.a; if (!seen.has(next)) { seen.add(next); queue.push(next); } }); }
  return seen.size === state.islands.length;
}
function complete() {
  const status = coreStatus();
  if (status) return status.complete;
  return connected() && state.islands.every((item) => degree(item.id) === item.target);
}
function updateInfo(level) {
  const finished = state.islands.filter((item) => degree(item.id) === item.target).length;
  $('#level-title').textContent = level.title; $('#progress-label').textContent = `${finished} / ${state.islands.length} 岛屿完成`; $('#move-label').textContent = `MOVE ${String(state.moves).padStart(2, '0')}`;
  $('#undo-button').disabled = !state.history.length; $('#redo-button').disabled = !state.future.length;
  const selected = islandById(state.selectedIsland); const number = $('#selected-number'); number.textContent = selected ? selected.target : '—'; $('#selected-name').textContent = selected ? `岛屿 ${String(selected.id).padStart(2, '0')}` : '未选择'; $('#selected-coords').textContent = selected ? `坐标 ${selected.row + 1} · ${selected.col + 1}` : '点击岛屿查看详情'; $('#selected-degree').textContent = selected ? degree(selected.id) : '0'; $('#selected-target').textContent = selected ? selected.target : '—'; $('#selected-meter').style.width = selected ? `${Math.min(100, degree(selected.id) / selected.target * 100)}%` : '0%';
  const done = complete(); $('#status-dot').classList.toggle('done', done); $('#status-title').textContent = done ? '已完成' : '正在构建'; $('#status-detail').textContent = done ? '所有岛屿已满足目标，群岛连通。' : `还有 ${state.islands.length - finished} 座岛屿需要满足目标。`; $('#completion-banner').hidden = !done;
  if (state.selectedEdge) $('#selection-label').textContent = `航线 ${state.selectedEdge[0]} — ${state.selectedEdge[1]} · ${currentCount(...state.selectedEdge)} 桥`; else if (selected) $('#selection-label').textContent = `岛屿 ${selected.id} · ${degree(selected.id)} / ${selected.target}`; else $('#selection-label').textContent = '选择一条航线开始';
}
function flash(message, error = false) { $('#feedback-text').textContent = message; $('#feedback').className = `feedback ${error ? 'error' : 'success'}`; $('#feedback .feedback-icon').textContent = error ? '×' : '◌'; clearTimeout(flash.timer); flash.timer = setTimeout(() => { $('#feedback').className = 'feedback'; $('#feedback-text').textContent = '点击一条虚线航线，在岛屿之间搭桥。'; $('#feedback .feedback-icon').textContent = '◌'; }, 3200); }
function undo() { if (!state.history.length) return; state.future.push(JSON.stringify(state.bridges)); state.bridges = JSON.parse(state.history.pop()); state.moves = Math.max(0, state.moves - 1); persist(); render(); flash('已撤销上一座桥。'); }
function redo() { if (!state.future.length) return; state.history.push(JSON.stringify(state.bridges)); state.bridges = JSON.parse(state.future.pop()); state.moves += 1; persist(); render(); flash('已重做上一座桥。'); }
function giveHint() {
  let solution = null;
  if (engine?.bridgelab_hint) {
    const result = engine.bridgelab_hint(coreSnapshot());
    if (result.startsWith('HINT|')) { const [_, a, b, count, ...reason] = result.split('|'); solution = [Number(a), Number(b), Number(count), reason.join('|')]; }
  } else {
    solution = LEVELS[state.levelKey].solution.find(([a, b, count]) => currentCount(a, b) !== count && visible(a, b) && !legal(a, b, count));
  }
  if (!solution) { $('#hint-text').textContent = '当前局面没有可直接解释的提示，继续观察候选航线。'; flash('核心引擎暂时没有确定性提示。'); return; }
  const [a, b, count, reason] = solution; state.hint = { a, b, count }; $('#hint-text').textContent = reason ? `${reason}：岛屿 ${a} 与 ${b} 应保留 ${count} 座桥。` : `建议检查岛屿 ${a} 与 ${b}：这条航线应保留 ${count} 座桥。`; state.selectedEdge = [a, b]; render(); flash('已标出一条值得观察的航线。'); }
function persist() { try { localStorage.setItem(`bridgelab:${state.levelKey}`, JSON.stringify({ bridges: state.bridges, moves: state.moves })); } catch (_) {} }
function loadPersisted() { try { const saved = JSON.parse(localStorage.getItem(`bridgelab:${state.levelKey}`)); if (saved) { state.bridges = saved.bridges || []; state.moves = saved.moves || 0; } } catch (_) {} }
function selectLevel(key) { state.levelKey = key; document.querySelectorAll('.level-option').forEach((button) => { const active = button.dataset.level === key; button.classList.toggle('active', active); button.setAttribute('aria-selected', active); }); makeBoard(LEVELS[key]); loadPersisted(); render(); }

document.querySelectorAll('.level-option').forEach((button) => button.addEventListener('click', () => selectLevel(button.dataset.level)));
$('#undo-button').addEventListener('click', undo); $('#redo-button').addEventListener('click', redo); $('#reset-button').addEventListener('click', () => { try { localStorage.removeItem(`bridgelab:${state.levelKey}`); } catch (_) {} makeBoard(LEVELS[state.levelKey]); flash('棋盘已重置，重新开始吧。'); }); $('#hint-button').addEventListener('click', giveHint); $('#next-level-button').addEventListener('click', () => { const keys = Object.keys(LEVELS), next = keys[(keys.indexOf(state.levelKey) + 1) % keys.length]; selectLevel(next); });
document.addEventListener('keydown', (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'z') { event.preventDefault(); event.shiftKey ? redo() : undo(); } if (event.key === 'r' && !event.metaKey && !event.ctrlKey && document.activeElement === board) { selectLevel(state.levelKey); } });

makeBoard(LEVELS[state.levelKey]); loadPersisted(); render(); loadEngine();
