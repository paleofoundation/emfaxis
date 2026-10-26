import {notFound} from 'next/navigation';
import {terms,termSlug} from '@/lib/glossary';
import {glossaryDepth} from '@/lib/glossary-depth';
import {guides} from '@/lib/guides';
import {PostShell} from '@/components/emf/post-shell';
import {Citations,ResearchSection} from '@/components/emf/research-section';
import {FAQ} from '@/components/emf/faq';
export async function generateMetadata({params}:{params:Promise<{id:string}>}){
 const {id}=await params;const term=terms.find(t=>termSlug(t[0])===id);
 return {title:term?.[0]||'Term not found',description:term?.[1],alternates:{canonical:'/glossary/'+id}};
}
export default async function Page({params}:{params:Promise<{id:string}>}){
 const {id}=await params;const term=terms.find(t=>termSlug(t[0])===id);if(!term)notFound();
 const depth=glossaryDepth[id];
 const linked=guides.filter(g=>JSON.stringify(g).toLowerCase().includes(term[0].toLowerCase().replace(/\s*\(.+\)/,'')));
 const sections=depth?.sections||[];
 const cited=[...new Set(sections.flatMap(s=>s.paragraphs.flatMap(p=>p.refs||[])))];
 const related=depth?.related||linked.slice(0,3).map(g=>({title:g.title,href:'/guides/'+g.id}));
 const afterFeed=<>
  <section id="questions"><h2>Common questions</h2><FAQ questions={depth?.faqs||[]}/></section>
  <section id="update-history" className="update-history"><h2>Update History</h2><div className="history-entry"><time dateTime="2026-10-26">26 October 2026</time><h3>Expanded definition and research examples</h3><p>Added explanations of how this term is used in EMF research, common interpretation mistakes and linked source examples. This is research-literacy material; scientific review of the underlying studies remains pending.</p></div></section>
 </>;
 return <PostShell kind="term" id={id} category="RESEARCH GLOSSARY" title={term[0]} intro="Meaning, research examples and common interpretation mistakes."
  sections={[{id:'definition',label:'Definition'},...sections.map(s=>({id:s.id,label:s.label})),{id:'reading',label:'Related reading'},{id:'research',label:'Research Feed'},{id:'questions',label:'FAQs'},{id:'update-history',label:'Update History'},{id:'references',label:'References'}]}
  facts={[{label:'Scope',value:'Research literacy and selected-source examples'},{label:'Source interpretation',value:'Read within each study’s design and exposure conditions'},{label:'Expanded',value:'26 October 2026'}]} related={related}>
  <section id="definition" className="takeaway"><p>{term[1]}</p></section>
  {!sections.some(section=>section.id==='context')&&<span id="context" aria-hidden="true"/>}
  {sections.map(section=><section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph,i)=><p key={i}>{paragraph.text}<Citations ids={paragraph.refs||[]} order={cited}/></p>)}</section>)}
  <section id="reading"><h2>Continue reading</h2><div className="related-reading">{related.map(link=><a key={link.href} href={link.href}>{link.title}</a>)}</div></section>
  <ResearchSection ids={cited} afterFeed={afterFeed}/>
 </PostShell>;
}
