'use client';

import {useState} from 'react';
import {usePathname} from 'next/navigation';
import {Radio, Bookmark, Menu, Search, ArrowUpRight, ArrowLeft, Smartphone} from 'lucide-react';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription} from '@/components/ui/sheet';
import {SheetTrigger} from '@/components/ui/sheet';
import {AccountLink} from './account';

const primaryLinks = [
  {href:'/sources', label:'Exposures'},
  {href:'/outcomes', label:'Health outcomes'},
  {href:'/questions', label:'Questions'},
  {href:'/research', label:'Research'},
  {href:'/guides', label:'Guides'},
  {href:'/glossary', label:'Glossary'},
  {href:'/search', label:'Search'},
];

export function SiteHeader(){
  const pathname = usePathname();
  function back(){
    const sameSite = document.referrer && new URL(document.referrer).origin===window.location.origin;
    if(sameSite && window.history.length>1)window.history.back();
    else window.location.assign(pathname.split("/").filter(Boolean).length>1 ? pathname.slice(0,pathname.lastIndexOf("/")) : "/");
  }
  const [open, setOpen] = useState(false);
  return <header className="header">
    {pathname!=="/"&&<button className="mobile-back" onClick={back} aria-label="Go back"><ArrowLeft size={21} aria-hidden="true"/></button>}
    <a href="/" className="brand" aria-label="EMF Axis home"><span className="brand-icon"><Radio size={24} aria-hidden="true"/></span>EMF<span className="brand-light">AXIS</span></a>
    <nav className="desktop-navigation" aria-label="Main navigation">{primaryLinks.map(link=><a key={link.href} href={link.href} aria-current={pathname===link.href||pathname.startsWith(link.href+"/")?"page":undefined}>{link.label}</a>)}</nav>
    <AccountLink/>
    <a className="library-nav" href="/library"><Bookmark size={17} aria-hidden="true"/>My library</a>
    <div className="mobile-navigation">
      <a className="mobile-search" href="/search" aria-label="Search EMF Axis"><Search size={21} aria-hidden="true"/></a>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild><button className="mobile-menu-button" aria-label="Menu"><Menu size={21} aria-hidden="true"/><span>Menu</span></button></SheetTrigger>
        <SheetContent className="site-menu">
          <SheetHeader><SheetTitle>Explore EMF Axis</SheetTitle><SheetDescription>Find evidence, follow a question, or return to your library.</SheetDescription></SheetHeader>
          <nav aria-label="Mobile main navigation" onClick={()=>setOpen(false)}>
            {primaryLinks.map(link=><a key={link.href} href={link.href} aria-current={pathname===link.href||pathname.startsWith(link.href+"/")?"page":undefined}>{link.label}<ArrowUpRight size={18} aria-hidden="true"/></a>)}
          </nav>
          <div className="mobile-menu-resources"><a href="/fields">Field categories</a><a href="/resources">Reading resources</a><a href="/methodology">Our research approach</a></div>
          <a className="menu-install-link" href="/app"><Smartphone size={23} aria-hidden="true"/><span><strong>Add to Home Screen</strong><small>Keep the evidence within reach</small></span><ArrowUpRight size={18} aria-hidden="true"/></a>
          <div className="mobile-menu-account"><a className="button" href="/library"><Bookmark size={18} aria-hidden="true"/>My library</a><AccountLink/></div>
        </SheetContent>
      </Sheet>
    </div>
  </header>;
}
