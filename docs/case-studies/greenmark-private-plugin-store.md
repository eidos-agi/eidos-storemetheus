# Greenmark Private Plugin Store Case Study

Reviewed: 2026-05-31

## Purpose

Greenmark is the first Storemetheus proving case because it has real private operations, recurring website work, production deployment risk, role-based approvals, customer-facing systems, and AI workflows that need durable memory.

The Greenmark store should be private by default.

## Owner

Daniel owns the initial process. The store should be designed for multiple Greenmark users, but the first operating user is Daniel.

## Store Identity

- Store name: Greenmark Store
- Creator plugin: Greenmark Plugin Creator
- Initial repo home: Greenmark-owned private GitHub organization or private repo
- Visibility: private
- Review cadence: biweekly while active, monthly once stable

## Initial Plugin Domains

Start small:

- holiday-management: recurring holiday/interstitial workflows for the HT Disposal and Greenmark web properties.
- gate-approvals: human approval patterns for AI actions through Gate.
- deployment-proof: staging/production deploy proof, host checks, and Linear evidence.
- cerebro-ops: Cerebro operational runbooks, environment domains, and release guardrails.

## Holiday Management Example

The recurring workflow should check every two weeks for holidays that are roughly 30 days out. The task is not merely to remember the date. The store should help the agent maintain the full state machine:

- Which holiday is relevant.
- Which web property needs an interstitial.
- Which audience sees it.
- Which copy and dates are approved.
- Whether Webflow or another CMS needs edits.
- Whether the modal exists before the holiday.
- Whether the modal is removed after the holiday.
- Which Linear issue holds the proof.
- Which deployment or publish event made it live.
- Which screenshot or curl output proves current state.

The plugin should include a guide for each recurring holiday once the first version is proven.

## Gate, Lilandra, And Professor X

Greenmark approval workflows should keep these roles separate:

- Gate is where Daniel and future employees approve AI-requested actions.
- Professor X is the automated test actor for proving the approval path.
- Lilandra is a QA function that turns on Professor X for a limited time.

Gate and Lilandra are not the same system. Lilandra exists to enable controlled automated testing. Gate is the human approval product surface.

## Approval Policy

Greenmark plugins must require explicit approval for:

- Production deploys
- DNS changes
- Webflow publishes
- Credential use
- Customer data writes
- Outbound messages
- Permission changes
- Destructive repo or database operations

Read-only checks, local planning, screenshots, and draft docs can be allowed without approval when they do not expose secrets or affect customers.

## Proof Standard

Each workflow should end with evidence in the right issue tracker:

- Source SHA or branch
- Deployment ID when applicable
- Live URL
- Screenshot or HTTP proof
- Time checked
- Human approval reference when required
- Known caveats

## First Implementation Slice

The first Greenmark store should ship:

1. A private marketplace repo.
2. Greenmark Plugin Creator.
3. A holiday-management skill.
4. A Gate approval guide.
5. A deployment proof skill.
6. A biweekly review automation or Linear recurring task.

The first version should stay skills-driven. Software wrappers can follow once the manual skill loop proves where automation actually helps.
