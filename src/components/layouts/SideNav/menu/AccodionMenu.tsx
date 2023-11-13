import { FunctionComponent, HTMLAttributes } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
interface AccodionMenuProps extends HTMLAttributes<HTMLDivElement> {}

const AccodionMenu: FunctionComponent<AccodionMenuProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn(className)} {...props}>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='px-4'>Curriculum</AccordionTrigger>
          <AccordionContent className='pl-5'>JavaScript</AccordionContent>
          <AccordionContent className='pl-5'>Network</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='px-4'>POST</AccordionTrigger>
          <AccordionContent className='pl-5'>
            Development Diary
          </AccordionContent>
          <AccordionContent className='pl-5'>Just Write</AccordionContent>
          <AccordionContent className='pl-5'>Book Report</AccordionContent>
          <AccordionContent className='pl-5'>Plant</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger className='px-4'>MY...</AccordionTrigger>
          <AccordionContent className='pl-5'>GitHub</AccordionContent>
          <AccordionContent className='pl-5'>Reference</AccordionContent>
        </AccordionItem>
        <div className='flex flex-1 items-center justify-between py-4 pl-5 font-medium transition-all hover:underline'>
          About Me
        </div>
      </Accordion>
    </div>
  );
};

export { AccodionMenu };
