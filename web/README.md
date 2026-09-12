# BridgeLab Web

静态浏览器 GUI 位于本目录。`app.js` 负责 SVG 渲染与交互，`bridgelab-core.js` 是由 MoonBit `moon build --target js --release` 编译出的规则适配模块；浏览器运行时优先调用该模块的 `bridgelab_apply` 与 `bridgelab_hint`，无法加载时仅使用 UI 适配层的降级逻辑。

## 本地预览

在 `project/bridgelab/` 目录执行：

```bash
python -m http.server 4173 --directory web
```

打开 `http://127.0.0.1:4173/`。
