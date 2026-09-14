<div align="center">
  <img src="docs/assets/bridge-lab-mark.svg" width="620" alt="BridgeLab — Hashiwokakero / MoonBit">

  **MoonBit 规则内核 + 零构建原生 Web 前端：在浏览器里搭起一座安静、可撤回的逻辑群岛。**

  [![CI](https://github.com/CaptainK-65/bridgelab/actions/workflows/ci.yml/badge.svg)](https://github.com/CaptainK-65/bridgelab/actions/workflows/ci.yml)
  [![License](https://img.shields.io/badge/license-Apache--2.0-244d3c.svg)](LICENSE)
  [![MoonBit](https://img.shields.io/badge/MoonBit-JS%20%7C%20WASM-ef735c.svg)](https://www.moonbitlang.com/)

  [Deploy to GitHub Pages](https://github.com/CaptainK-65/bridgelab/actions/workflows/pages.yml)
</div>

## BridgeLab 是什么

BridgeLab v0.2.0 是采用“MoonBit 规则与求解核心 + 零框架原生 Web 前端”架构的 Hashiwokakero 工作台。它提供游玩、求解、创作三种模式，能够验证谜题、识别矛盾、判断唯一解、生成可复现关卡，并给出可直接应用的解释型提示。

## 核心卖点

- **单一规则内核**：桥数、可见相邻、交叉限制、数字约束与全图连通性由 MoonBit 实现。
- **双目标可检查**：CI 同时执行 WASM 与 JavaScript target check，并构建 JS release 产物；WASM 在此用于 target 检查与可编译能力验证，当前 Demo 不在浏览器中加载 WASM。
- **完整约束求解**：组合确定性传播与有预算的完整搜索，区分无解、唯一解和多解。
- **可复现生成**：相同尺寸与种子生成相同的唯一解谜题。
- **三模式工作台**：12 关目录、任意快照求解、可视化编辑、导入导出与载入试玩。
- **单一规则来源**：Web 不复制规则或内置答案；核心不可用时明确进入只读状态。
- **可移植快照**：兼容 `BRIDGELAB` v1，并使用 `BRIDGELAB2` 作为当前协议。
- **可访问交互**：键盘、触控、响应式布局、焦点管理和 reduced-motion 支持。

## 快速开始

需要已安装 [MoonBit 工具链](https://www.moonbitlang.com/download/) 与 Node.js。

```bash
git clone https://github.com/CaptainK-65/bridgelab.git
cd bridgelab
moon test
moon check --target wasm
moon check --target js
moon build --target js --release
npm install
npm test
```

同步最新 JS 核心并启动本地静态服务器：

```bash
cp _build/js/release/build/bridgelab.js web/bridgelab-core.js
python -m http.server 4173 --directory web
```

打开 <http://127.0.0.1:4173/>。Windows PowerShell 可将同步命令替换为：

```powershell
Copy-Item _build/js/release/build/bridgelab.js web/bridgelab-core.js
```

最小命令行 smoke test：

```bash
moon run cmd/main
```

## 架构

```text
┌──────────────────────────────────────────────┐
│ web/index.html + styles.css                  │
│ Web UI / SVG board / keyboard interaction   │
└───────────────────┬──────────────────────────┘
                    │ ESM imports
┌───────────────────▼──────────────────────────┐
│ web/bridgelab-core.js                        │
│ MoonBit JS release artifact                 │
└───────────────────┬──────────────────────────┘
                    │ eight exported functions
┌───────────────────▼──────────────────────────┐
│ web_adapter.mbt                              │
│ snapshot boundary / JSON-like responses     │
└───────────────────┬──────────────────────────┘
                    │ pure domain calls
┌───────────────────▼──────────────────────────┐
│ bridgelab.mbt                                │
│ rules / analysis / solver / generator       │
└──────────────────────────────────────────────┘
```

浏览器适配层导出：

| 接口 | 用途 |
|---|---|
| `bridgelab_validate(snapshot)` | 验证快照并返回棋盘诊断 |
| `bridgelab_apply(snapshot, a, b, count)` | 应用一条桥变更并返回新快照或错误 |
| `bridgelab_status(snapshot)` | 返回完成度、连通性与违规状态 |
| `bridgelab_hint(snapshot)` | 返回一条确定性局部提示或 `NONE` |
| `bridgelab_analyze(snapshot)` | 返回可解性、唯一性、难度与矛盾摘要 |
| `bridgelab_solve(snapshot)` | 返回唯一解或无解、多解、预算状态 |
| `bridgelab_generate(rows, cols, seed)` | 生成可复现的唯一解谜题 |
| `bridgelab_topology(snapshot)` | 返回核心裁决的候选边拓扑 |

浏览器中的规则、拓扑、提示、求解与生成全部由 MoonBit 核心裁决。核心模块无法加载时，界面进入明确的只读失败状态，不执行第二套 JavaScript 规则。

## 语言与代码边界

| 边界 | 负责内容 | 代码位置 / 说明 |
|---|---|---|
| MoonBit 领域核心 | 棋盘模型、规则校验、矛盾分析、求解、提示、难度、生成、快照协议 | `bridgelab.mbt`、`solver.mbt`、`generator.mbt` |
| MoonBit FFI | 将快照字符串与领域对象连接，并导出浏览器调用的稳定函数 | `web_adapter.mbt` |
| 原生 JS / SVG / CSS 表现层 | 工作台状态、交互、SVG 绘制、样式与版本化本地持久化 | `web/app.js`、`web/index.html`、`web/styles.css` |
| generated JS 构建产物 | MoonBit JS target 生成的 ESM 核心模块，检入仓库以支持即开即玩 | `web/bridgelab-core.js`；由 `moon build --target js --release` 生成，不是手写业务 JavaScript |

`web/bridgelab-core.js` 是由 MoonBit JS target 生成并检入的构建产物。GitHub Actions 会在构建时重新生成并验证导出；`.gitattributes` 将其标记为 `linguist-generated`，避免 GitHub Languages 将生成代码误计为手写实现。

## 功能矩阵

| 能力 | MoonBit 核心 | Web Demo | 自动验证 |
|---|:---:|:---:|:---:|
| 岛屿 / 桥 / 棋盘模型 | ✓ | — | ✓ |
| 0 / 1 / 2 桥状态 | ✓ | ✓ | ✓ |
| 可见相邻与交叉检测 | ✓ | ✓ | ✓ |
| 数字约束与连通性 | ✓ | ✓ | ✓ |
| 完成判定与错误诊断 | ✓ | ✓ | ✓ |
| 撤销 / 重做 | 会话模型 | ✓ | ✓ |
| 确定性局部提示 | ✓ | ✓ | ✓ |
| 快照序列化 | ✓ | ✓ | ✓ |
| 矛盾检测与解释型提示 | ✓ | ✓ | ✓ |
| 唯一解 / 多解判定 | ✓ | ✓ | ✓ |
| 种子关卡生成器 | ✓ | ✓ | ✓ |
| 12 个内置关卡 | ✓ | ✓ | ✓ |
| Play / Solve / Create 工作台 | — | ✓ | E2E |

## 技术栈

- **MoonBit**：领域模型、规则检查、状态与提示接口
- **JavaScript ESM**：原生浏览器状态、交互与引擎加载；不包含规则 fallback 或关卡答案
- **SVG + CSS**：响应式棋盘与主题化界面
- **Node.js + Playwright**：引擎契约、静态边界、桌面与移动端浏览器测试
- **GitHub Actions**：固定工具链、MoonBit 测试、双目标检查、生成产物漂移和 E2E 门禁
- **GitHub Pages**：构建后发布 `web/` 静态站点

## 项目结构

```text
.
├── bridgelab.mbt                 # 纯 MoonBit 领域模型与规则
├── solver.mbt                    # 传播、完整搜索、唯一性与难度
├── generator.mbt                 # 确定性唯一谜题生成
├── web_adapter.mbt               # JavaScript / WASM 导出边界
├── bridgelab_test.mbt            # 黑盒规则测试
├── bridgelab_wbtest.mbt          # 白盒几何辅助测试
├── cmd/main/                     # 最小命令入口
├── tests/                        # Node 契约与 Playwright E2E
├── web/                          # Play / Solve / Create 静态工作台
├── docs/assets/                  # README 自制 SVG 视觉素材
└── .github/workflows/            # CI 与 Pages 部署
```

## 路线图

- [x] 核心棋盘模型与规则验证
- [x] JS / WASM target 导出边界（WASM 为检查与可编译能力验证，当前 Demo 使用 JS 核心）
- [x] 12 关 Play / Solve / Create 浏览器工作台
- [x] CI 与 GitHub Pages workflow
- [x] 规则回归、契约与浏览器 E2E 测试
- [x] 兼容 v1 的版本化快照协议
- [x] 可应用的局部推导与唯一解提示
- [x] 独立求解器、唯一性验证和种子生成器
- [ ] 更丰富的生成拓扑和专家级推理规则

## 来源边界

核心实现依据公开 BridgeLab 规则与行为级研究独立设计，不复制或逐行翻译任何上游实现。相关记录：

- [`hashiwokakero-source-audit-v1.md`](docs/artifacts/moonbit-hackathon/hashiwokakero-source-audit-v1.md)
- [`game-puzzle-architecture-v1.md`](docs/artifacts/moonbit-hackathon/game-puzzle-architecture-v1.md)

## 许可证

项目采用 [Apache License 2.0](LICENSE)。
