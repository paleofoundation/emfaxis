import {rolloutPages,recoveredSources} from '@/lib/rollout';
import type { MetadataRoute } from 'next';
import {sources,outcomes} from '@/lib/evidence';
import { studies } from '@/lib/studies';
import { guides } from '@/lib/guides';
import { questions } from '@/lib/questions';
import { terms, termSlug } from '@/lib/glossary';

export default function sitemap(): MetadataRoute.Sitemap {
  // Only indexable public pages; exclude search, corrections, and account routes.
  const paths = [
    '/', '/sources', '/outcomes', '/fields',
    ...rolloutPages.map(p=>'/'+p.kind+'s/'+p.id),
    ...recoveredSources.map(s=>'/research/'+s.id),
    ...['radiofrequency','elf','intermediate-frequency','static'].map(id=>'/fields/'+id),
    ...sources.map(t=>'/sources/'+t.id),
    ...outcomes.map(t=>'/outcomes/'+t.id),
    '/disclaimer',
    '/glossary',
    '/guides',
    '/methodology',
    '/privacy',
    '/questions',
    '/research',
    '/resources',
    '/resources/reading-guide',
    '/resources/reading-worksheet',
    '/terms',
    '/resources/emf-reading-worksheet',
    '/resources/first-guide',
    '/resources/first-guide-preview',
    ...studies.map(study => `/research/${study.id}`),
    ...guides.map(guide => `/guides/${guide.id}`),
    ...questions.map(question => `/questions/${question.id.toLowerCase()}`),
    ...terms.map(([term]) => `/glossary/${termSlug(term)}`),
  ];
  return [...new Set(paths)].map(path => ({ url: `https://emfaxis.com${path}` }));
}
