import fs from 'node:fs';
const data=JSON.parse(fs.readFileSync(new URL('../lib/thin-fill.json',import.meta.url),'utf8'));
const sources=JSON.parse(fs.readFileSync(new URL('../lib/recovered-sources.json',import.meta.url),'utf8'));
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
for(const id of ['first-guide-preview','emf-reading-worksheet']){
 const file=new URL(`../public/resources/${id}.html`,import.meta.url);
 let html=fs.readFileSync(file,'utf8');
 const block='<section id="reading-notes">'+data[id].map(section=>`<section><h2>${esc(section.title)}</h2>`+section.paragraphs.map(p=>{
  const source=sources.find(s=>s.id===p.source);if(!source)throw new Error('Missing source '+p.source);
  return `<p>${esc(p.text)}</p><p class="small"><a href="${esc(source.url)}">${esc(source.title)}</a>. ${esc(p.locator)}.</p>`;
 }).join('')+'</section>').join('')+'</section>';
 const start='<!-- source-reading-notes:start -->',end='<!-- source-reading-notes:end -->';
 const prior=new RegExp(start+'[\\s\\S]*?'+end);
 if(prior.test(html))html=html.replace(prior,start+block+end);
 else html=html.replace('<footer>',start+block+end+'<footer>');
 // Public prose uses American punctuation; do not alter minus signs in technical values.
 html=html.replaceAll('—',', ').replaceAll('–',' to ');
 fs.writeFileSync(file,html);
}
