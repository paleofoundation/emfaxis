import updates from '@/lib/editorial-updates.json';
import {recoveredSources} from '@/lib/rollout';
import {appraisalFor} from '@/lib/appraisal';

export function EditorialUpdates({path}:{path:string}) {
 return updates.filter(event=>event.path===path).map(event=><div className="history-entry" key={event.path+event.date}>
  <time dateTime={event.date}>22 October 2026</time>
  <h3>{event.title}</h3><p>{event.text}</p>
  <ul>{event.source_ids.map(id=><li key={id}><a href={'/research/'+id+(appraisalFor(id)?'#appraisal-draft':'')}>{recoveredSources.find(source=>source.id===id)?.title||id}</a></li>)}</ul>
 </div>);
}
