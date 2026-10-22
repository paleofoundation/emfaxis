import type { Metadata } from 'next';
import { Radio, Bookmark, ArrowUpRight, Zap } from 'lucide-react';
import './globals.css';
import {AccountProvider,AccountLink} from '@/components/emf/account';
import {Toaster} from '@/components/ui/sonner';
import {AuthorIdentity} from '@/components/emf/orcid-link';
export const metadata:Metadata={title:{default:'EMF Axis: Electromagnetic Field Evidence',template:'%s · EMF Axis'},metadataBase:new URL('https://emfaxis.com'),robots:{index:true,follow:true},description:'Evidence reviews of electromagnetic fields, with study summaries, topic guides, source references, and explanations of findings and limitations.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><AccountProvider><a className="skip" href="#main">Skip to content</a><header className="header"><a href="/" className="brand"><span className="brand-icon"><Radio size={24}/></span>EMF<span className="brand-light">AXIS</span></a><nav aria-label="Main navigation"><a href="/questions">Questions</a><a href="/research">Research</a><a href="/guides">Guides</a><a href="/glossary">Glossary</a><a href="/search">Search</a></nav><AccountLink/><a className="library-nav" href="/library" aria-label="My library" title="My library"><Bookmark size={17}/>My library</a></header><main id="main">{children}</main><footer className="site-footer">
<div className="footer-inner">
<div className="footer-top"><div className="footer-statement"><p className="eyebrow"><Zap size={16} aria-hidden="true"/> STAY CURIOUS. FOLLOW THE EVIDENCE.</p><h2>A clearer view<br/>of an invisible world.</h2><p>Good questions deserve traceable answers. Explore the research, understand its limits, and keep what matters.</p><a className="footer-cta" href="/research">Explore the research <ArrowUpRight size={19}/></a></div>
<nav className="footer-nav" aria-label="Footer navigation">
<div><h3>The library</h3><a href="/research">Studies &amp; findings</a><a href="/guides">Topic guides</a><a href="/glossary">EMF glossary</a><a href="/library">My saved research</a><a href="/questions">Community questions</a><a href="/resources">Reading resources</a></div>
<div><h3>Start exploring</h3><a href="/guides/basics">EMF fundamentals</a><a href="/guides/wireless">Wireless &amp; phones</a><a href="/guides/power-lines">Power lines</a><a href="/guides/measurement">Measuring exposure</a></div>
<div><h3>Behind the research</h3><a href="/methodology">Our research approach</a><a href="/methodology#investigator">Primary investigator</a><a href="/privacy">Privacy &amp; your library</a><a href="/corrections">Contact &amp; corrections</a><a href="/terms">Terms of use</a><a href="/disclaimer">Research disclaimer</a></div>
</nav></div>
<div className="footer-investigator"><span>PRIMARY INVESTIGATOR <AuthorIdentity profileHref="/methodology#investigator"/></span><span>First edition · AI-assisted drafts · Investigator review pending</span></div>
<a className="footer-wordmark" href="/" aria-label="EMF Axis home">EMF<span>AXIS</span><Radio aria-hidden="true"/></a>
<div className="footer-bottom"><span>© 2026 EMF Axis</span><p>Research education. Not personal medical advice.</p><a href="#main">Back to top ↑</a></div>
</div></footer><Toaster/></AccountProvider></body></html>}
