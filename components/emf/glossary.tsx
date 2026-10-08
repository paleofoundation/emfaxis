'use client';
import {useState} from 'react';
import {Search} from 'lucide-react';
import {terms,termSlug} from '@/lib/glossary';
export function Glossary(){const [q,setQ]=useState('');const results=terms.filter(t=>t.join(' ').toLowerCase().includes(q.toLowerCase()));return <><div className="searchbox"><Search size={20}/><input aria-label="Search glossary" value={q} onChange={e=>setQ(e.target.value)} placeholder="Find a term…"/></div><p className="result-count" aria-live="polite">{results.length} definitions</p><dl className="glossary-list">{results.map(([term,definition])=><div key={term}><dt><a href={'/glossary/'+termSlug(term)}>{term}</a></dt><dd>{definition}</dd></div>)}</dl>{!results.length&&<p>No matching terms. Try a broader phrase.</p>}</>}
