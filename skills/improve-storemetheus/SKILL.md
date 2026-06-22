---
name: improve-storemetheus
description: Contract for proposing improvements to Storemetheus — the governed plugin store system. Use when a plugin store pattern is missing, a governance rule is wrong, a manifest field is underdefined, or the build-plugin-stores skill produces stores that fail in practice. Produces a structured proposal with copy-pasteable apply steps.
---

# Improve Storemetheus Contract

## Contract

```json
{
  "$schema": "https://json-schema.org/draft/2020-12",
  "title": "Storemetheus Improvement Proposal",
  "purpose": "Propose a specific, actionable change to the Storemetheus plugin store system — a new governance rule, a new plugin pattern, a manifest field clarification, or a skill update. Every proposal must be motivated by an observed failure or gap in a real store build.",
  "context": "Read the current state first: skills/build-plugin-stores/SKILL.md for the full build process, .well-known/agent-skills/index.json for the skill inventory, and .codex-plugin/plugin.json for the Codex interface. Base the proposal on what's actually there.",
  "constraints": [
    "One proposal per output — don't bundle unrelated changes",
    "observed_failure must describe a real store build that went wrong or a gap that blocked progress",
    "New governance rules must include the failure mode they prevent",
    "Skill updates must include a before/after showing the improvement",
    "self_update steps must be copy-pasteable — no placeholders"
  ],
  "required": ["observed_failure", "proposal_type", "proposal", "self_update"],
  "properties": {
    "observed_failure": {
      "type": "string",
      "description": "What store build, governance check, or plugin audit revealed the gap"
    },
    "proposal_type": {
      "enum": ["governance_rule", "new_skill", "manifest_field", "build_step", "skill_update"]
    },
    "proposal": {
      "type": "object",
      "required": ["title", "description", "rationale"],
      "properties": {
        "title": { "type": "string" },
        "description": { "type": "string" },
        "rationale": { "type": "string" },
        "failure_mode_prevented": {
          "type": "string",
          "description": "For governance_rule proposals: what goes wrong if this rule doesn't exist"
        },
        "affected_files": {
          "type": "array",
          "items": { "type": "string" }
        },
        "example_before": { "type": "string" },
        "example_after": { "type": "string" }
      }
    },
    "self_update": {
      "type": "object",
      "required": ["steps"],
      "properties": {
        "steps": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Exact shell commands or file edits to apply the proposal"
        },
        "verify": {
          "type": "string",
          "description": "How to confirm the change worked"
        }
      }
    }
  }
}
```

## How to apply an approved proposal

```bash
cd ~/repos-eidos-agi/eidos-storemetheus
# apply the self_update.steps from the proposal output
git add -A && git commit -m "improve: <proposal title>"
git push
```

## What makes a good proposal

- Motivated by a real gap: a store that lacked a governance rule and suffered for it, a manifest field the build step expected but wasn't defined
- Scoped to one change — governance rule, new skill, or manifest clarification
- `self_update.steps` are literal commands or file contents, not descriptions of them
