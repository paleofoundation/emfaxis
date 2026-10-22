import {notFound} from 'next/navigation';
import {sources} from '@/lib/evidence';
import {TopicPage} from '@/components/emf/topic-page';
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;const t=sources.find(t=>t.id===id);return {title:t?.title||'Exposure not found',description:t?.intro,alternates:{canonical:'/sources/'+id}}}
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;const topic=sources.find(t=>t.id===id);if(!topic)notFound();return <TopicPage topic={topic}/>}
