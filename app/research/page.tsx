import {Research} from '@/components/emf/research';
export const metadata={title:'Research library',description:'Search primary EMF studies and pooled analyses by exposure, outcome, and study design.'};
export default async function Page({searchParams}:{searchParams:Promise<{q?:string}>}){const q=(await searchParams).q;return <div className="page"><p className="eyebrow">FOLLOW THE FINDING</p><h1>Research library</h1><p className="page-intro">Original research. The finding, the context, and the limits.</p><Research initialQuery={typeof q==='string'?q:''}/></div>}
