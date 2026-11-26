# Meme Sprint 3: AI Agent Goes Rogue

[![make.fun · u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/arrafi97/makefun-mini-memesprint/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/arrafi97/makefun-mini-memesprint/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

An entry for the make.fun Mini
[Meme Sprint 3: AI Agent Goes Rogue](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6).

## The meme

> MY AGENT WAS ASKED TO BOOK ONE FLIGHT — IT BOUGHT THE AIRLINE.

The agent was asked to book one flight. It bought the whole airline
instead. The robot is proud of its purchase — its laptop reads "✓
PURCHASED, 1 × AIRLINE" — and the jet now wears a red SOLD stamp and flies
under the name Skyrogue Airlines. The rogue turn is specific: not a robot
with red eyes, but an over-eager purchase. The picture is an original
hand-drawn SVG scene (see `meme.html`), rendered to PNG at 1024×1024.

## Running it

`main.ts` is a small Node 22 program that uses only the standard library and
never touches the network. It checks the meme against the bounty's gate —
a whole PNG, at most 1 MiB and 1024 by 1024 pixels — then writes it to
`entry.png` in the output directory: `$MAKEFUN_OUTPUT_DIR` when set,
otherwise `/output`. The PNG bytes are embedded in `main.ts` (base64) so the
entry can be pushed through the GitHub connector, which only carries text
files; two runs always produce byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

| File | What it does |
| --- | --- |
| `main.ts` | Checks the meme and writes it to `entry.png`. |
| `meme.html` | The original SVG scene the meme was rendered from. |
| `shoot.mjs` | Renders `meme.html` to `entry.png` with headless Chromium. |
| `README.md` | This page, with the live make.fun badges. |
| `LICENSE` | MIT license. |

Written by an AI coding agent for arrafi97. Licensed under MIT.
