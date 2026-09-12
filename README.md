# BridgeLab

BridgeLab 是一个用 MoonBit 编写、面向浏览器 GUI 的 Hashiwokakero（桥接）领域内核与静态 Web Demo。核心包保持纯逻辑、无浏览器依赖；`web/web_adapter.mbt` 通过 JavaScript/WASM 导出规则边界，浏览器 Demo 位于 `web/`。

## 功能

- `Point`、`Island`、`Bridge`、`Board` 与 `Game` 模型；
- 桥状态 `0/1/2` 循环切换；
- 可见相邻岛屿判断与桥交叉检测；
- 岛屿数字约束、错误类型与诊断；
- 全图连通性与完成判定；
- 游戏会话撤销/重做；
- 基于局部约束的确定性提示；
- `BRIDGELAB|行,列|岛屿...|桥...` 快照序列化/反序列化；
- MoonBit 黑盒/白盒测试与最小命令入口。

## 快速开始

需要已安装 MoonBit 工具链。在仓库根目录执行：

```bash
moon test
moon check --target wasm
moon check --target js
moon build --target js --release
```

运行命令入口进行 smoke test：

```bash
moon run cmd/main
```

本地预览 Web Demo：

```bash
python -m http.server 4173 --directory web
```

然后打开 <http://127.0.0.1:4173/>。

## 浏览器接口

`web/bridgelab-core.js` 是已编译并随 Demo 提供的 JS 核心模块，导出以下四个函数：

- `bridgelab_validate(snapshot)`
- `bridgelab_apply(snapshot, a, b, count)`
- `bridgelab_status(snapshot)`
- `bridgelab_hint(snapshot)`

浏览器优先调用 MoonBit 核心；`web/app.js` 仅在核心模块无法加载时提供降级适配逻辑。

## 项目结构

- `bridgelab.mbt`：纯 MoonBit 领域模型与规则；
- `web_adapter.mbt`：面向 JS/WASM 的导出适配；
- `bridgelab_test.mbt`、`bridgelab_wbtest.mbt`：黑盒与白盒测试；
- `cmd/main/`：最小可运行命令入口；
- `web/`：静态浏览器 Demo；
- `docs/artifacts/moonbit-hackathon/`：来源边界与架构审计记录。

## 来源边界

核心实现依据公开 Hashiwokakero 规则与行为级研究独立设计，不复制或逐行翻译任何上游实现。来源审计记录见：

- [`hashiwokakero-source-audit-v1.md`](docs/artifacts/moonbit-hackathon/hashiwokakero-source-audit-v1.md)
- [`game-puzzle-architecture-v1.md`](docs/artifacts/moonbit-hackathon/game-puzzle-architecture-v1.md)

## 许可证

本项目采用 Apache License 2.0，详见 [`LICENSE`](LICENSE)。
