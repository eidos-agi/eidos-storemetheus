# Storemetheus Company-Store Operating Guide

Reviewed: 2026-05-31

## Purpose

A company plugin store is a governed distribution system for AI operating capability. It gives agents a known place to find approved skills, plugins, MCP servers, runbooks, approval paths, and proof requirements.

The store is not the goal. The goal is that a company can spread useful AI work through teams without scattering authority, credentials, and tribal knowledge across private chats.

## Operating Principle

Skills are assets. Code is debt.

Start with durable instructions, contracts, checklists, evidence loops, and role boundaries. Add code only when it removes real operational friction or exposes a capability the host agent cannot otherwise use safely.

## Required Decisions

Before building the first plugin, record:

- Owner: the human or team accountable for store quality.
- Audience: who may use the store.
- Visibility: private, client-owned, internal-public, or public.
- Host agents: Codex, Claude Code, Cursor, Devin, Antigravity, or another runtime.
- Approval policy: which actions require human approval.
- Evidence standard: how an agent proves a plugin is installed, current, and usable.
- Review cadence: weekly, biweekly, monthly, or quarterly.
- Removal policy: how stale or risky plugins are paused or removed.

## Store Shape

Prefer this repo shape for private company stores:

```text
<company-store>/
├── .agents/plugins/marketplace.json
├── docs/
│   ├── operating-guide.md
│   └── review-log.md
├── plugins/
│   └── <plugin-name>/
│       ├── .codex-plugin/plugin.json
│       ├── README.md
│       └── skills/<skill-name>/SKILL.md
└── README.md
```

Add `.claude-plugin/marketplace.json` and `.claude-plugin/plugin.json` when Claude Code distribution is part of the scope.

## Store-Local Creator

Every serious store should include a creator plugin with the store's name.

Examples:

- Greenmark Plugin Creator
- Eidos Plugin Creator
- Acme Plugin Creator

Do not expose the implementation engine name to users as the primary interface. Felix can remain the scaffolding and validation engine, but the company-facing contract should be local to the store.

## Plugin Scope

Create narrow plugins around real operating domains.

Good examples:

- holiday-management
- gate-approvals
- customer-data-intake
- deployment-proof
- phone-agent

Avoid a giant company plugin that claims to do everything. Broad plugins become vague authority blobs and are hard to review.

Each plugin needs:

- Owner
- Purpose
- Triggering skill
- Authority surfaces
- Safe actions
- Actions requiring approval
- Verification commands
- Update procedure
- Rollback/removal notes

## Proof Surfaces

Do not claim a plugin is ready until the relevant surfaces are checked:

- Source: repo or canonical plugin folder exists at the expected SHA.
- Marketplace: catalog lists the expected plugin source and policy.
- Cache: the host runtime installed or cached the expected version.
- Config: host configuration enables the plugin or store in the expected scope.
- Session: the active agent can see and invoke the skill or tool.

For Codex, session visibility matters. A plugin can be valid in source and still not be visible to the current thread.

## Approval Boundaries

Classify plugin actions by risk:

- Low risk: read-only docs, local summaries, local planning.
- Medium risk: local file edits, repo branches, generated artifacts.
- High risk: production deploys, credential use, customer data changes, outbound messages, money movement, permissions, and destructive operations.

High-risk plugins must fail closed. They should document exactly what approval is needed, which system records the approval, and what proof must be attached afterward.

## Recurring Review

Active company stores should run a weekly or biweekly review. Stable public stores can run monthly or quarterly.

Review:

- Broken install links
- Stale official platform docs
- Plugin cache/config drift
- New host-agent capabilities
- Private-data leakage
- Plugins that should be split
- Plugins that should be retired
- Approval policies that no longer match risk

## Done Definition

A company store is ready when:

- The repo exists in the right organization.
- Visibility matches the owner's intent.
- At least one useful plugin is present.
- Marketplace JSON parses.
- Plugin manifests validate.
- The store-local creator is documented or shipped.
- Install instructions name the exact marketplace root.
- The active target agent can see the plugin or the gap is explicitly documented.
- A review cadence exists.
- The owner has a concise operating guide.
