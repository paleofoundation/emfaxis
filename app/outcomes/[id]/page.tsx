import {notFound} from 'next/navigation';
import {outcomes} from '@/lib/evidence';
import {TopicPage} from '@/components/emf/topic-page';
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;const t=outcomes.find(t=>t.id===id);return {title:t?.title||'Outcome not found',description:t?.intro,alternates:{canonical:'/outcomes/'+id}}}
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;const topic=outcomes.find(t=>t.id===id);if(!topic)notFound();return <TopicPage topic={topic}/>}
