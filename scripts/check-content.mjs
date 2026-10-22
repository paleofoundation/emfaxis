import fs from 'node:fs';
import assert from 'node:assert/strict';
import {studies} from '../lib/studies.ts';
import {guides,references} from '../lib/guides.ts';
import {terms,termSlug} from '../lib/glossary.ts';
import {reviews,reviewQuestions} from '../lib/reviews.ts';
const questions=JSON.parse(fs.readFileSync(new URL('../lib/questions.json',import.meta.url),'utf8'));
const ids=(a,key='id')=>new Set(a.map(x=>x[key]));
for(const [name,list] of [['studies',studies],['guides',guides],['questions',questions]])assert.equal(ids(list).size,list.length,`duplicate ${name} ID`);
assert.equal(questions.length,40);assert.equal(studies.length,16);assert.equal(guides.length,9);assert.equal(new Set(terms.map(x=>termSlug(x[0]))).size,terms.length);
for(let i=1;i<=40;i++)assert(ids(questions).has('T'+String(i).padStart(2,'0')));
const studyIds=ids(studies),guideIds=ids(guides),sourceIds=new Set([...studyIds,...Object.keys(references)]),topicIds=ids(questions);
assert.equal(new Set(studies.map(x=>x.doi.toLowerCase())).size,studies.length);
for(const s of studies){assert(s.pmid&&s.doi&&s.originalTitle);assert(guideIds.has(s.guide));assert(s.url.startsWith('https://'))}
const legacy=JSON.parse(fs.readFileSync(new URL('../research/primary-source-metadata.json',import.meta.url),'utf8')).resultList.result;
for(const s of studies){const original=legacy.find(x=>x.pmid===s.pmid);assert(original,`lost identity ${s.id}`);assert.equal(original.doi.toLowerCase(),s.doi.toLowerCase())}
const recovered=JSON.parse(fs.readFileSync(new URL('../lib/recovered-sources.json',import.meta.url),'utf8'));for(const r of recovered)sourceIds.add(r.id);
const gaps=[];
for(const g of guides){for(const s of g.sections){for(const id of s.refs||[])assert(sourceIds.has(id),`orphan citation ${g.id}/${id}`);const words=s.text.trim().split(/\s+/).length;if(words<60)gaps.push({guide:g.id,section:s.title,words,status:'HOLD',reason:'Legacy short paragraph awaits evidence-based expansion; no filler added.'})}for(const q of g.questions)assert(q.q&&q.a)}
for(const q of questions){for(const id of q.guideIds)assert(guideIds.has(id),`orphan guide ${id}`);for(const id of q.studyIds)assert(studyIds.has(id),`orphan study ${id}`);for(const id of q.relatedTopicIds)assert(topicIds.has(id));for(const d of q.publicDiscussions)assert(new URL(d.url).hostname==='www.reddit.com');assert(q.shortAnswer&&q.answerStatus);assert(!('sampleScore' in q),'private demand scoring leaked to site projection')}
for(const r of reviews){assert(studyIds.has(r.paperId));assert.equal(r.answers.length,15);assert.equal(new Set(r.answers.map(x=>x.id)).size,15);for(const [id] of reviewQuestions)assert(r.answers.some(x=>x.id===id));const n=r.preview.split(/\s+/).length,m=r.sections.map(x=>x.text).join(' ').split(/\s+/).length;assert(n>=50&&n<=90,`preview length ${r.paperId}/${n}`);assert(m>=500&&m<=800,`review length ${r.paperId}/${m}`);for(const a of r.answers)assert(a.locators.length||a.missingReason,`missing provenance ${r.paperId}/${a.id}`)}
for(const path of ['public/resources/first-guide.html','public/resources/first-guide-preview.html','public/resources/emf-reading-worksheet.html','public/resources/emf-reading-worksheet.txt'])assert(fs.statSync(new URL('../'+path,import.meta.url)).size>100);
const html=fs.readFileSync(new URL('../public/resources/first-guide.html',import.meta.url),'utf8');assert(html.includes('0.2-draft'));assert(html.includes('correction'));
console.log(JSON.stringify({status:'PASS',scope:'Private draft structural invariants; not scientific approval',studies:studies.length,guides:guides.length,questions:questions.length,terms:terms.length,fullTextDrafts:reviews.length,legacyParagraphGaps:gaps.length}));
if(process.argv.includes('--report'))fs.writeFileSync(new URL('../research/contracts/content-gaps.json',import.meta.url),JSON.stringify(gaps,null,2)+'\n');

// Exposure/outcome fanout validates the shared public projection, never private candidates.
const {sources,outcomes,evidenceRows,topicRegistry,rowsFor,citationsFor}=await import('../lib/evidence.ts');
const {guideDepth}=await import('../lib/guide-depth.ts');
assert.equal(topicRegistry.filter(t=>t.type==='exposure_source').length,17);
assert.equal(topicRegistry.filter(t=>t.type==='health_outcome').length,17);
assert.equal(new Set(evidenceRows.map(r=>r.id)).size,evidenceRows.length);
for(const topic of [...sources,...outcomes]){
 const expected=topic.kind==='source'?['properties','everyday-exposure','mechanisms','levels-and-limits','distance','evidence']:['measurement','evidence','confounding','controlled-studies','agency-assessments','interventions'];
 assert.deepEqual(topic.modules.map(m=>m.id),expected,`module contract ${topic.id}`);
 assert(topic.overview.length&&topic.faqs.length&&rowsFor(topic).length,`empty topic ${topic.id}`);
 for(const id of citationsFor(topic))assert(sourceIds.has(id),`unknown citation ${topic.id}/${id}`);
 for(const row of rowsFor(topic))assert(evidenceRows.includes(row),'comparison was independently copied');
}
for(const row of evidenceRows){assert(sources.some(t=>t.id===row.source));assert(row.outcome==='exposure-characterisation'||outcomes.some(t=>t.id===row.outcome));for(const id of row.papers)assert(sourceIds.has(id));assert(row.finding&&row.limit&&row.scope);}
assert(evidenceRows.find(r=>r.id==='wifi-sleep-direct').papers.includes('wifi-pmid-32408065'),'direct Wi-Fi result must reach both source and outcome pages');
assert.deepEqual(Object.keys(guideDepth).sort(),guides.map(g=>g.id).sort());
for(const [id,sections] of Object.entries(guideDepth)){assert(sections.length);for(const s of sections){assert(s.text&&s.title);for(const ref of s.refs||[])assert(sourceIds.has(ref),`unknown guide depth citation ${id}/${ref}`)}}
console.log(JSON.stringify({status:'PASS',scope:'Selected public-source fanout; not completed scientific appraisal',sourceReadingEditions:sources.length,outcomeReadingEditions:outcomes.length,sharedComparisons:evidenceRows.length,guideExpansionSections:Object.values(guideDepth).flat().length,privatePilotImported:false}));

const planned=JSON.parse(fs.readFileSync(new URL('../lib/rollout-pages.json',import.meta.url),'utf8'));
assert.equal(topicRegistry.length,65);assert.equal(planned.length,27);assert.equal(sources.length,17);assert.equal(outcomes.length,17);
for(const p of planned){assert(p.overview.length>=2&&p.sections.length>=4&&p.faqs.length>=3);const words=[...p.overview,...p.sections.flatMap(s=>s.paragraphs)].map(p=>p.text).join(' ').split(/\s+/).length;assert(words>=500,'thin planned article '+p.id);for(const para of [...p.overview,...p.sections.flatMap(s=>s.paragraphs)])for(const ref of para.refs||[])assert(sourceIds.has(ref),'orphan planned reference '+ref)}
assert.equal(recovered.length,44);assert.equal(recovered.flatMap(s=>s.claims).length,100);
for(const s of recovered){assert(s.url.startsWith('https://'));assert(s.fingerprint.length===64);for(const c of s.claims)assert.equal(c.scientific_review,'pending')}
for(const f of ['recovered-sources.json','rollout-pages.json','rollout-topics.json','topic-overrides.json']){const raw=fs.readFileSync(new URL('../lib/'+f,import.meta.url),'utf8');assert(!/private_source_file|private_pdf_path|supporting_passage_excerpt|\/Users\/kmfp|human_approved/.test(raw),'private or approval material in '+f)}
console.log(JSON.stringify({status:'PASS',plannedPages:65,populatedSources:17,populatedOutcomes:17,plannedQuestions:16,plannedGuidesAndMethods:11,fields:4,recoveredSources:44,sourceCheckedClaims:100,scientificReview:'pending'}));

const appraisals=JSON.parse(fs.readFileSync(new URL('../lib/appraisal-previews.json',import.meta.url),'utf8'));
assert.equal(new Set(appraisals.map(a=>a.paper_id)).size,appraisals.length);
for(const a of appraisals){assert(sourceIds.has(a.paper_id),'unknown appraisal record');assert.equal(a.human_review,'pending');assert.equal(a.formal_grade,null);assert(a.preview.split(/\s+/).length>=50&&a.preview.split(/\s+/).length<=90);assert.equal(Object.values(a.question_coverage).reduce((n,x)=>n+x,0),15);assert(a.review_fingerprint.length===64&&a.source_hash.length===64);assert(!('answers' in a)&&!('narrative' in a)&&!('integrity' in a),'private appraisal body leaked')}
console.log(JSON.stringify({status:'PASS',appraisalPreviews:appraisals.length,fullPrivateAppraisalsInPublicPayload:0,humanScientificApprovals:0}));
