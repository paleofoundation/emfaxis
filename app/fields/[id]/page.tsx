import {notFound} from 'next/navigation';
import {fields} from '@/lib/evidence';
import {TopicPage} from '@/components/emf/topic-page';
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;const f=fields.find(f=>f.id===id);return {title:f?.title||'Field category not found',description:f?.intro,alternates:{canonical:'/fields/'+id}}}
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;const f=fields.find(f=>f.id===id);if(!f)notFound();return <TopicPage topic={f}/>}
