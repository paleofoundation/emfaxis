import pages from './rollout-pages.json' with {type:'json'};
import catalog from './recovered-sources.json' with {type:'json'};
import type {Paragraph,Module} from './evidence';
export type EditorialPage={pageId:string;id:string;kind:'guide'|'question';title:string;intro:string;takeaway:string;overview:Paragraph[];sections:Module[];faqs:{q:string;a:string}[];related:{title:string;href:string}[]};
export type RecoveredSource={citation?:string;scope?:string;limitations?:string;doi?:string;year?:string|number;authors?:string;id:string;title:string;url:string;source_type:string;access_basis:string;checked_at:string;review_status:string;fingerprint:string;integrity_status:string;claims:{id:string;text:string;locator:string;basis:string;scientific_review:string}[];pages:{id:string;path:string;title:string}[]};
export const rolloutPages=pages as EditorialPage[];
export const recoveredSources=catalog as RecoveredSource[];
export const readingBasis=(s:RecoveredSource)=>s.access_basis==='publisher_fulltext_web_snapshot'?'Publisher full-text web snapshot':s.claims.some(c=>c.basis==='full_text')?'Full text: selected passages checked':s.claims.some(c=>c.basis==='abstract')?'Abstract only':s.source_type==='official_context'?'Official context document':'Selected source record';
