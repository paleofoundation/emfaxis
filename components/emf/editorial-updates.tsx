import updates from '@/lib/editorial-updates.json';
import {recoveredSources} from '@/lib/rollout';
import {appraisalFor} from '@/lib/appraisal';
import {studies} from '@/lib/studies';
import {references} from '@/lib/guides';

export function EditorialUpdates({path}:{path:string}) {
 return updates.filter(event=>event.path===path).map(event=><div className="history-entry" key={event.path+event.date}>
  <time dateTime={event.date}>{new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(event.date+'T12:00:00Z'))}</time>
  <h3>{event.title}</h3><p>{event.text}</p>
  <ul>{event.source_ids.map(id=>{const source=recoveredSources.find(s=>s.id===id),study=studies.find(s=>s.id===id),context=references[id];return <li key={id}><a href={source||study?'/research/'+id+(appraisalFor(id)?'#appraisal-draft':''):context?.url}>{source?.title||study?.title||context?.title||id}</a></li>})}</ul>
 </div>);
}
