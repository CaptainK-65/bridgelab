const LEVELS = {
  harbor: {
    title: 'Harbor Lines', subtitle: '暖港航线 · 短线', rows: 5, cols: 7,
    islands: [
      [1, 0, 0, 1], [2, 2, 0, 2], [3, 2, 2, 2], [4, 4, 2, 2], [5, 4, 4, 2], [6, 4, 6, 1],
    ],
  },
  orchard: {
    title: 'Orchard Grid', subtitle: '果园网格 · 中线', rows: 7, cols: 9,
    islands: [
      [1, 6, 0, 1], [2, 4, 0, 2], [3, 4, 2, 2], [4, 2, 2, 2], [5, 2, 4, 2], [6, 0, 4, 2], [7, 0, 6, 2], [8, 0, 8, 1],
    ],
  },
  archipelago: {
    title: 'Moon Archipelago', subtitle: '月下群岛 · 长线', rows: 9, cols: 11,
    islands: [
      [1, 0, 10, 1], [2, 2, 10, 2], [3, 2, 8, 2], [4, 4, 8, 2], [5, 4, 6, 2], [6, 6, 6, 2], [7, 6, 4, 2], [8, 8, 4, 2], [9, 8, 2, 2], [10, 8, 0, 1],
    ],
  },
};

const GENERATED_LEVELS = [
  ['tideline', 'Tide Path', '潮汐路径 · 04', 5, 7, 0],
  ['lighthouse', 'Lighthouse Walk', '灯塔漫步 · 05', 7, 5, 4],
  ['mangrove', 'Mangrove Steps', '红树林阶梯 · 06', 7, 7, 1],
  ['estuary', 'Estuary Route', '河口航路 · 07', 7, 9, 2],
  ['monsoon', 'Monsoon Track', '季风轨迹 · 08', 9, 7, 5],
  ['pelican', 'Pelican Reach', '鹈鹕远航 · 09', 9, 9, 6],
  ['breakwater', 'Breakwater', '防波堤 · 10', 9, 11, 7],
  ['bluehour', 'Blue Hour', '蓝调时刻 · 11', 11, 9, 10],
  ['northstar', 'North Star', '北辰航线 · 12', 11, 11, 13],
];

const state = { levelKey: 'harbor', islands: [], bridges: [], topology: [], selectedIsland: null, selectedEdge: null, history: [], future: [], hint: null, moves: 0 };
const board = document.querySelector('#board');
const $ = (selector) => document.querySelector(selector);
let engine = null;
let lastSolvedSnapshot = null;
const editorState = { rows: 7, cols: 7, islands: [], cursorRow: 0, cursorCol: 0 };

async function loadEngine() {
  try {
    engine = await import('./bridgelab-core.js');
    $('#engine-status').textContent = 'MOONBIT ENGINE · READY';
    registerGeneratedLevels();
    refreshTopology();
    loadPersisted();
    render();
  } catch (_) {
    engine = null;
    $('#engine-status').textContent = 'MOONBIT ENGINE · FAILED';
    document.body.classList.add('engine-failed');
    flash('MoonBit 规则核心加载失败，棋盘已进入只读模式。', true);
  }
}

function parseSnapshot(snapshot) {
  const sections = snapshot.trim().split('|');
  if (sections.length !== 4 || !['BRIDGELAB', 'BRIDGELAB2'].includes(sections[0])) throw new Error('快照头或段落数量无效');
  const [rows, cols] = sections[1].split(',').map(Number);
  const islands = sections[2] ? sections[2].split(';').filter(Boolean).map((item) => { const [id, row, col, target] = item.split(',').map(Number); return { id, row, col, target }; }) : [];
  const bridges = decodeBridges(snapshot);
  return { rows, cols, islands, bridges };
}

function registerGeneratedLevels() {
  for (const [key, title, subtitle, rows, cols, seed] of GENERATED_LEVELS) {
    const snapshot = engine.bridgelab_generate(rows, cols, seed);
    if (snapshot.startsWith('ERROR|')) continue;
    const parsed = parseSnapshot(snapshot);
    LEVELS[key] = { title, subtitle, rows, cols, islands: parsed.islands.map(({ id, row, col, target }) => [id, row, col, target]) };
    const button = document.createElement('button');
    button.className = 'level-option'; button.dataset.level = key; button.setAttribute('role', 'option'); button.setAttribute('aria-selected', 'false');
    button.innerHTML = `<span class="level-number">${String(Object.keys(LEVELS).length).padStart(2, '0')}</span><span><b>${title}</b><small>${subtitle}</small></span><span class="level-arrow">↗</span>`;
    button.addEventListener('click', () => selectLevel(key));
    $('.level-list').append(button);
  }
}

function coreSnapshot() {
  const islandData = state.islands.map((item) => `${item.id},${item.row},${item.col},${item.target}`).join(';');
  const bridgeData = state.bridges.map((edge) => `${edge.a},${edge.b},${edge.count}`).join(';');
  return `BRIDGELAB2|${LEVELS[state.levelKey].rows},${LEVELS[state.levelKey].cols}|${islandData}|${bridgeData}`;
}

function decodeBridges(snapshot) {
  const bridgePart = snapshot.split('|')[3];
  return bridgePart ? bridgePart.split(';').filter(Boolean).map((item) => { const [a, b, count] = item.split(',').map(Number); return { a, b, count }; }) : [];
}

function refreshTopology() {
  if (!engine?.bridgelab_topology) { state.topology = []; return; }
  const result = engine.bridgelab_topology(coreSnapshot());
  if (result.startsWith('ERROR|')) { state.topology = []; return; }
  const body = result.split('|')[1] || '';
  state.topology = body ? body.split(';').map((item) => item.split(',').map(Number)) : [];
}

function coreApply(a, b, count) {
  if (!engine?.bridgelab_apply) return 'ERROR|EngineUnavailable';
  const result = engine.bridgelab_apply(coreSnapshot(), a, b, count);
  if (result.startsWith('ERROR|')) return result;
  state.bridges = decodeBridges(result);
  return result;
}

function coreStatus() {
  if (!engine?.bridgelab_status) return null;
  try { return JSON.parse(engine.bridgelab_status(coreSnapshot())); } catch (_) { return null; }
}

function makeBoard(level) {
  state.islands = level.islands.map(([id, row, col, target]) => ({ id, row, col, target }));
  state.bridges = [];
  state.topology = [];
  state.history = [];
  state.future = [];
  state.selectedIsland = null;
  state.selectedEdge = null;
  state.hint = null;
  state.moves = 0;
  refreshTopology();
  render();
}

function islandById(id) { return state.islands.find((item) => item.id === id); }
function pairKey(a, b) { return `${Math.min(a, b)}-${Math.max(a, b)}`; }
function currentCount(a, b) { return state.bridges.find((edge) => pairKey(edge.a, edge.b) === pairKey(a, b))?.count || 0; }
function degree(id) { return state.bridges.reduce((sum, edge) => sum + (edge.a === id || edge.b === id ? edge.count : 0), 0); }
function setBridge(a, b, count) {
  const before = JSON.stringify(state.bridges);
  state.history.push(before);
  state.future = [];
  const coreResult = coreApply(a, b, count);
  if (coreResult.startsWith('ERROR|')) { state.history.pop(); flash(`核心规则拒绝了此操作：${coreResult.split('|')[1]}`, true); return false; }
  state.moves += 1;
  state.hint = null;
  persist(); render();
  if (complete()) flash('所有岛屿已满足目标，群岛已连成。');
  return true;
}
function toggle(a, b) { setBridge(a, b, (currentCount(a, b) + 1) % 3); }
function edges() {
  return state.topology.map(([a, b]) => [islandById(a), islandById(b)]).filter(([a, b]) => a && b);
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
  return status?.connected === true;
}
function complete() {
  const status = coreStatus();
  return status?.complete === true;
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
  }
  if (!solution) { $('#hint-text').textContent = '当前局面没有可直接解释的提示，继续观察候选航线。'; flash('核心引擎暂时没有确定性提示。'); return; }
  const [a, b, count, reason] = solution; state.hint = { a, b, count }; $('#hint-text').textContent = reason ? `${reason}：岛屿 ${a} 与 ${b} 应保留 ${count} 座桥。` : `建议检查岛屿 ${a} 与 ${b}：这条航线应保留 ${count} 座桥。`; state.selectedEdge = [a, b]; render(); flash('已标出一条值得观察的航线。'); }
function persist() { try { localStorage.setItem(`bridgelab:${state.levelKey}`, JSON.stringify({ version: 2, snapshot: coreSnapshot(), moves: state.moves })); } catch (_) {} }
function loadPersisted() { try { const saved = JSON.parse(localStorage.getItem(`bridgelab:${state.levelKey}`)); if (!saved || !engine?.bridgelab_validate) return; const candidate = saved.snapshot || (() => { state.bridges = saved.bridges || []; return coreSnapshot(); })(); const validation = JSON.parse(engine.bridgelab_validate(candidate)); if (validation.ok) { state.bridges = decodeBridges(candidate); state.moves = Number(saved.moves) || 0; } else { state.bridges = []; state.moves = 0; } } catch (_) { state.bridges = []; state.moves = 0; } }
function selectLevel(key) { state.levelKey = key; document.querySelectorAll('.level-option').forEach((button) => { const active = button.dataset.level === key; button.classList.toggle('active', active); button.setAttribute('aria-selected', active); }); makeBoard(LEVELS[key]); loadPersisted(); render(); }

function setMode(mode) {
  document.querySelectorAll('.mode-button').forEach((button) => { const active = button.dataset.mode === mode; button.classList.toggle('active', active); button.setAttribute('aria-pressed', active); });
  document.querySelectorAll('.mode-panel').forEach((panel) => { panel.hidden = panel.id !== `${mode}-panel`; });
  if (mode === 'create') renderEditor();
  const heading = $(`#${mode}-panel h2`); if (heading) heading.focus({ preventScroll: true });
}

function loadSnapshotIntoPlay(snapshot, title = 'Custom Puzzle') {
  if (!engine) return false;
  const validation = JSON.parse(engine.bridgelab_validate(snapshot));
  if (!validation.ok) return false;
  const parsed = parseSnapshot(snapshot);
  LEVELS.custom = { title, subtitle: '自定义关卡', rows: parsed.rows, cols: parsed.cols, islands: parsed.islands.map(({ id, row, col, target }) => [id, row, col, target]) };
  state.levelKey = 'custom';
  makeBoard(LEVELS.custom);
  state.bridges = parsed.bridges;
  refreshTopology(); render(); setMode('play');
  document.querySelectorAll('.level-option').forEach((button) => { button.classList.remove('active'); button.setAttribute('aria-selected', 'false'); });
  return true;
}

function analyzeInput() {
  if (!engine) return;
  const snapshot = $('#puzzle-input').value.trim();
  try {
    const report = JSON.parse(engine.bridgelab_analyze(snapshot));
    $('#solve-result').textContent = report.ok ? `状态：${report.solvable ? '可解' : '不可解'}\n唯一性：${report.unique ? '唯一解' : '未证明唯一'}\n难度：${report.difficulty}\n岛屿：${report.islands}\n候选边：${report.candidates}\n矛盾：${report.contradictions}` : `输入错误：${report.error}`;
  } catch (error) { $('#solve-result').textContent = `分析失败：${error.message}`; }
}

function solveInput() {
  if (!engine) return;
  const snapshot = $('#puzzle-input').value.trim();
  const result = engine.bridgelab_solve(snapshot);
  lastSolvedSnapshot = result.startsWith('SOLUTION|') ? result.slice('SOLUTION|'.length) : null;
  $('#load-solution-button').disabled = !lastSolvedSnapshot;
  if (lastSolvedSnapshot) {
    $('#solve-result').textContent = `已找到唯一解。\n\n${lastSolvedSnapshot}`;
  } else {
    const messages = { NO_SOLUTION: '该局面无解。', MULTIPLE_SOLUTIONS: '该局面存在多个解，无法作为唯一谜题发布。', SEARCH_LIMIT: '搜索达到安全预算，请缩小棋盘或减少候选边。' };
    $('#solve-result').textContent = messages[result] || result.replaceAll('|', ' · ');
  }
}

function editorSnapshot() {
  const islandData = editorState.islands.map(({ id, row, col, target }) => `${id},${row},${col},${target}`).join(';');
  return `BRIDGELAB2|${editorState.rows},${editorState.cols}|${islandData}|`;
}

function syncEditorSource() { $('#editor-export').value = editorSnapshot(); }

function renderEditor() {
  const svg = $('#editor-board'); if (!svg) return;
  svg.setAttribute('viewBox', '0 0 100 100');
  const parts = [];
  for (let row = 0; row < editorState.rows; row += 1) { const y = 6 + row / Math.max(1, editorState.rows - 1) * 88; parts.push(`<line x1="6" y1="${y}" x2="94" y2="${y}" class="editor-grid-line"/>`); }
  for (let col = 0; col < editorState.cols; col += 1) { const x = 6 + col / Math.max(1, editorState.cols - 1) * 88; parts.push(`<line x1="${x}" y1="6" x2="${x}" y2="94" class="editor-grid-line"/>`); }
  for (const island of editorState.islands) { const x = 6 + island.col / Math.max(1, editorState.cols - 1) * 88, y = 6 + island.row / Math.max(1, editorState.rows - 1) * 88; parts.push(`<circle cx="${x}" cy="${y}" r="4.5" class="editor-island"/><text x="${x}" y="${y}" class="editor-label">${island.target}</text>`); }
  const cursorX = 6 + editorState.cursorCol / Math.max(1, editorState.cols - 1) * 88, cursorY = 6 + editorState.cursorRow / Math.max(1, editorState.rows - 1) * 88;
  parts.push(`<circle cx="${cursorX}" cy="${cursorY}" r="5.8" class="editor-cursor"/>`);
  svg.innerHTML = parts.join(''); syncEditorSource(); $('#play-created-button').disabled = true;
  svg.setAttribute('aria-label', `关卡编辑网格，光标第 ${editorState.cursorRow + 1} 行第 ${editorState.cursorCol + 1} 列，共 ${editorState.islands.length} 个岛屿`);
}

function editorCellFromEvent(event) {
  const rect = $('#editor-board').getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
  return { row: Math.round(y * (editorState.rows - 1)), col: Math.round(x * (editorState.cols - 1)) };
}

function editIsland(event, remove = false) {
  const { row, col } = editorCellFromEvent(event);
  editorState.cursorRow = row; editorState.cursorCol = col;
  editIslandAtCursor(remove);
}

function editIslandAtCursor(remove = false) {
  const row = editorState.cursorRow, col = editorState.cursorCol;
  const index = editorState.islands.findIndex((item) => item.row === row && item.col === col);
  if (remove) { if (index >= 0) editorState.islands.splice(index, 1); }
  else if (index >= 0) editorState.islands[index].target = editorState.islands[index].target % 8 + 1;
  else editorState.islands.push({ id: Math.max(0, ...editorState.islands.map((item) => item.id)) + 1, row, col, target: 1 });
  renderEditor();
}

function loadEditorSnapshot(snapshot) {
  const report = JSON.parse(engine.bridgelab_validate(snapshot));
  if (!report.ok) throw new Error(report.error);
  const parsed = parseSnapshot(snapshot); editorState.rows = parsed.rows; editorState.cols = parsed.cols; editorState.islands = parsed.islands;
  $('#creator-rows').value = parsed.rows; $('#creator-cols').value = parsed.cols; renderEditor();
}

function validateEditor() {
  const report = JSON.parse(engine.bridgelab_analyze(editorSnapshot()));
  $('#editor-result').textContent = report.ok ? `可解：${report.solvable ? '是' : '否'}\n唯一解：${report.unique ? '是' : '否'}\n难度：${report.difficulty}\n候选边：${report.candidates}` : `错误：${report.error}`;
  $('#play-created-button').disabled = !report.ok || !report.unique;
}

document.querySelectorAll('.level-option').forEach((button) => button.addEventListener('click', () => selectLevel(button.dataset.level)));
document.querySelectorAll('.mode-button').forEach((button) => button.addEventListener('click', () => setMode(button.dataset.mode)));
$('#undo-button').addEventListener('click', undo); $('#redo-button').addEventListener('click', redo); $('#reset-button').addEventListener('click', () => { try { localStorage.removeItem(`bridgelab:${state.levelKey}`); } catch (_) {} makeBoard(LEVELS[state.levelKey]); flash('棋盘已重置，重新开始吧。'); }); $('#hint-button').addEventListener('click', giveHint); $('#next-level-button').addEventListener('click', () => { const keys = Object.keys(LEVELS), next = keys[(keys.indexOf(state.levelKey) + 1) % keys.length]; selectLevel(next); });
$('#analyze-button').addEventListener('click', analyzeInput); $('#solve-button').addEventListener('click', solveInput); $('#load-solution-button').addEventListener('click', () => { if (lastSolvedSnapshot) loadSnapshotIntoPlay(lastSolvedSnapshot, 'Solved Puzzle'); });
$('#generate-button').addEventListener('click', () => { const rows = Number($('#creator-rows').value), cols = Number($('#creator-cols').value), seed = Number($('#creator-seed').value); const result = engine.bridgelab_generate(rows, cols, seed); if (result.startsWith('ERROR|')) { $('#editor-result').textContent = result.replaceAll('|', ' · '); return; } loadEditorSnapshot(result); validateEditor(); });
$('#clear-editor-button').addEventListener('click', () => { editorState.rows = Number($('#creator-rows').value); editorState.cols = Number($('#creator-cols').value); editorState.islands = []; renderEditor(); $('#editor-result').textContent = '画布已清空。'; });
$('#editor-board').addEventListener('click', (event) => editIsland(event)); $('#editor-board').addEventListener('contextmenu', (event) => { event.preventDefault(); editIsland(event, true); });
$('#editor-board').addEventListener('keydown', (event) => { const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', ' ', 'Delete', 'Backspace']; if (!keys.includes(event.key)) return; event.preventDefault(); if (event.key === 'ArrowUp') editorState.cursorRow = Math.max(0, editorState.cursorRow - 1); else if (event.key === 'ArrowDown') editorState.cursorRow = Math.min(editorState.rows - 1, editorState.cursorRow + 1); else if (event.key === 'ArrowLeft') editorState.cursorCol = Math.max(0, editorState.cursorCol - 1); else if (event.key === 'ArrowRight') editorState.cursorCol = Math.min(editorState.cols - 1, editorState.cursorCol + 1); else if (event.key === 'Delete' || event.key === 'Backspace') { editIslandAtCursor(true); return; } else { editIslandAtCursor(); return; } renderEditor(); });
$('#import-editor-button').addEventListener('click', () => { try { loadEditorSnapshot($('#editor-export').value.trim()); $('#editor-result').textContent = '已导入并通过结构校验。'; } catch (error) { $('#editor-result').textContent = `导入失败：${error.message}`; } });
$('#validate-editor-button').addEventListener('click', validateEditor); $('#play-created-button').addEventListener('click', () => loadSnapshotIntoPlay(editorSnapshot(), 'Created Puzzle'));
document.addEventListener('keydown', (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'z') { event.preventDefault(); event.shiftKey ? redo() : undo(); } if (event.key === 'r' && !event.metaKey && !event.ctrlKey && document.activeElement === board) { selectLevel(state.levelKey); } });

makeBoard(LEVELS[state.levelKey]); loadPersisted(); render(); renderEditor(); loadEngine();
