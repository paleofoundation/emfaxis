import type {Module} from './evidence';

/** Keep interpretation beside the findings while retaining all existing anchors. */
export function withReadingExamples(modules:Module[],examples:Module[]=[]):Module[]{
 const explanation=modules.filter(module=>module.id!=='evidence');
 const evidence=modules.filter(module=>module.id==='evidence');
 return [...explanation,...examples,...evidence];
}
