import {rolloutPages} from '@/lib/rollout';
import {EditorialPageView} from '@/components/emf/editorial-page';
import {LegacyQuestionPage} from '@/components/emf/legacy-question-page';
import {notFound} from 'next/navigation';
import {questionById} from '@/lib/questions';
export async function generateMetadata({params}:{params:Promise<{id:string}>}){
 const {id}=await params;const draft=rolloutPages.find(p=>p.kind==='question'&&p.id===id);const q=questionById(id);
 return {title:draft?.title||q?.title||'Question not found',description:draft?.intro||q?.question,alternates:{canonical:'/questions/'+id.toLowerCase()}};
}
export default async function Page({params}:{params:Promise<{id:string}>}){
 const {id}=await params;const draft=rolloutPages.find(p=>p.kind==='question'&&p.id===id);
 if(draft)return <EditorialPageView page={draft}/>;
 const question=questionById(id);if(!question)notFound();
 return <LegacyQuestionPage question={question}/>;
}
