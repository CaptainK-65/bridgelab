# BridgeLab MoonBit 核心

BridgeLab 是一个面向浏览器 GUI 的 Hashiwokakero（桥接）领域内核。当前包保持纯逻辑、无浏览器依赖，并通过 `web_adapter.mbt` 导出给 JavaScript/WASM 适配层消费。

## 已实现

- `Point`、`Island`、`Bridge`、`Board` 和 `Game` 模型；
- 桥状态 `0/1/2` 与 `toggle_bridge` 循环切换；
- 相邻可见岛屿判断，以及桥交叉检测；
- 岛屿数字约束、错误类型和诊断；
- 全图连通性与完成判定；
- 游戏会话撤销/重做；
- 基于局部约束的确定性提示 `Board::hint` 与 `Game::apply_hint`；
- `BRIDGELAB|行,列|岛屿...|桥...` 快照序列化/反序列化接口；
- 黑盒与白盒测试，以及最小可运行命令入口。

## 构建与验证

在本目录执行：

```bash
moon fmt
moon check
moon test
moon run cmd/main
```

也可以检查浏览器目标：

```bash
moon check --target wasm
moon check --target js
```

`cmd/main` 仅用于 smoke test；正式 GUI 已通过 `web_adapter.mbt` 与编译后的 `web/bridgelab-core.js` 调用导出的规则边界。

## 快照格式

示例：

```text
BRIDGELAB|1,3|1,0,0,1;2,0,2,1|1,2,1
```

格式为：版本头、棋盘尺寸、分号分隔的岛屿记录（`id,row,col,target`）、分号分隔的桥记录（`a,b,count`）。反序列化会重新执行领域规则校验，不接受非法桥。

## 来源边界

核心实现依据公开 Hashiwokakero 规则与行为级研究独立设计，不复制或逐行翻译任何上游实现。来源审计记录见仓库：

- `docs/artifacts/moonbit-hackathon/hashiwokakero-source-audit-v1.md`
