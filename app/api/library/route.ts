import {getChatGPTUser} from '@/app/chatgpt-auth';
import {storage} from '@/lib/storage';
import {studies} from '@/lib/studies';
import {guides} from '@/lib/guides';
const privateHeaders={'Cache-Control':'private, no-store'};
const json=(data:unknown,status=200)=>Response.json(data,{status,headers:privateHeaders});
export async function GET(){try{const user=await getChatGPTUser();if(!user)return json({user:null,items:[]});const {results}=await storage().prepare('SELECT kind,item_id AS itemId,note,saved_at AS savedAt,updated_at AS updatedAt FROM saved_items WHERE user_id = ? ORDER BY saved_at DESC').bind(user.userId).all();return json({user:{name:user.displayName,email:user.email},items:results});}catch(e){console.error('Library read failed',e);return json({error:'Your library could not be loaded. Please try again.'},503);}}
async function mutate(request:Request,remove=false){
 const origin=request.headers.get('origin');if(origin&&origin!==new URL(request.url).origin)return json({error:'Request origin is not allowed.'},403);
 const user=await getChatGPTUser();if(!user)return json({error:'Sign in to save to your library.'},401);
 if(!request.headers.get('content-type')?.includes('application/json'))return json({error:'JSON is required.'},415);
 let data;try{const raw=await request.text();if(raw.length>12000)return json({error:'This note is too long.'},413);data=JSON.parse(raw);}catch{return json({error:'Invalid request.'},400);}
 if(!data||typeof data!=='object')return json({error:'Invalid item.'},400);
 const {kind,itemId,note}=data;const known=(kind==='study'?studies:kind==='guide'?guides:[]).some(x=>x.id===itemId);
 if(!known||note!==undefined&&(typeof note!=='string'||note.length>5000))return json({error:'Invalid item or note. Notes allow up to 5,000 characters.'},400);
 try{const db=storage();if(remove){await db.prepare('DELETE FROM saved_items WHERE user_id = ? AND kind = ? AND item_id = ?').bind(user.userId,kind,itemId).run();}else{const now=Date.now();if(note===undefined){await db.prepare('INSERT INTO saved_items (user_id,kind,item_id,note,saved_at,updated_at) VALUES (?,?,?,?,?,?) ON CONFLICT(user_id,kind,item_id) DO NOTHING').bind(user.userId,kind,itemId,'',now,now).run();}else{await db.prepare('INSERT INTO saved_items (user_id,kind,item_id,note,saved_at,updated_at) VALUES (?,?,?,?,?,?) ON CONFLICT(user_id,kind,item_id) DO UPDATE SET note = excluded.note, updated_at = excluded.updated_at').bind(user.userId,kind,itemId,note,now,now).run();}}return json({ok:true});}catch(e){console.error('Library write failed',e);return json({error:'Your change could not be saved. Please try again.'},503);}}
export async function POST(r:Request){return mutate(r)}
export async function DELETE(r:Request){return mutate(r,true)}
