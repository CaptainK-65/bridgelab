<div align="center">
  <img src="docs/assets/bridge-lab-mark.svg" width="620" alt="BridgeLab — Hashiwokakero / MoonBit">

  **MoonBit 规则内核 + 零构建原生 Web 前端：在浏览器里搭起一座安静、可撤回的逻辑群岛。**

  [![CI](https://github.com/CaptainK-65/bridgelab/actions/workflows/ci.yml/badge.svg)](https://github.com/CaptainK-65/bridgelab/actions/workflows/ci.yml)
  [![License](https://img.shields.io/badge/license-Apache--2.0-244d3c.svg)](LICENSE)
  [![MoonBit](https://img.shields.io/badge/MoonBit-JS%20%7C%20WASM-ef735c.svg)](https://www.moonbitlang.com/)

  [Deploy to GitHub Pages](https://github.com/CaptainK-65/bridgelab/actions/workflows/pages.yml)
</div>

## BridgeLab 是什么

BridgeLab 是一个采用“MoonBit 规则内核 + 零构建原生 Web 前端”架构的 Hashiwokakero（桥接 / Bridges）规则内核与静态 Web Demo。它把棋盘模型、合法性验证、完成判定与提示逻辑实现于纯 MoonBit 核心中，通过轻量 FFI 适配向 JavaScript / WASM target 暴露稳定接口，再由原生 HTML、JavaScript、SVG 与 CSS 负责呈现和交互。

当前版本是可运行的演示项目，不宣称完整关卡编辑器、通用求解器或生产级游戏服务。

## 核心卖点

- **单一规则内核**：桥数、可见相邻、交叉限制、数字约束与全图连通性由 MoonBit 实现。
- **双目标可检查**：CI 同时执行 WASM 与 JavaScript target check，并构建 JS release 产物；WASM 在此用于 target 检查与可编译能力验证，当前 Demo 不在浏览器中加载 WASM。
- **零构建原生 Web Demo**：原生 HTML、CSS、JavaScript 与 SVG，无前端构建链依赖。
- **可解释交互**：错误诊断、确定性局部提示、撤销 / 重做与棋盘状态同步。
- **可移植快照**：使用 `BRIDGELAB|行,列|岛屿...|桥...` 文本格式序列化局面。
- **键盘可操作**：航线支持 Tab 聚焦，并可通过 Enter 或空格切换桥数。

## 快速开始

需要已安装 [MoonBit 工具链](https://www.moonbitlang.com/download/) 与 Node.js。

```bash
git clone https://github.com/CaptainK-65/bridgelab.git
cd bridgelab
moon test
moon check --target wasm
moon check --target js
moon build --target js --release
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
                    │ four exported functions
┌───────────────────▼──────────────────────────┐
│ web_adapter.mbt                              │
│ snapshot boundary / JSON-like responses     │
└───────────────────┬──────────────────────────┘
                    │ pure domain calls
┌───────────────────▼──────────────────────────┐
│ bridgelab.mbt                                │
│ board model / validation / status / hint    │
└──────────────────────────────────────────────┘
```

浏览器适配层导出：

| 接口 | 用途 |
|---|---|
| `bridgelab_validate(snapshot)` | 验证快照并返回棋盘诊断 |
| `bridgelab_apply(snapshot, a, b, count)` | 应用一条桥变更并返回新快照或错误 |
| `bridgelab_status(snapshot)` | 返回完成度、连通性与违规状态 |
| `bridgelab_hint(snapshot)` | 返回一条确定性局部提示或 `NONE` |

浏览器正常路径由 MoonBit 核心裁决；核心模块无法加载时，`web/app.js` 提供“引擎加载失败时的演示兜底”，以保持 Demo 可操作。兜底逻辑属于浏览器表现层中的演示实现，不代表当前所有路径都只由 MoonBit 裁决。

## 语言与代码边界

| 边界 | 负责内容 | 代码位置 / 说明 |
|---|---|---|
| MoonBit 领域核心 | 棋盘模型、规则校验、连通性、完成判定、确定性提示、快照协议 | `bridgelab.mbt` |
| MoonBit FFI | 将快照字符串与领域对象连接，并导出浏览器调用的稳定函数 | `web_adapter.mbt` |
| 原生 JS / SVG / CSS 表现层 | 关卡数据、交互、状态展示、SVG 绘制、样式与本地持久化 | `web/app.js`、`web/index.html`、`web/styles.css`；`web/app.js` 的规则代码仅作为引擎加载失败时的演示兜底 |
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
| 三个内置演示关卡 | — | ✓ | — |
| 通用求解器 / 关卡生成器 | — | — | — |

## 技术栈

- **MoonBit**：领域模型、规则检查、状态与提示接口
- **JavaScript ESM**：原生浏览器适配、交互与引擎加载；`web/bridgelab-core.js` 为 MoonBit 生成产物，`web/app.js` 含引擎加载失败时的演示兜底
- **SVG + CSS**：响应式棋盘与主题化界面
- **GitHub Actions**：MoonBit 测试、双目标检查、JS release 与导出断言
- **GitHub Pages**：构建后发布 `web/` 静态站点

## 项目结构

```text
.
├── bridgelab.mbt                 # 纯 MoonBit 领域模型与规则
├── web_adapter.mbt               # JavaScript / WASM 导出边界
├── bridgelab_test.mbt            # 黑盒规则测试
├── bridgelab_wbtest.mbt          # 白盒几何辅助测试
├── cmd/main/                     # 最小命令入口
├── web/                          # 静态浏览器 Demo
├── docs/assets/                  # README 自制 SVG 视觉素材
└── .github/workflows/            # CI 与 Pages 部署
```

## 路线图

- [x] 核心棋盘模型与规则验证
- [x] JS / WASM target 导出边界（WASM 为检查与可编译能力验证，当前 Demo 使用 JS 核心）
- [x] 三关静态浏览器 Demo
- [x] CI 与 GitHub Pages workflow
- [ ] 扩充规则回归与属性测试
- [ ] 可导入的关卡描述格式
- [ ] 更完整的逻辑推导与提示说明
- [ ] 独立求解器和关卡生成实验

## 来源边界

核心实现依据公开 Hashiwokakero 规则与行为级研究独立设计，不复制或逐行翻译任何上游实现。相关记录：

- [`hashiwokakero-source-audit-v1.md`](docs/artifacts/moonbit-hackathon/hashiwokakero-source-audit-v1.md)
- [`game-puzzle-architecture-v1.md`](docs/artifacts/moonbit-hackathon/game-puzzle-architecture-v1.md)

README 首屏标识为本仓库内原创 SVG，视觉语言取自深海配色：深蓝底、青色航线与珊瑚 / 月光强调。

## 许可证

项目采用 [Apache License 2.0](LICENSE)。
