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

## Mobile and Home Screen app

The shared mobile shell provides persistent Home, Exposures, Outcomes, Search and Saved navigation, in-app Back, safe-area spacing, and touch-sized controls. `/app` explains Safari installation. The manifest and opaque 180/192/512px icons support standalone Home Screen launches. Research filters live in the URL so a study round trip preserves the selected view.

Production registers `/sw.js`. It caches only `/offline.html` and `/offline-retry.js`, uses the network for navigation, and explicitly bypasses API and authentication endpoints. No research, private notes or account responses are cached. Offline reading and offline writes are not implemented. Development does not register a worker, avoiding stale previews.

Run `node scripts/check-mobile-app.mjs` for manifest, icon, offline and cache-isolation checks. Set `EMF_CHECK_ORIGIN` to a running local server to also check delivered assets and metadata. Existing content, TypeScript, route and account checks remain required.

Home Screen support is the first release; this checkout is not an App Store binary. Before a native release, verify Safari installation, standalone keyboard/safe areas, sign-in return, saved-note persistence and external-source links on physical iPhones; then implement and validate the native distribution package and store submission separately. Browser viewport checks do not establish device installation or App Store acceptance.
