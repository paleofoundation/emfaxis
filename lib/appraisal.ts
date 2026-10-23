import data from './appraisal-previews.json' with {type:'json'};
export type AppraisalPreviewRecord={paper_id:string;source_id:string;basis:'full_text'|'publisher_fulltext_web_snapshot'|'abstract_only'|'context_full_text';preview:string;scientific_status:'appraisal_draft';human_review:'pending';formal_grade:null;question_coverage:Partial<Record<string,number>>;review_fingerprint:string;source_hash:string;full_review_release:'private_editorial_draft';preview_source_check:string};
export const appraisalPreviews=data as AppraisalPreviewRecord[];
export const appraisalFor=(id:string)=>appraisalPreviews.find(r=>r.paper_id===id);
export const appraisalBasis=(basis:string)=>basis==='abstract_only'?'Abstract only':basis==='publisher_fulltext_web_snapshot'?'Publisher full-text web snapshot':basis==='context_full_text'?'Context full text':'Full text';
export const appraisalReadingBasis=(paperId:string,fallback:string)=>{const draft=appraisalFor(paperId);return draft?appraisalBasis(draft.basis):fallback;};
