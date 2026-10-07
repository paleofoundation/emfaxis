# EMF Atlas

Research library and guides, with Jonathan Pendergrass credited as primary investigator. Launch corpus: 16 records (14 original studies and 2 pooled analyses), 9 guides, and 30 glossary entries.

## Editorial status

Launch summaries are AI-assisted drafts checked against indexed abstracts. No investigator sign-off or exhaustive systematic review is claimed. Bibliographic source records are stored in research/primary-source-metadata.json. lib/studies.ts contains the extracted record fields; lib/guides.ts contains the citation-linked guides. Keep source-level labels accurate when adding full-text appraisal, funding/conflict review, and corrections.

## Development

Use npm run dev. The Sites starter supplies a localhost-only sign-in fixture. Production sign-in and identity headers are supplied by Sites. The app stores user-scoped bookmarks and notes in the declared D1 binding. No app passwords or browser-only authoritative library state are used.

Run npm run db:generate after changing db/schema.ts, inspect migrations, and apply pending local migrations through Wrangler before testing database features. Production migrations are handled by Sites.

## Verification performed

TypeScript check; production Worker build; route and citation integrity; browser search, WebMCP valid/invalid input, saving a study, saving a note, reload persistence, inline FAQ answers, and phone-width layout. API checks cover create/read/update/delete, anonymous rejection, cross-origin rejection, invalid IDs, and anonymous read isolation.

## Scope to expand

A larger full-text corpus, formal risk-of-bias and conflict appraisal, investigator approval, and a documented repeatable literature-surveillance protocol are the next research milestones. Public launch and custom domain are separate audience/hosting choices; this edition is private by default.
