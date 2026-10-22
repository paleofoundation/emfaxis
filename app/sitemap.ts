import type { MetadataRoute } from 'next';
import { studies } from '@/lib/studies';
import { guides } from '@/lib/guides';
import { questions } from '@/lib/questions';
import { terms, termSlug } from '@/lib/glossary';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/corrections',
    '/disclaimer',
    '/glossary',
    '/guides',
    '/library',
    '/login',
    '/methodology',
    '/privacy',
    '/questions',
    '/research',
    '/resources',
    '/resources/reading-guide',
    '/resources/reading-worksheet',
    '/search',
    '/terms',
    '/resources/emf-reading-worksheet.html',
    '/resources/first-guide.html',
    '/resources/first-guide-preview.html',
    ...studies.map(study => `/research/${study.id}`),
    ...guides.map(guide => `/guides/${guide.id}`),
    ...questions.map(question => `/questions/${question.id.toLowerCase()}`),
    ...terms.map(([term]) => `/glossary/${termSlug(term)}`),
  ];
  return [...new Set(paths)].map(path => ({ url: `https://emfaxis.com${path}` }));
}
