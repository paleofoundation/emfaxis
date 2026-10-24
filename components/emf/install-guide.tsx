'use client';

import {useEffect, useState} from 'react';
import {Check, PlusSquare, Share, Smartphone} from 'lucide-react';

type InstallPrompt = Event & {prompt:()=>Promise<{outcome:'accepted'|'dismissed'}>};

export function InstallGuide(){
  const [installed,setInstalled] = useState(false);
  const [installError,setInstallError] = useState(false);
  const [prompt,setPrompt] = useState<InstallPrompt|null>(null);
  useEffect(()=>{
    const mode=window.matchMedia('(display-mode: standalone)');
    const check=()=>setInstalled(mode.matches || Boolean((navigator as Navigator&{standalone?:boolean}).standalone));
    const available=(event:Event)=>{event.preventDefault();setPrompt(event as InstallPrompt)};
    const done=()=>{setInstalled(true);setPrompt(null)};
    check();
    mode.addEventListener('change',check);
    window.addEventListener('beforeinstallprompt',available);
    window.addEventListener('appinstalled',done);
    return ()=>{mode.removeEventListener('change',check);window.removeEventListener('beforeinstallprompt',available);window.removeEventListener('appinstalled',done)};
  },[]);
  async function install(){
    if(!prompt)return;
    try{setInstallError(false);const result=await prompt.prompt();if(result.outcome==='accepted')setInstalled(true)}catch{setInstallError(true)}finally{setPrompt(null)}
  }
  return <div className="install-guide">
    <div className="install-heading"><img src="/icons/app-192.png" width={80} height={80} alt="EMF Axis app icon"/><div><p className="eyebrow">YOUR POCKET RESEARCH LIBRARY</p><h1>EMF Axis, on your Home Screen.</h1></div></div>
    <p className="page-intro">Open the evidence with a tap. Search, explore, and return to your saved research in a dedicated app window.</p>
    {installed?<div className="installed-message" role="status"><Check size={22} aria-hidden="true"/><div><strong>You’re ready to go.</strong><p>Keep exploring, or open EMF Axis from its app icon.</p><a className="button" href="/">Start exploring</a></div></div>:<>
      {prompt&&<button className="button install-button" onClick={()=>void install()}><Smartphone size={20} aria-hidden="true"/>Install EMF Axis</button>}
      {installError&&<p role="status">Use your browser’s menu to install the app, or follow the steps below.</p>}
      <section className="install-instructions"><h2>On iPhone or iPad</h2><p>Open <strong>emfaxis.com</strong> in Safari, then:</p><ol>
        <li><span className="install-step">1</span><div><h3><Share size={20} aria-hidden="true"/>Open the Share menu</h3><p>Tap Share in Safari. Depending on your layout, it may be inside the More menu.</p></div></li>
        <li><span className="install-step">2</span><div><h3><PlusSquare size={20} aria-hidden="true"/>Add to Home Screen</h3><p>Scroll through the sharing actions and choose “Add to Home Screen”.</p></div></li>
        <li><span className="install-step">3</span><div><h3><Smartphone size={20} aria-hidden="true"/>Open as an app</h3><p>If “Open as Web App” appears, leave it on. Tap Add, then open the EMF Axis icon on your Home Screen.</p></div></li>
      </ol></section>
      <p className="install-other">On other devices, look for Install app in your browser’s menu.</p>
    </>}
    <div className="install-details"><h2>Your library travels with you.</h2><p>Sign in to access your saved items and private notes. You may need to sign in again when first opening the Home Screen app.</p><p>An internet connection is needed to open research and sync your library. This version does not download articles for offline reading.</p><a className="text-link" href="/library">Open my library →</a></div>
  </div>;
}
