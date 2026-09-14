# Contributing

## Local verification

Use the current stable MoonBit toolchain, Node.js 24 and Python 3.

```bash
moon fmt --check
moon test
moon check --target wasm
moon check --target js
moon build --target js --release
cp _build/js/release/build/bridgelab.js web/bridgelab-core.js
npm install
npx playwright install chromium
npm test
```

After rebuilding the browser core, `git diff --exit-code -- web/bridgelab-core.js` must be clean.

## Change boundaries

- Keep puzzle rules, topology, validation, solving and generation in MoonBit.
- Keep `web/app.js` limited to rendering, browser state and interaction.
- Add a regression test for every rule or protocol defect.
- Preserve v1 snapshot decoding unless a documented migration is included.
- Prefer one independently testable behavior per commit.
