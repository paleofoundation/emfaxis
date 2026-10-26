import assert from 'node:assert/strict';
import fs from 'node:fs';
import {sources,outcomes,fields,citationsFor,evidenceRows} from '../lib/evidence.ts';
const questions=JSON.parse(fs.readFileSync(new URL('../lib/questions.json',import.meta.url),'utf8'));
import {terms,termSlug} from '../lib/glossary.ts';
import {guides,references} from '../lib/guides.ts';
import {studies} from '../lib/studies.ts';
import {rolloutPages,recoveredSources} from '../lib/rollout.ts';
import {topicDepth,editorialDepth} from '../lib/article-depth.ts';
import {questionDepth} from '../lib/question-depth.ts';
import {glossaryDepth} from '../lib/glossary-depth.ts';
import {withReadingExamples} from '../lib/article-modules.ts';
import {comparisonsForGuide} from '../lib/guide-comparisons.ts';
import {guideDepth} from '../lib/guide-depth.ts';

const sourceIds=new Set([...studies.map(s=>s.id),...recoveredSources.map(s=>s.id),...Object.keys(references)]);
const knownPaths=new Set([
 '/methodology','/research','/guides','/sources','/outcomes','/questions','/glossary',
 ...[...sources,...outcomes,...fields].map(t=>'/'+({source:'sources',outcome:'outcomes',field:'fields'}[t.kind])+'/'+t.id),
 ...questions.map(q=>'/questions/'+q.id.toLowerCase()),
 ...rolloutPages.map(p=>'/'+p.kind+'s/'+p.id),...guides.map(g=>'/guides/'+g.id),
 ...terms.map(t=>'/glossary/'+termSlug(t[0])),...[...sourceIds].map(id=>'/research/'+id)
]);
const wordCount=paragraphs=>paragraphs.reduce((n,p)=>n+p.text.trim().split(/\s+/).length,0);
const paragraphsOf=modules=>modules.flatMap(m=>m.paragraphs);
const checkParagraphs=(paragraphs,owner)=>{
 for(const p of paragraphs){assert(p.text.trim(),owner+' empty paragraph');for(const id of p.refs||[])assert(sourceIds.has(id),owner+' unknown source '+id);}
};
const checkModules=(modules,owner)=>{
 assert.equal(new Set(modules.map(m=>m.id)).size,modules.length,owner+' duplicate module anchor');
 for(const m of modules){assert(m.id&&m.label&&m.title,owner+' missing heading');assert(m.paragraphs.length,owner+' empty module');}
 checkParagraphs(paragraphsOf(modules),owner);
};
const checkLinks=(links,owner)=>{for(const link of links)assert(knownPaths.has(link.href.split('#')[0]),owner+' broken related route '+link.href);};
assert.deepEqual(Object.keys(questionDepth).sort(),questions.map(q=>q.id.toLowerCase()).sort(),'legacy question coverage');
assert.deepEqual(Object.keys(glossaryDepth).sort(),terms.map(t=>termSlug(t[0])).sort(),'glossary coverage');
assert.deepEqual(Object.keys(topicDepth).sort(),[...sources,...outcomes,...fields].map(t=>t.kind+':'+t.id).sort(),'topic coverage');
assert.deepEqual(Object.keys(editorialDepth).sort(),rolloutPages.map(p=>p.kind+':'+p.id).sort(),'editorial coverage');
const all=[];
for(const q of questions){
 const key=q.id.toLowerCase(),d=questionDepth[key],paras=[...d.overview,...paragraphsOf(d.sections)];
 assert(d.takeaway&&d.faqs.length>=2,key+' needs takeaway and FAQs');assert(d.sections.length>=3,key+' missing explanation sections');
 checkModules(d.sections,key);checkParagraphs(d.overview,key);checkLinks(d.related,key);
 const words=wordCount(paras);assert(words>=250,key+' remains too thin: '+words);assert(paras.some(p=>p.refs?.length),key+' missing evidence links');
 all.push({path:'/questions/'+key,words,sections:d.sections.length});
}
for(const [key,d] of Object.entries(glossaryDepth)){
 checkModules(d.sections,key);checkLinks(d.related,key);assert(d.faqs.length,key+' missing FAQ');
 const words=wordCount(paragraphsOf(d.sections));assert(words>=190,key+' remains too thin: '+words);
 assert(paragraphsOf(d.sections).some(p=>p.refs?.length),key+' missing source examples');
 all.push({path:'/glossary/'+key,words,sections:d.sections.length});
}
for(const t of [...sources,...outcomes,...fields]){
 const key=t.kind+':'+t.id,extra=topicDepth[key],modules=withReadingExamples(t.modules,extra);checkModules(modules,key);
 for(const ref of citationsFor(t,modules))assert(sourceIds.has(ref),key+' unknown rendered citation');
 assert(extra.length&&wordCount(paragraphsOf(extra))>=130,key+' missing substantive reading example');
 assert(modules.indexOf(extra[0])<modules.findIndex(m=>m.id==='evidence'),key+' example must precede evidence');
 all.push({path:'/'+({source:'sources',outcome:'outcomes',field:'fields'}[t.kind])+'/'+t.id,addedWords:wordCount(paragraphsOf(extra)),words:wordCount([...t.overview,...paragraphsOf(modules)]),sections:modules.length});
}
for(const p of rolloutPages){
 const key=p.kind+':'+p.id,extra=editorialDepth[key],modules=withReadingExamples(p.sections,extra);checkModules(modules,key);
 assert(extra.length&&wordCount(paragraphsOf(extra))>=130,key+' missing reading example');
 all.push({path:'/'+p.kind+'s/'+p.id,addedWords:wordCount(paragraphsOf(extra)),words:wordCount([...p.overview,...paragraphsOf(modules)]),sections:modules.length});
}
for(const g of guides){const rows=comparisonsForGuide(g.id,evidenceRows);assert(rows.length,g.id+' missing comparisons');assert.equal(new Set(rows.map(r=>r.id)).size,rows.length,g.id+' duplicated comparison');for(const r of rows)assert(r.finding&&r.limit&&r.scope);all.push({path:'/guides/'+g.id,words:wordCount([...g.sections,...guideDepth[g.id]])+rows.reduce((n,r)=>n+(r.finding+' '+r.limit+' '+r.scope).split(/\s+/).length,0),comparisonRows:rows.length});}
for(const file of ['question-depth.ts','glossary-depth.ts','article-depth.ts']){
 const text=fs.readFileSync(new URL('../lib/'+file,import.meta.url),'utf8');
 assert(!/\bAI(?:[ -]|$)|ChatGPT|Codex|private_source_file|supporting_passage_excerpt|\/Users\/kmfp/.test(text),file+' contains private preparation labels');
}
const result={status:'PASS',date:'2026-10-26',legacyQuestions:questions.length,glossaryEntries:terms.length,topicArticles:Object.keys(topicDepth).length,editorialArticles:Object.keys(editorialDepth).length,guidesWithComparisons:guides.length,pages:all,scientificReview:'pending; no new assessment claimed'};
console.log(JSON.stringify({...result,pages:all.length}));
if(process.argv[2])fs.writeFileSync(process.argv[2],JSON.stringify(result,null,2)+'\n');
