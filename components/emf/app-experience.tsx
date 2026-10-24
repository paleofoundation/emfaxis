'use client';

import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import {Bookmark, Brain, Home, Radio, Search, WifiOff} from 'lucide-react';
import {useAccount} from './account';

const tabs = [
  {href:'/', label:'Home', Icon:Home},
  {href:'/sources', label:'Exposures', Icon:Radio},
  {href:'/outcomes', label:'Outcomes', accessible:'Health outcomes', Icon:Brain},
  {href:'/search', label:'Search', Icon:Search},
  {href:'/library', label:'Saved', accessible:'My saved library', Icon:Bookmark},
];

export function AppExperience(){
  const pathname = usePathname();
  const [offline, setOffline] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const {error,refresh} = useAccount();
  const [retrying,setRetrying] = useState(false);
  async function retry(){setRetrying(true);try{await refresh()}finally{setRetrying(false)}}

  useEffect(()=>{
    function connection(){setOffline(!navigator.onLine)}
    function keyboard(){
      const editing = document.activeElement?.matches('input, textarea, select, [contenteditable="true"]');
      setKeyboardOpen(Boolean(editing && window.visualViewport && window.innerHeight-window.visualViewport.height>120));
    }
    connection();
    window.addEventListener('online',connection);
    window.addEventListener('offline',connection);
    window.visualViewport?.addEventListener('resize',keyboard);
    document.addEventListener('focusin',keyboard);
    document.addEventListener('focusout',keyboard);
    // Cache only the static connection fallback, never research or account responses.
    if(process.env.NODE_ENV==='production' && 'serviceWorker' in navigator){
      void navigator.serviceWorker.register('/sw.js',{scope:'/',updateViaCache:'none'}).catch(()=>{});
    }
    return ()=>{
      window.removeEventListener('online',connection);
      window.removeEventListener('offline',connection);
      window.visualViewport?.removeEventListener('resize',keyboard);
      document.removeEventListener('focusin',keyboard);
      document.removeEventListener('focusout',keyboard);
    };
  },[]);

  return <>
    {offline && <div className="connection-notice" role="status"><WifiOff size={17} aria-hidden="true"/>You’re offline. Reconnect to open pages or save to your library.</div>}
    {!offline&&error&&<div className="connection-notice" role="status"><span>Your saved library couldn’t connect.</span><button onClick={()=>void retry()} disabled={retrying}>{retrying?'Retrying…':'Retry'}</button></div>}
    <nav className="mobile-tabbar" aria-label="App navigation" hidden={keyboardOpen}>
      {tabs.map(({href,label,accessible,Icon})=>{
        const active = href==='/' ? pathname==='/' : pathname===href || pathname.startsWith(href+'/');
        return <a href={href} key={href} aria-label={accessible} aria-current={active?'page':undefined}><span className="tab-icon"><Icon size={22} aria-hidden="true" strokeWidth={active?2.2:1.7}/></span><span>{label}</span></a>;
      })}
    </nav>
  </>;
}
