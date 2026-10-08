import {Fragment} from 'react';
import {terms,termSlug} from '@/lib/glossary';
const names=terms.map(([term])=>({term,match:term.replace(/\s*\(.+\)/,'')})).filter(x=>x.match.length>2).sort((a,b)=>b.match.length-a.match.length);
const escaped=(s:string)=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
export function LinkedText({text}:{text:string}){const used=new Set<string>();let count=0;const regex=new RegExp('\\b('+names.map(x=>escaped(x.match)).join('|')+')\\b','gi');const parts=[];let last=0;for(const m of text.matchAll(regex)){const found=names.find(x=>x.match.toLowerCase()===m[0].toLowerCase());if(!found||count>=3||used.has(found.term))continue;parts.push(<Fragment key={m.index}>{text.slice(last,m.index)}<a className="inline-term" href={'/glossary/'+termSlug(found.term)}>{m[0]}</a></Fragment>);last=m.index!+m[0].length;used.add(found.term);count++}return <>{parts}{text.slice(last)}</>}
