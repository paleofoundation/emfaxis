FILL-THIN-3: CITATION HOST RULING AND NEXT TEN EMF AXIS PAGES
Status: PARTIAL-ALLOWLIST draft candidate. Four approved domains and next10 content complete; UKHSA portion BLOCKED/open GATE; scientific, human and release acceptance pending.
Repository: paleofoundation/emfaxis
Branch: codex/fill-thin-3
Stack base: codex/fill-thin-2 / a2c90f78cf0f07960985631d9f0ce6aa20f66946
Two normal commits: e342082 applies the four approved hosts and prior20 receipts; the second contains next-ten content. Final head and draft PR are recorded in DELIVERY.json after the plain push.

ALLOWLIST SCOPE
A named repo-owned tools/site-fill/thin_audit.py snapshot starts from supplied ops analyzer SHA256 2b25ab36f6591acbe49ddaf856f04399f32497b5d00a36315506d7e27be460fc. The sole code difference is four CITATION_HOSTS entries: icnirp.org, cancer.gov, hse.gov.uk, bag.admin.ch. Whole-admin.ch and whole-gov.uk are not listed. WHO/FDA, regexes, thresholds, exemptions and analyzer logic are unchanged. AST comparison excluding only the host-list value proves this. Four-host snapshot SHA256 88d45f1ff536c96ce1fbd2e8524aeda34f2e607061ef9fd4af72ad94c84770ed. The original ops script is not edited and the accepted output packets are not changed.

UKHSA restriction cannot be represented in the current hostname-only predicate. CITATION_HOSTS is at original line34, host_is_citation(host) at67, and the call passes p.netloc at270. A 09:58 narrow bridge GATE asks for explicit UKHSA HOLD while the four domains proceed, or a separately authorized URL/publisher-aware logic exception. UKHSA-UNAPPLIED-PROPOSAL.patch is illustrative and UNAPPLIED. It never whitelists all GOV.UK: exact organisation path, or exact publications/guidance URLs with reviewed UKHSA publisher evidence, unknown publishers rejected. No such logic is applied without an explicit exception.

PRIOR TWENTY RECHECK
All prior twenty built routes return200 with unchanged body words. Eighteen were thin under the original host list. Sixteen citation flags now clear; WHO/FDA were already clear, leaving eighteen total not thin. The two remaining flags are /research/ukhsa-smart-meters with zero recognized citations and / with two recognized citations. This is a citation-classification change, not a new scientific result or improvement to live content. Exact per-URL details are in prior20-allowlist-comparison.csv. Newly cleared paths:
- https://emfaxis.com/resources
- https://emfaxis.com/fields
- https://emfaxis.com/resources/reading-worksheet
- https://emfaxis.com/resources/first-guide-preview
- https://emfaxis.com/resources/reading-guide
- https://emfaxis.com/research/icnirp-static
- https://emfaxis.com/research/icnirp-dect
- https://emfaxis.com/research/foph-wearables
- https://emfaxis.com/research/nci-emf-cancer
- https://emfaxis.com/resources/emf-reading-worksheet
- https://emfaxis.com/research/icnirp-mri
- https://emfaxis.com/research/foph-bluetooth
- https://emfaxis.com/research/icnirp-lf
- https://emfaxis.com/research/foph-baby-monitors
- https://emfaxis.com/research/hse-workplace
- https://emfaxis.com/research/foph-induction

NEXT TEN SCOPE AND RESULTS
Exactly EMF positions21 through30 from frozen FILL-AUDIT-2 ranked-thinnest-first.csv. None overlap the prior twenty. Six study pages, three official-context pages and the guides index add source-specific reading explanations and limitations. Each new paragraph has an original-source link and source-section or physical-page locator. No other site or new discovery work was needed.

All built before/after routes return200. Local words rise375-530 to519-742. All ten after pages are thin=no, with no stub or under400 flag under the approved four-host candidate. This is bounded triage screening, not complete scientific or publication approval. Frozen live counts are included only for comparison; live was not changed or newly audited.

| Exact path | Frozen live words | Built before | Built after | Citations old-before / ruled-before / ruled-after | Actual source links / unique documents after | Thin after |
|---|---:|---:|---:|---|---|---|
| /research/headache | 375 | 375 | 519 | 3 / 3 / 5 | 5 / 1 | no |
| /research/icnirp-rf | 378 | 378 | 522 | 0 / 1 / 3 | 3 / 1 | no |
| /research/rahban | 387 | 387 | 555 | 3 / 3 / 5 | 5 / 1 | no |
| /research/greenland | 392 | 392 | 546 | 3 / 3 / 5 | 5 / 1 | no |
| /research/foph-wlan | 397 | 394 | 550 | 0 / 1 / 3 | 3 / 1 | no |
| /research/hermes | 397 | 397 | 562 | 3 / 3 / 5 | 5 / 1 | no |
| /research/interphone | 397 | 397 | 562 | 3 / 3 / 5 | 5 / 1 | no |
| /research/cosmos | 410 | 410 | 576 | 2 / 2 / 4 | 5 / 1 | no |
| /research/foph-mobile | 423 | 420 | 575 | 0 / 1 / 3 | 3 / 1 | no |
| /guides | 530 | 530 | 742 | 0 / 0 / 3 | 3 / 3 | no |

baseline-four-host-scoring.csv reuses the exact baseline HTML to isolate the host-list effect before content changes; no additional retrieval is claimed. The raw original baseline remains baseline/pages.csv. Actual known-source links across these pages rise21 to42; the additions refer to ten distinct source documents. Each research page cites one underlying document; the guides section cites ICNIRP RF, FOPH WLAN and NCI. Repeated passage links do not count as independent studies or independent confirmation.

Raw canonical_self=no remains in local audit rows because the response URL is localhost and the canonical is emfaxis.com. The production canonical paths are correct and unchanged. This is not relabeled as a live defect or yes.

SOURCE AND REVIEW LIMITS
All additions use only the held EMF corpus. Six study source hashes match existing scoped qualitative-preview decisions. Four official originals match their retrieval receipts. No new source retrieval, current-law review or systematic search is claimed. No source document or PDF is hosted or copied to public assets; source links remain on their original hosts. Short bounded paraphrases preserve the source scope.

Headache: publisher PDF web extraction, not original PDF bytes; the selected acute RF/sham comparison is separated from the authors' nocebo interpretation, which was not experimentally isolated. New paraphrase stays within the held extraction's200-word source budget. Rahban: cross-sectional self-reported habits and semen parameters, not measured tissue dose or clinical infertility. Greenland: abstract only, original-data pooling and uncommon higher-category exposures; full methods/tables and exact overlap remain unresolved. HERMES: memory-test changes and modeled dose, operator subset and prior-wave reuse, not a diagnosis of brain injury or wholly independent replication. INTERPHONE: abstract only, recalled-use categories with participation/recall limits, no causal claim. COSMOS: prospective registry ascertainment and operator calibration, sparse rare-outcome/heavy-use precision, no universal lifetime-safety conclusion. No new numerical effect estimates, exposure-limit values, clinical recommendations or formal grades are added. Existing numerical acceptance HOLD, full scientific appraisal HOLD and human review pending are unchanged.

ICNIRP RF is a framework/context source, FOPH WLAN/mobile are device-operation and evidence-context sheets, and NCI supplies physical-category orientation for the guides index. Their assessments are attributed and not promoted to new primary experiments or a site certainty grade. There is no device endorsement, personal diagnosis or new treatment plan.

PRESERVATION
Prior twenty note objects are deep-equal to accepted PR2 base. All twenty normalized rendered visible bodies equal their sealed prior after snapshots. Both accepted internal research packets are byte-identical to base. All70 PR1 and60 PR2 output manifest entries still verify. Canonical studies, reviews, guides, sources, fingerprints, checked claims, appraisal previews, robots, sitemap, hosting and source-contract data are unchanged. Own generated tsconfig.tsbuildinfo delta is restored to exact base. No dependency artifact is added.

The study renderer enables notes only for the six new study IDs. Official-context note navigation is extended only for the three new context IDs. Source resolution adds a study lookup only when a note explicitly references that study ID. Existing sources still resolve first. The guides index receives its one explicit notes section. Display punctuation is normalized only on the six target studies and the guides index; source data and every prior twenty note object remain unchanged.

VALIDATION
Production build on Node24.19.0 passes (package requires>=22.13.0). Existing content invariants and TypeScript noEmit pass. Existing236 SSR routes and unknown-source404 pass. Exactten saved bodies have one notes section, at least two source locators and zero em/en dashes. Root's supported IAB checked all ten at390x844: body/document width390, note links2 per research page and3 on guides, pending review visible, no em/en dashes. Root visually inspected HERMES and guides notes/locators; bounded warn/error log read(limit15) returnednone. It restored1280x720 and closed only its temporary tab. BROWSER.json exactly copies root receipt; screenshots were displayed in root trace without local image files. External original links were not followed and no account/person actions occurred. DOM checks do not imply HTTP status; independent local GETs establish200.

React best-practices condensed review applied to scoped changes: server-rendered component reuse; no new hooks, effects, client state or fetch waterfall; explicit source IDs and locators; semantic headings/anchors and existing styles; no unrelated refactor. Full changed-file whitespace and added-line dash checks must pass before each sequential commit.

AUDIT SETTINGS
Fourworkers maximum, minimum0.25s per worker attempt, timeout25s, tworetries, GETonly, failclosedrobots before URL/redirect, no external sitemap or source-link following. min_words400, max_thin_cites2, claim_min_hits3; same regexes/exemptions. Existing FILL-AUDIT-2 wrapper SHA256 c804f3aeeff18e75c849ab713407ca386bd296d34bd3fe86920c1df4dcde1c12 is unchanged. Bundled Python3.12.14 and existing parser dependencies are used. Initial localpreview sandbox bind failure was repaired by authorized local-only execution; no install or unlock. A one-off default-Python lxml check failed before parsing and was rerun successfully using the established compatible runtime; output verification records only the successful check.

GATES
One explicitly PARTIAL-ALLOWLIST draft PR, two normal commits stacked on accepted PR2. UKHSA remains unmatched/BLOCKED with open09:58GATE and no implied HOLD waiver; unblocked accepted work proceeds under the standing skip-blocked-step rule. No force push, history rewrite, merge, deploy, publish, credentials, external messages or real-person actions. Receiver remainsOFF. UKHSA scope ruling, full scientific appraisal, human approval and release remain separate gates. No live improvement is claimed.
