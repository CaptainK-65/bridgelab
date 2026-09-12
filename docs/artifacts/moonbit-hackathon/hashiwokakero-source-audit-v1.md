# Hashiwokakero 上游来源审计报告 v1

> **审计角色**：来源与许可证审计员
> **审计日期**：2026-09-11
> **审计性质**：只审计来源与合规，不复制上游源码，不写项目代码
> **上游参考仓库**：https://github.com/tonivrbic/bridges-solver
> **审计依据**：`game-puzzle-candidates-v1.md`、`game-puzzle-architecture-v1.md`、`game-puzzle-quality-v1.md`，以及 2026-09-11 快照的 GitHub REST API、Mooncakes 搜索 API、官方赛事公开页

---

## 一、上游仓库 API 事实（2026-09-11 快照）

| 字段 | 值 | 来源 |
|---|---|---|
| 仓库 | tonivrbic/bridges-solver | GitHub REST /repos |
| 默认分支 | master | GitHub REST /repos |
| Stars | 7 | GitHub REST /repos（低星 ✅，符合 0-50★ 口径）|
| 许可证 | MIT（SPDX: MIT）| GitHub REST /repos license 字段 |
| 语言构成 | TypeScript / JavaScript | GitHub REST /languages |
| 头提交 | commit 6795cb5d...（master HEAD）| GitHub REST /commits |
| package.json | name/version + scripts 边界；dependencies 与 devDependencies 边界 | GitHub REST /contents/package.json |
| 目录树 | src/（源码）、test/（测试）、dist/ 或 lib/（构建产物）| GitHub REST /git/trees |

**关键发现**：上游是 TypeScript/JavaScript 求解器实现，非 MoonBit；不构成同语言撞题。算法逻辑为行为级参考（解题规则、桥接算法），非源码复制。

---

## 二、LICENSE 核验

| 字段 | 值 |
|---|---|
| LICENSE blob SHA | 4f361c... |
| 大小 | 1066 bytes |
| 版权行 | Copyright (c) 2017 tonivrbic |
| 许可证类型 | MIT License（SPDX: MIT）|

**MIT 条款要点**：
- ✅ 允许自由使用、修改、分发，含商业用途
- ✅ 义务仅为在副本或实质部分中保留版权声明与许可声明
- ✅ 无担保条款（按原样提供）

---

## 三、MoonBit 生态查重矩阵（严格区分五种状态）

**状态定义**：
- ✅ 成功有结果：请求成功且返回了目标相关结果
- 🟢 成功无结果：请求成功但无目标相关结果（低撞题信号，非不存在证明）
- ❌ 查询失败：网络/服务错误导致查询未完成
- 🚧 接口限制：因认证/限额等接口限制未能完成检索
- ⚠️ 结果污染：返回了结果但与目标语义不符（假阳性）

| 渠道 | 查询 | 状态 | 详情 |
|---|---|---|---|
| GitHub 仓库搜索 | `hashiwokakero language:moonbit` / `bridges language:moonbit` | 🟢 成功无结果 | 仓库级搜索 0 命中 |
| GitHub 代码搜索 | 同关键词 code search | 🚧 接口限制 | 未认证请求返回 401，代码级检索未完成 |
| Mooncakes | 精确词 hashiwokakero/bridges | 🟢 成功无结果 | 精确词 0 命中 |
| Mooncakes | 宽词（bridge 等） | ⚠️ 结果污染 | 仅假阳性，与桥接谜题无关 |
| 官方赛事公开页 | 2024/2025/2026 展示与获奖页 | 🟢 成功无结果 | 公开页无目标词 |

**结论**：在已检索公开范围内未发现 Hashiwokakero 的 MoonBit 实现；这是低撞题信号，不是完整性证明。代码搜索 401 属接口限制，需认证后复核。

---

## 四、独立实现与许可证合规边界

### 必须做（强制义务）

1. **MoonBit 核心全部独立重写**（行为级参考规则与算法思路，不逐行翻译 TypeScript）
2. **仓库根放置来源声明文件**：
   - `THIRD-PARTY-NOTICES.md` 或 `README.md` 来源声明
   - 注明参考 `tonivrbic/bridges-solver`（MIT）、commit `6795cb5d...`、LICENSE blob `4f361c...`
3. **若摘录上游任何文本**（如 LICENSE 副本或注释），必须保留 `Copyright (c) 2017 tonivrbic` 与 MIT 声明

### 禁止做（红线）

1. **不复制上游 TypeScript/JavaScript 源码、测试用例原文、构建产物**
2. **不把上游代码或机械翻译计入 4000 行有效代码**
3. **不把题库/资源计入有效代码量**

### 计数规则（来源声明例外）

- ✅ 计入 4000 行：MoonBit + HTML + CSS + JS + 测试
- ❌ 不计入：资源、题库、编译产物、自动生成代码、第三方原始代码
- ⚠️ 来源声明：可摘录必要部分（MIT 副本），但须注明出处

---

## 五、Go / No-Go

| 门禁 | 状态 | 说明 |
|---|---|---|
| 许可证宽松可合规 | Go | MIT，义务仅为署名与保留声明 |
| 低星冷门 | Go | 7★，符合 0-50★ 口径 |
| MoonBit 生态查重 | 条件 Go | 公开范围未发现；代码搜索 401 待认证复核 |
| 独立实现可行性 | Go | 规则清晰，算法可独立重写 |
| 上游源码零复制 | 前提条件 | 任何复制即转 No-Go |

**综合判定：条件 Go**

---

## 六、最终建议

### 主选锁定

- **锁定 Hashiwokakero（桥接）为主选**
- **Nonogram 为唯一切换备选**（交付确定性保底；接受其上游 54★ 不符合低星偏好的扣分，仅在主选实施失败时切换）

### 次选调整

- Kakuro 不再作为并行备选，避免分散 16 小时冲刺资源
- Peg Solitaire 保持为条件备选（若桥接实施中发现规则理解偏差）

### 关键提醒

- ⚠️ **锁题决定权仍在组长K**：本报告仅给出审计建议，最终锁题待组长K拍板
- ⚠️ **零复制是硬前提**：任何上游源码复制将导致 No-Go
- ⚠️ **代码搜索需复核**：GitHub 代码搜索 401 需认证后完成检索

---

## 附录：审计依据文件索引

| 文件 | 路径 | 作用 |
|---|---|---|
| 候选扫描 | `game-puzzle-candidates-v1.md` | 上游来源扫描、查重矩阵 |
| 架构评估 | `game-puzzle-architecture-v1.md` | 架构适配性、主备选方案 |
| 质量审计 | `game-puzzle-quality-v1.md` | 质量评分、Top5 排名、合规门禁 |

---

**审计完成时间**：2026-09-11
**审计结论**：条件 Go，待组长K对主选 Hashiwokakero 与备选顺序拍板
