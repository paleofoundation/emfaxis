import assert from 'node:assert/strict';
import fs from 'node:fs';
import {sources,outcomes} from '../lib/evidence.ts';
import {rolloutPages,recoveredSources} from '../lib/rollout.ts';
import {guides} from '../lib/guides.ts';
import {studies} from '../lib/studies.ts';
import {appraisalPreviews} from '../lib/appraisal.ts';
const base=process.env.EMF_CHECK_ORIGIN||'http://127.0.0.1:5173';
const routes=[...new Set(['/research/progress',...studies.map(s=>'/research/'+s.id),...rolloutPages.map(p=>'/'+p.kind+'s/'+p.id),...recoveredSources.map(s=>'/research/'+s.id),'/','/sources','/outcomes','/search?q=router','/research/cosmos','/questions/t08','/glossary/sar',...['radiofrequency','elf','intermediate-frequency','static'].map(id=>'/fields/'+id),...sources.map(t=>'/sources/'+t.id),...outcomes.map(t=>'/outcomes/'+t.id),...guides.map(t=>'/guides/'+t.id)])];
const results=[];
for(const route of routes){
 const response=await fetch(base+route),html=await response.text();
 assert.equal(response.status,200,route+' HTTP '+response.status);
 assert(html.includes('Main navigation'),route+' missing shell');
 assert(!html.includes('EMFAXIS-WS-20261016-01'),route+' private packet leak');
 if(route.startsWith('/sources/')||route.startsWith('/outcomes/')){
  for(const anchor of ['overview','evidence','research','studies','questions','update-history','references'])assert(html.includes('id="'+anchor+'"'),route+' missing '+anchor);
  assert(html.indexOf('id="research"')<html.indexOf('id="questions"'));
  assert(html.indexOf('id="questions"')<html.indexOf('id="update-history"'));
  assert(html.indexOf('id="update-history"')<html.indexOf('id="references"'));
 }
 if(appraisalPreviews.some(a=>route==='/research/'+a.paper_id)){assert(html.includes('id="appraisal-draft"'),route+' missing appraisal preview');assert(html.includes('Human scientific review pending'),route+' missing review state');}
 assert(!html.includes('private_source_file'),route+' private path key leak');
 results.push({route,status:response.status,bytes:html.length});
}
const missing=await fetch(base+'/sources/not-a-real-source');assert.equal(missing.status,404,'unknown source must be 404');
const result={status:'PASS',origin:base,routes:results,unknownSource:404,scope:'HTTP/SSR route checks; browser interactions recorded separately'};
console.log(JSON.stringify({status:'PASS',routes:results.length,unknownSource:404}));
if(process.argv[2])fs.writeFileSync(process.argv[2],JSON.stringify(result,null,2)+'\n');
