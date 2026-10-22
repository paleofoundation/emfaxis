import {Glossary} from '@/components/emf/glossary';
export const metadata={description:"Find plain definitions of electromagnetic field measurements, study designs, risk measures, and terms used in evidence reviews.",alternates:{canonical:'https://emfaxis.com/glossary'},title:'Research glossary'};
export default function Page(){return <div className="page"><p className="eyebrow">THE LANGUAGE OF THE EVIDENCE</p><h1>Research glossary</h1><p className="page-intro">Clear definitions for reading EMF research with confidence.</p><Glossary/></div>}
