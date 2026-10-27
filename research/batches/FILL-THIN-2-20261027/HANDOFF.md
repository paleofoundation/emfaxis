FILL-THIN-2: NEXT TEN EMF AXIS URLS
Status: bounded draft content; technical checks pass; eight audit flags remain; scientific/human/release review pending.
Repository: paleofoundation/emfaxis
Branch: codex/fill-thin-2
Stack base: codex/fill-thin-1 / 0feb688abd7cbb4ace8e8b96dffbd5373ed637d2
Exact head is the PR head; CONDUCTOR records it after the normal push.

SCOPE
Exactly EMF positions 11 through 20 from the frozen FILL-AUDIT-2 ranked-thinnest-first.csv, skipping none because none overlap PR1. This batch covers nine existing official-context research records and the homepage. There were enough EMF URLs, so no PepsAnon or WikiBiome branch was opened. The homepage retains its hero, search and navigation and adds a source-reading section. Nine records add explanations tied to the actual source/device/method and source limitations, not generic clinical filler. Every addition has an original-source link and section or physical-page locator.

BEFORE / AFTER
All built baseline and after URLs return HTTP 200. Earlier live counts are the frozen prior audit, not a new deployed measurement. No live improvement or deployment is claimed.

| Exact path | Earlier live words | Built baseline | Built after | Recognized citations after | Actual official links / unique sources after | Thin after |
|---|---:|---:|---:|---:|---:|---|
| /research/ukhsa-smart-meters | 314 | 314 | 486 | 0 | 3 / 1 | yes |
| / | 321 | 321 | 565 | 1 | 3 / 3 | yes |
| /research/who-ehs | 324 | 324 | 490 | 3 | 3 / 1 | no |
| /research/icnirp-mri | 334 | 334 | 504 | 0 | 3 / 1 | yes |
| /research/foph-bluetooth | 337 | 334 | 516 | 0 | 3 / 1 | yes |
| /research/icnirp-lf | 340 | 340 | 517 | 0 | 3 / 1 | yes |
| /research/fda-microwave | 342 | 342 | 537 | 3 | 3 / 1 | no |
| /research/foph-baby-monitors | 346 | 343 | 533 | 0 | 3 / 1 | yes |
| /research/hse-workplace | 347 | 347 | 529 | 0 | 3 / 1 | yes |
| /research/foph-induction | 361 | 358 | 544 | 0 | 3 / 1 | yes |

Body counts increase from 314-358 to 486-565. No words<400 or stub flag remains. WHO and FDA each have three recognized links and are now thin=no under the original rule. Eight pages remain thin=yes: the homepage has one recognized link; seven official-context records have zero. Actual official-source links rise from 9 to 30 and refer to ten distinct held context documents across the batch. Repeated links are citations to passages, not additional independent studies. Per-page unique documents are one on each research record and three on the homepage. The audit is not called clean and the citation threshold is not treated as evidence quality.

The supplied analyzer, citation-host list, thresholds, default claim/stub regexes and exemptions are unchanged. proposed-allowlist.json is separate and unapplied, for Elon's ruling. It lists icnirp.org, bag.admin.ch, cancer.gov, www.gov.uk and hse.gov.uk as presently unrecognized. WHO and FDA are listed as already recognized, with no change proposed. GOV.UK host breadth versus path-aware recognition is explicitly unresolved: verifying the identified UKHSA document does not endorse every page on that host. Host recognition cannot establish source quality, currency, independent study counts or clinical approval.

Local canonical_self=no is preserved in raw rows because response.url is localhost while the production canonical remains emfaxis.com. The canonical URLs retain the correct requested paths. This local diagnostic is not relabeled as a production defect or as yes.

SOURCE BOUNDARIES
New explanations use only this site's held official documents: UKHSA smart meters; WHO's historical EHS backgrounder; ICNIRP MRI and low-frequency pages; FOPH Bluetooth, baby monitor and induction fact sheets; HSE's workplace framework; FDA's microwave-oven page; and NCI's field/cancer fact sheet for homepage context. All ten original-file hashes match their existing retrieval receipts. No source was newly fetched, no systematic search or current-law review was performed, and source currency beyond the held snapshots is not claimed.

WHO's date is explicitly December 2005. Its recognition of real, potentially disabling symptoms is kept distinct from exposure attribution and a current comprehensive review. No personal diagnosis or treatment plan is offered. MRI patient/staff scopes, FOPH device/operating conditions, UK workplace context and US product-performance context remain separate. There are no new numerical risk estimates, exposure-limit values, device rankings, clinical recommendations or formal certainty grades. Reading instructions and bounded interpretations do not promote the sources to primary experiments or human approval. Original papers and PDFs are linked only on their official hosts; no originals or extended quoted text are copied into public assets or the packet.

PRESERVATION
All ten accepted PR1 note entries are deep-equal to base. The prior ten rendered body texts, normalized with the same standard chrome/whitespace removal, are equal to the sealed PR1 snapshots. All 70 files in the accepted PR1 output manifest still match their hashes; that packet was read only. The accepted PR1 committed batch is byte-equal to base. Existing robots, sitemap, hosting configuration, 72 canonical source records, 188 checked claims, source fingerprints, 70 appraisal previews, study/review data and review states are unchanged. No dependency artifact is added.

VALIDATION
- Production build on Node 24.19.0 passes; package requires >=22.13.0.
- Existing content invariants pass; TypeScript --noEmit passes; its generated tracked tsconfig.tsbuildinfo is restored to exact base.
- Existing SSR checker passes all 236 routes and expected unknown-source HTTP 404.
- Exact ten-page before/after audit uses the unchanged analyzer and FILL-AUDIT-2 fail-closed robots wrapper: at most four workers, minimum 0.25 seconds per worker attempt, timeout 25 seconds, two retries, GET only. Same thresholds min_words400, max_thin_cites2, claim_min_hits3; original regexes/exemptions. Only acquisition is bounded to the ten built-local URLs. No external sitemap/link is followed. Runtime is the same bundled Python 3.12.14 with the prior task-local parser dependencies. Adapter SHA256 2b25ab36f6591acbe49ddaf856f04399f32497b5d00a36315506d7e27be460fc; wrapper c804f3aeeff18e75c849ab713407ca386bd296d34bd3fe86920c1df4dcde1c12.
- Saved HTML for all ten contains the new source-reading sections, at least two locator blocks, and zero public em/en dashes. Metadata and locator punctuation are normalized only on selected pages; original canonical records remain unchanged.
- Root independently checked all ten exact routes at 390x844 using its supported IAB: each had body/document width 390, new notes/source links, no em/en dashes and visible pending-review text. New homepage and induction-source sections were visually inspected, including locators. Root found no warn/error log entries in its bounded 15-entry read, restored 1280x720 and closed its temporary tab. BROWSER.json is an exact copy of ROOT-BROWSER-VERIFICATION.json. Screenshots were displayed in the root tool trace, not saved as files. No external original-source navigation, account action, real-person click or scientific approval occurred. This runner's earlier IAB/locked-Mac limitation remains recorded; root inspection closes only this basic layout gap.
- Scoped React best-practices review reuses the existing server-rendered note component. No new client state, hooks, effects, fetch waterfall or unrelated refactor. Existing semantic headings/source anchors and styles retained.
- Final staged full-diff whitespace and added-public-line dash checks pass. No test/policy threshold is weakened.

GATES AND ARTIFACTS
One draft PR stacked on accepted PR1, plain HTTPS push. No force-push, rebase, history rewrite, PR merge, deployment, publication, secrets, external messages or real-person actions. Receiver remains OFF. Scientific/human approval and release are still pending. The unapplied allowlist proposal awaits Elon.

Packet: PLAN.json, source-provenance.json, claim-source-map.json, proposed-allowlist.json, before-after.csv, original and local audit receipts, render-verification.json, unchanged-protected-files.json, PR1 regression results, build/content/type/SSR logs, BROWSER.json and DELIVERY.json. SHA256SUMS covers all output deliverables except itself after final sealing. Internal batch copies the review inputs and hash manifest without source documents. Final PR/head and changed-file hashes are recorded after the push.
