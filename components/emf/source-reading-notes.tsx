import notes from '@/lib/thin-fill.json';
import {recoveredSources} from '@/lib/rollout';

type Note = {title:string;paragraphs:{text:string;source:string;locator:string}[]};
export function SourceReadingNotes({id}:{id:string}) {
  const sections:Note[]|undefined=(notes as Record<string,Note[]>)[id];
  if(!sections)return null;
  return <section id="reading-notes" aria-label="Reading the source in context">
    {sections.map((section,index)=><section key={section.title} id={`reading-note-${index+1}`}>
      <h2>{section.title}</h2>
      {section.paragraphs.map((paragraph,i)=>{
        const source=recoveredSources.find(source=>source.id===paragraph.source);
        if(!source)throw new Error(`Missing reading-note source ${paragraph.source}`);
        return <div key={i}><p>{paragraph.text}</p><p className="source-locator"><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>. {paragraph.locator}.</p></div>;
      })}
    </section>)}
  </section>;
}
