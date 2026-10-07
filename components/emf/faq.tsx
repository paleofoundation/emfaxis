'use client';
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from '@/components/ui/accordion';
export function FAQ({questions}:{questions:{q:string;a:string}[]}){return <Accordion type="multiple">{questions.map((q,i)=><AccordionItem value={String(i)} key={q.q}><AccordionTrigger className="faq-question">{q.q}</AccordionTrigger><AccordionContent className="faq-answer">{q.a}</AccordionContent></AccordionItem>)}</Accordion>}
