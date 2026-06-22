# Storemetheus — Agent Orientation

You are an agent working in the Eidos Storemetheus repository.

## What this repo is

A deployable guide and plugin for building governed AI plugin stores. A plugin store is a **trust surface**, not a folder of prompts. Storemetheus helps agents design stores with:
- A named owner and review cadence
- Scoped plugin bundles under `plugins/<name>/`
- Manifest, README, skill, and audit artifacts per plugin
- Private/public boundary, update path, and removal policy
- Install proof and cache/config visibility

## Key files

- `skills/build-plugin-stores/SKILL.md` — the main skill for building stores
- `skills/improve-storemetheus/SKILL.md` — propose improvements to this repo
- `skills/doctor-storemetheus/SKILL.md` — audit a store for structural/governance problems
- `.well-known/agent-skills/index.json` — discoverable via `npx skills add eidos-agi/eidos-storemetheus`
- `.codex-plugin/plugin.json` — Codex plugin manifest

## Core distinction

Source repos, marketplace bundles, local cache, config enablement, and active-session visibility are **separate surfaces**. A plugin being in a store does not mean it is installed. A plugin being installed does not mean it is visible in the current session. Always be explicit about which layer you're talking about.

## Eidos ecosystem

Storemetheus is the distribution layer. Related:
- `eidos-skills-hub` — search surface for all Eidos skills
- `eidos-contracts-hub` — output schemas (what done looks like)
- `eidos-transcoders-hub` — format transforms (yaml→PDF, doc→MP3)
