export const STOREMETHEUS_REVIEWED = '2026-05-31';

export const liveOrigin = 'https://storemetheus-production.up.railway.app';
export const desiredOrigin = 'https://storemetheus.eidosagi.com';

export const canonicalUrls = {
  human: `${liveOrigin}/`,
  markdown: `${liveOrigin}/storemetheus.md`,
  llms: `${liveOrigin}/llms.txt`,
  contract: `${liveOrigin}/.well-known/storemetheus.json`,
  repo: 'https://github.com/eidos-agi/eidos-storemetheus',
};

export const desiredUrls = {
  human: `${desiredOrigin}/`,
  markdown: `${desiredOrigin}/storemetheus.md`,
  llms: `${desiredOrigin}/llms.txt`,
  contract: `${desiredOrigin}/.well-known/storemetheus.json`,
};

export const greenmarkStore = {
  name: 'Greenmark Store',
  visibility: 'private-blueprint',
  owner: 'Daniel',
  audience: 'Greenmark operators, maintainers, and approved AI agents',
  creator: 'Greenmark Plugin Creator',
  reviewed: STOREMETHEUS_REVIEWED,
  routes: {
    human: '/stores/greenmark',
    markdown: '/stores/greenmark.md',
    contract: '/.well-known/greenmark-store.json',
    caseStudy: '/docs/case-studies/greenmark-private-plugin-store.md',
  },
  live: {
    human: `${liveOrigin}/stores/greenmark`,
    markdown: `${liveOrigin}/stores/greenmark.md`,
    contract: `${liveOrigin}/.well-known/greenmark-store.json`,
  },
  purpose:
    'A private, skills-first plugin store for Greenmark recurring operations, governed approvals, deployment proof, and website maintenance workflows.',
  domains: [
    'holiday-management',
    'gate-approvals',
    'deployment-proof',
    'cerebro-ops',
    'website-maintenance',
  ],
  approvalRequiredFor: [
    'Production deploys',
    'DNS changes',
    'Webflow publishes',
    'Credential use',
    'Customer data writes',
    'Outbound messages',
    'Permission changes',
    'Destructive repo or database operations',
  ],
  firstSkills: [
    {
      name: 'holiday-management',
      job:
        'Check every two weeks for holidays roughly 30 days out, then drive modal creation, proof, and removal.',
    },
    {
      name: 'gate-approval-proof',
      job:
        'Keep Gate, Lilandra, and Professor X roles separate while proving approval paths without human test clicking.',
    },
    {
      name: 'deployment-proof',
      job:
        'Capture SHA, deploy ID, route protection, smoke output, and Linear evidence for production changes.',
    },
    {
      name: 'website-maintenance',
      job:
        'Find the current website authority, make the smallest safe change, publish with approval, and prove the live state.',
    },
  ],
  proofSurfaces: [
    'source repo',
    'private marketplace catalog',
    'installed plugin cache',
    'Codex active session',
    'Linear issue',
    'live URL proof',
  ],
};

export const storemetheusSources = [
  {
    label: 'Claude Code plugin marketplaces',
    url: 'https://code.claude.com/docs/en/plugin-marketplaces',
  },
  {
    label: 'Claude Code plugin discovery',
    url: 'https://code.claude.com/docs/en/discover-plugins',
  },
  {
    label: 'OpenAI Codex CLI',
    url: 'https://developers.openai.com/codex/cli',
  },
  {
    label: 'OpenAI Docs MCP',
    url: 'https://developers.openai.com/learn/docs-mcp',
  },
  {
    label: 'Cursor rules',
    url: 'https://cursor.com/docs/rules',
  },
  {
    label: 'Cursor MCP',
    url: 'https://cursor.com/docs/mcp',
  },
  {
    label: 'Devin Knowledge',
    url: 'https://docs.devin.ai/product-guides/knowledge',
  },
  {
    label: 'Devin Playbooks',
    url: 'https://docs.devin.ai/product-guides/creating-playbooks',
  },
  {
    label: 'Google Antigravity IDE',
    url: 'https://antigravity.google/docs/ide-overview?app=antigravity',
  },
];

export const platformNotes = [
  {
    name: 'Claude Code',
    fit: 'Native plugin marketplaces are the strongest current store primitive.',
    distribution: 'Marketplace JSON, plugins, skills, agents, hooks, MCP servers, and install/update commands.',
    storemetheusMove: 'Make the company store a GitHub-hosted marketplace first, then publish only curated plugins.',
    sources: [
      'https://code.claude.com/docs/en/plugin-marketplaces',
      'https://code.claude.com/docs/en/discover-plugins',
    ],
  },
  {
    name: 'Codex',
    fit: 'Best current fit is a governed local/plugin workspace with explicit evidence across source, cache, config, and active session.',
    distribution: 'Skills, plugins, MCP servers, AGENTS.md, local app automations, and repo-backed install notes.',
    storemetheusMove: 'Treat Codex as the proving surface for company-specific operating skills and recurring checks.',
    sources: [
      'https://developers.openai.com/codex/cli',
      'https://developers.openai.com/learn/docs-mcp',
    ],
  },
  {
    name: 'Cursor',
    fit: 'Rules and MCP make Cursor a strong consumer of store-managed context and tools.',
    distribution: '.cursor/rules, AGENTS.md, MCP configuration, and project-scoped guidance.',
    storemetheusMove: 'Publish compact project rules plus MCP recipes, then keep them tied to the same store source.',
    sources: [
      'https://cursor.com/docs/rules',
      'https://cursor.com/docs/mcp',
    ],
  },
  {
    name: 'Devin',
    fit: 'Knowledge and Playbooks are the store-shaped assets.',
    distribution: 'Organization knowledge, enterprise knowledge, repo-pinned knowledge, playbooks, automations, and scheduled sessions.',
    storemetheusMove: 'Convert repeated company workflows into small knowledge items and reusable playbooks.',
    sources: [
      'https://docs.devin.ai/product-guides/knowledge',
      'https://docs.devin.ai/product-guides/creating-playbooks',
    ],
  },
  {
    name: 'Antigravity',
    fit: 'Agent-manager and artifact-review surfaces make it a good target for verifiable store workflows.',
    distribution: 'Rules, workflows, skills, subagents, and task artifacts.',
    storemetheusMove: 'Ship store content as agent-readable workflows and require artifact proof after execution.',
    sources: [
      'https://antigravity.google/docs/ide-overview?app=antigravity',
    ],
  },
];

export const buildContract = [
  'Name the owner and the audience before writing code.',
  'Decide private, team, or public distribution up front.',
  'Separate source repo, marketplace catalog, installed cache, runtime config, and active session proof.',
  'Ship one store-local creator plugin so users do not have to know Felix by name.',
  'Publish an agent-readable quickstart and a human-readable landing page.',
  'Add a stale-content review cadence for platform docs and installation paths.',
];

export const storeTemplates = [
  {
    name: 'Company store',
    path: 'private GitHub org repo',
    creator: 'Company Plugin Creator',
    governance: 'owner approval, install allow-list, release notes, audit trail',
  },
  {
    name: 'Client store',
    path: 'client-owned private repo',
    creator: 'Client Plugin Creator',
    governance: 'client scope, no cross-client secrets, transfer-ready docs',
  },
  {
    name: 'Public ecosystem store',
    path: 'public marketplace repo',
    creator: 'Ecosystem Plugin Creator',
    governance: 'security review, contribution policy, pinned releases, support channel',
  },
];

export const validationSurfaces = [
  'source',
  'marketplace',
  'cache',
  'config',
  'active-session',
];

export function storemetheusMarkdown(): string {
  const platformList = platformNotes
    .map((platform) => [
      `## ${platform.name}`,
      `Fit: ${platform.fit}`,
      `Distribution: ${platform.distribution}`,
      `Storemetheus move: ${platform.storemetheusMove}`,
      `Sources: ${platform.sources.join(', ')}`,
    ].join('\n'))
    .join('\n\n');

  return [
    '# Eidos Storemetheus',
    '',
    `Reviewed: ${STOREMETHEUS_REVIEWED}`,
    `Canonical repo: ${canonicalUrls.repo}`,
    '',
    'Storemetheus is an agent-readable operating guide for building governed plugin stores for people, teams, and companies.',
    '',
    'A store is not just a list of plugins. It is a distribution system with ownership, install policy, approval paths, evidence, stale-content cleanup, and a store-local creator agent.',
    '',
    '## Build contract',
    ...buildContract.map((item) => `- ${item}`),
    '',
    platformList,
    '',
    '## Validation surfaces',
    ...validationSurfaces.map((surface) => `- ${surface}`),
    '',
    '## Store-local creator pattern',
    'Every serious store should include its own creator plugin. Greenmark should expose Greenmark Plugin Creator. Eidos should expose Eidos Plugin Creator. Felix can remain the implementation engine, but the user-facing creator belongs to the store.',
    '',
    '## Guides',
    '- Company store operating guide: /docs/company-store-operating-guide.md',
    '- Greenmark private store case study: /docs/case-studies/greenmark-private-plugin-store.md',
    '- Greenmark private store blueprint: /stores/greenmark.md',
  ].join('\n');
}

export function greenmarkStoreMarkdown(): string {
  return [
    '# Greenmark Store',
    '',
    `Reviewed: ${greenmarkStore.reviewed}`,
    `Visibility: ${greenmarkStore.visibility}`,
    `Owner: ${greenmarkStore.owner}`,
    `Creator plugin: ${greenmarkStore.creator}`,
    '',
    greenmarkStore.purpose,
    '',
    'This public page is only the no-secret operating blueprint. The actual Greenmark store should live in a Greenmark-owned private repo with explicit install policy, release notes, and approval evidence.',
    '',
    '## Initial domains',
    ...greenmarkStore.domains.map((domain) => `- ${domain}`),
    '',
    '## First skills',
    ...greenmarkStore.firstSkills.map((skill) => `- ${skill.name}: ${skill.job}`),
    '',
    '## Approval required',
    ...greenmarkStore.approvalRequiredFor.map((item) => `- ${item}`),
    '',
    '## Proof surfaces',
    ...greenmarkStore.proofSurfaces.map((surface) => `- ${surface}`),
    '',
    '## Holiday management contract',
    'Every two weeks, look roughly 30 days ahead for relevant holidays. If a holiday affects Greenmark or HT Disposal site messaging, create or update the Linear work item, verify whether the current modal/interstitial should exist, guide the website modification, collect publish proof, and schedule removal proof.',
    '',
    '## Gate testing contract',
    'Gate is where Daniel and future employees approve AI-requested actions. Professor X is the automated test actor. Lilandra is a QA function that temporarily enables Professor X. Gate and Lilandra are not the same system.',
    '',
    '## Website maintenance contract',
    'The agent must identify the website authority first, avoid credential exposure, request approval for Webflow publishes or DNS writes, and finish with live-route proof plus issue-tracker evidence.',
  ].join('\n');
}
