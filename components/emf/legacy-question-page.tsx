import {questionDepth} from '@/lib/question-depth';
import type {questions} from '@/lib/questions';
import {guides} from '@/lib/guides';
import {PostShell} from './post-shell';
import {Citations,ResearchSection} from './research-section';
import {FAQ} from './faq';

type ReaderQuestion=(typeof questions)[number];
export function LegacyQuestionPage({question:q}:{question:ReaderQuestion}){
 const depth=questionDepth[q.id.toLowerCase()];
 const overview=depth?.overview||[{text:q.shortAnswer,refs:q.studyIds}];
 const sections=depth?.sections||[];
 const cited=[...new Set([...overview,...sections.flatMap(s=>s.paragraphs)].flatMap(p=>p.refs||[]).concat(q.studyIds))];
 const linked=guides.filter(g=>q.guideIds.includes(g.id));
 const afterFeed=<>
  <section id="questions"><h2>Common questions</h2><FAQ questions={depth?.faqs||[]}/></section>
  <section id="update-history" className="update-history"><h2>Update History</h2><div className="history-entry"><time dateTime="2026-10-26">26 October 2026</time><h3>Expanded question-specific explanation</h3><p>Added a fuller answer, study-reading examples and FAQs using the selected linked sources. Remaining gaps are described for this question; no new scientific approval or certainty grade is assigned.</p></div></section>
 </>;
 return <PostShell kind="question" id={q.id.toLowerCase()} saveKind="question" category={q.cluster+' · '+q.id} title={q.title} intro={q.question}
  sections={[{id:'answer',label:'Answer'},{id:'context',label:'Context'},...sections.map(s=>({id:s.id,label:s.label})),{id:'discussions',label:'Discussions'},{id:'evidence',label:'Evidence'},{id:'research',label:'Research Feed'},{id:'questions',label:'FAQs'},{id:'update-history',label:'Update History'},{id:'references',label:'References'}]}
  facts={[{label:'Answer scope',value:'Selected-source explanation; remaining gaps described below'},{label:'Scientific appraisal',value:'Pending; no certainty grade assigned'},{label:'Question provenance',value:'Provisional community sample'}]}
  related={depth?.related||linked.slice(0,3).map(g=>({title:g.title,href:'/guides/'+g.id}))}>
  <section id="answer" className="takeaway"><p className="eyebrow">WHAT THE EVIDENCE CAN SAY</p><p>{depth?.takeaway||q.shortAnswer}</p></section>
  <section id="context"><h2>The answer in context</h2>{overview.map((paragraph,i)=><p key={i}>{paragraph.text}<Citations ids={paragraph.refs||[]} order={cited}/></p>)}</section>
  {sections.map(section=><section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph,i)=><p key={i}>{paragraph.text}<Citations ids={paragraph.refs||[]} order={cited}/></p>)}</section>)}
  <section id="discussions"><h2>Where people are asking</h2><p>These public discussions illustrate the question. Their claims are separate from the scientific sources below.</p><ul className="discussion-list">{q.publicDiscussions.map((discussion,i)=><li key={discussion.id}><a href={discussion.url} target="_blank" rel="noreferrer">Discussion {i+1}</a><span>{discussion.community}</span></li>)}</ul>{!q.publicDiscussions.length&&<p>No supporting discussion was retained after the current audit. This remains an editorial research question.</p>}</section>
  <section id="evidence"><span id="focus" aria-hidden="true"/><h2>Evidence for this question</h2><p>{q.researchFocus}</p><p>The linked catalogue separates the available human, animal, laboratory and context records. Read the source’s exposure and outcome beside its finding; the number of reports does not establish confidence or independent replication.</p></section>
  <ResearchSection ids={cited} afterFeed={afterFeed}/>
 </PostShell>;
}
