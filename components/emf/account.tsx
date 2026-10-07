'use client';
import {createContext,useCallback,useContext,useEffect,useState,type ReactNode} from 'react';
import {Bookmark,Check} from 'lucide-react';
import {toast} from 'sonner';
export type Saved={kind:'study'|'guide';itemId:string;note:string;savedAt:number;updatedAt:number};
type State={user:{name:string;email:string}|null;items:Saved[];loading:boolean;error:string;refresh:()=>Promise<void>;save:(kind:Saved['kind'],id:string,note?:string,remove?:boolean)=>Promise<void>};
const Context=createContext<State|null>(null);
export function AccountProvider({children}:{children:ReactNode}){const [user,setUser]=useState<State['user']>(null);const [items,setItems]=useState<Saved[]>([]);const [loading,setLoading]=useState(true);const [error,setError]=useState('');
const refresh=useCallback(async()=>{try{const r=await fetch('/api/library',{cache:'no-store'});const d=await r.json() as {error?:string;user:State['user'];items:Saved[]};if(!r.ok)throw new Error(d.error||'Could not load your library.');setUser(d.user);setItems(d.items);setError('');}catch(e){setError(e instanceof Error?e.message:'Could not load your library.');}finally{setLoading(false);}},[]);
useEffect(()=>{void refresh()},[refresh]);
const save=useCallback(async(kind:Saved['kind'],itemId:string,note?:string,remove=false)=>{const r=await fetch('/api/library',{method:remove?'DELETE':'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({kind,itemId,note})});const d=await r.json() as {error?:string};if(!r.ok)throw new Error(d.error||'Could not save.');setItems(prev=>remove?prev.filter(i=>i.kind!==kind||i.itemId!==itemId):prev.some(i=>i.kind===kind&&i.itemId===itemId)?prev.map(i=>i.kind===kind&&i.itemId===itemId?{...i,note:note??i.note,updatedAt:Date.now()}:i):[{kind,itemId,note:note??'',savedAt:Date.now(),updatedAt:Date.now()},...prev]);},[]);
return <Context.Provider value={{user,items,loading,error,refresh,save}}>{children}</Context.Provider>}
export function useAccount(){const c=useContext(Context);if(!c)throw new Error('Missing account provider');return c}
export function SaveButton({kind,id}:{kind:Saved['kind'];id:string}){const {user,items,loading,error,save}=useAccount();const [busy,setBusy]=useState(false);const saved=items.some(i=>i.kind===kind&&i.itemId===id);
async function click(){if(!user){window.location.assign('/login?return_to='+encodeURIComponent(window.location.pathname));return}setBusy(true);try{await save(kind,id,undefined,saved);toast.success(saved?'Removed from your library':'Saved to your library')}catch(e){toast.error(e instanceof Error?e.message:'Could not save.')}finally{setBusy(false)}}
return <button className={'save-button '+(saved?'is-saved':'')} onClick={click} disabled={loading||busy||!!error} aria-label={(saved?'Unsave ':'Save ')+(kind==='study'?'study':'guide')} aria-pressed={saved} title={error||undefined}>{saved?<Check size={16}/>:<Bookmark size={16}/>}<span>{busy?'Saving…':saved?'Saved':'Save'}</span></button>}
export function AccountLink(){const {user}=useAccount();return user?<a className="account-link" href="/library">Account</a>:<a className="account-link" href="/login">Log in</a>}
