import {Library} from '@/components/emf/library';
import {requireChatGPTUser} from '@/app/chatgpt-auth';
export const dynamic='force-dynamic';
export const metadata={title:'My saved library'};
async function Protected(){await requireChatGPTUser('/library');return <Library/>}
export default function Page(){return <Protected/>}
