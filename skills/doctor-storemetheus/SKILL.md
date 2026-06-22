---
name: doctor-storemetheus
description: Audit an existing plugin store for structural, governance, and content problems. Use when a store was built but hasn't been reviewed, when a plugin install fails, when a governance gate is unclear, or before sharing a store with a client. Returns a scored health report with specific fixes.
---

# Storemetheus Doctor Contract

## Contract

```json
{
  "$schema": "https://json-schema.org/draft/2020-12",
  "title": "Plugin Store Health Report",
  "purpose": "Audit an existing plugin store and return a scored health report. Every finding must cite the exact file and line that caused it. Every fix must be a copy-pasteable command or file change.",
  "constraints": [
    "Audit the actual files — do not infer from README alone",
    "Every finding must have a severity (critical, warning, info)",
    "critical findings must have a fix — no open-ended 'review this'",
    "Score is 0–100: start at 100, deduct per finding (critical: -20, warning: -5, info: -1)",
    "A store scoring below 60 is not ready to share with a client"
  ],
  "required": ["store_path", "score", "status", "findings", "summary"],
  "properties": {
    "store_path": { "type": "string", "description": "Path or repo of the store audited" },
    "score": { "type": "number", "minimum": 0, "maximum": 100 },
    "status": { "enum": ["healthy", "needs_work", "not_ready"] },
    "findings": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["severity", "check", "file", "issue", "fix"],
        "properties": {
          "severity": { "enum": ["critical", "warning", "info"] },
          "check": { "type": "string", "description": "Which audit gate failed" },
          "file": { "type": "string", "description": "Exact file path" },
          "issue": { "type": "string" },
          "fix": { "type": "string", "description": "Copy-pasteable command or file change" }
        }
      }
    },
    "summary": { "type": "string", "description": "1–2 sentence overall verdict" }
  }
}
```

## Audit checklist

Run every check against the actual store files. For each: pass (skip), fail (add finding at correct severity).

### Structure (critical if missing)
- `marketplace.json` exists at `.agents/plugins/marketplace.json`
- Each plugin has its own directory under `plugins/<name>/`
- Each plugin directory has: `manifest.json`, `README.md`, `SKILL.md` or `skills/`
- `marketplace.json` references only plugins that exist on disk

### Governance (critical if missing)
- Store has a named owner (person or team, not "TBD")
- Review cadence is defined (monthly, quarterly, per-PR)
- Private/public boundary is explicit — which plugins are internal-only
- Removal policy exists — what triggers a plugin being pulled

### Manifest quality (warning if wrong)
- Each `manifest.json` has: `name`, `version`, `description`, `author`, `capabilities[]`
- No `version` field is "0.0.0" or "TODO"
- `capabilities[]` is specific, not generic ("Supabase queries" not "Database")
- `description` is one sentence, not a paragraph

### Install proof (warning if missing)
- At least one plugin has an install verification step documented
- If `install_commands` field exists, commands are copy-pasteable
- Cache/config alignment documented: where plugins land after install

### Content quality (info)
- Each plugin README answers: what it does, what it needs, what it produces
- No `TODO` or `PLACEHOLDER` in any file the client will see
- Default prompts (if present) are specific — not "help me with X"

## How to run

Point this contract at a store repo or local path. Read every file listed in the checklist. Score and return the full JSON output.

```bash
# Example: audit a local store
# Give the agent this skill and the path: ~/repos-eidos-agi/eidos-plugin-store/
```
