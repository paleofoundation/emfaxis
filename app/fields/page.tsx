import {SourceReadingNotes} from '@/components/emf/source-reading-notes';
import {fields} from '@/lib/evidence';
export const metadata={title:'Field categories',alternates:{canonical:'/fields'}};
export default function Page(){return <div className="page"><p className="eyebrow">UNDERSTAND THE EXPOSURE</p><h1>Four field categories.</h1><p className="page-intro">Start with the physical source, then follow its exposure and health evidence.</p><div className="directory-grid">{fields.map(f=><a className="directory-card" key={f.id} href={'/fields/'+f.id}><p className="eyebrow">FIELD CATEGORY</p><h2>{f.title}</h2><p>{f.intro}</p><span className="text-link">Explore the category →</span></a>)}</div><SourceReadingNotes id="fields"/></div>}
