import {rolloutPages} from '@/lib/rollout';
import {EditorialPageView} from '@/components/emf/editorial-page';
import {notFound} from 'next/navigation';
import {guides} from '@/lib/guides';
import {guideDepth} from '@/lib/guide-depth';
import {studies} from '@/lib/studies';
import {sources,outcomes} from '@/lib/evidence';
import {LinkedText} from '@/components/emf/linked-text';
import {questions} from '@/lib/questions';
import {FAQ} from '@/components/emf/faq';
import {PostShell} from '@/components/emf/post-shell';
import {Citations,ResearchSection} from '@/components/emf/research-section';
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;const draft=rolloutPages.find(p=>p.kind==='guide'&&p.id===id);const g=guides.find(g=>g.id===id);return {title:draft?.title||g?.title||'Guide not found',description:draft?.intro||g?.intro,alternates:{canonical:'/guides/'+id}}}
export default async function Page({params}:{params:Promise<{id:string}>}){
 const {id}=await params;const draft=rolloutPages.find(p=>p.kind==='guide'&&p.id===id);if(draft)return <EditorialPageView page={draft}/>;const g=guides.find(g=>g.id===id);if(!g)notFound();
 const sections=[...g.sections,...(guideDepth[id]||[])];
 const cited=[...new Set(sections.flatMap(s=>s.refs||[]))],linked=studies.filter(s=>cited.includes(s.id));
 const terminal=<><section id="questions"><h2>Common questions</h2><FAQ questions={g.questions}/></section><section id="update-history" className="update-history"><h2>Update History</h2><div className="history-entry"><time dateTime="2026-10-23">23 October 2026</time><h3>Expanded methods and study interpretation</h3><p>Expanded explanations of study scope, exposure measurement and interpretation accompany the existing summaries. Findings and source-reading status are retained; no new certainty grade is assigned.</p></div></section></>;
 return <PostShell kind="guide" id={id} saveKind="guide" category={g.category} title={g.title} intro={g.intro} sections={[{id:'summary',label:'Summary'},...sections.map((s,i)=>({id:'section-'+i,label:s.title})),{id:'evidence',label:'Evidence'},{id:'research',label:'Research Feed'},{id:'questions',label:'FAQs'},{id:'update-history',label:'Update History'},{id:'references',label:'References'}]} facts={[{label:'Evidence in this guide',value:linked.length+' linked study records'},{label:'Latest linked source check',value:linked.map(s=>s.checked).sort().at(-1)||'Not recorded'},{label:'Coverage',value:'Selected sources; not systematic'}]} related={[...sources,...outcomes].filter(t=>t.guide===id).slice(0,3).map(t=>({title:t.title,href:'/'+(t.kind==='source'?'sources':'outcomes')+'/'+t.id}))}><section id="summary" className="takeaway"><p className="eyebrow">WHAT TO TAKE AWAY</p><p>{g.takeaway}</p></section>{sections.map((s,i)=><section id={'section-'+i} key={s.title}><h2>{s.title}</h2><p><LinkedText text={s.text}/><Citations ids={s.refs||[]} order={cited}/></p></section>)}<section id="evidence"><h2>Follow the evidence</h2><p>Use the exposure and outcome pages to compare the selected findings in context, then inspect the source records below. These summaries retain their actual source-reading status; they are not a completed systematic review.</p><div className="related-reading">{[...sources,...outcomes].filter(t=>t.guide===id).map(t=><a key={t.id} href={'/'+(t.kind==='source'?'sources':'outcomes')+'/'+t.id}>{t.title}</a>)}</div><details id="related"><summary>Related reader questions</summary><div className="related-reading">{questions.filter(q=>q.guideIds.includes(id)).map(q=><a key={q.id} href={'/questions/'+q.id.toLowerCase()}>{q.title}</a>)}</div></details></section><ResearchSection ids={cited} afterFeed={terminal}/><p className="editorial-note">Reading edition based on selected sources. Scientific appraisal and human review remain pending. <a href="/methodology">Methods and review status.</a></p></PostShell>
}
