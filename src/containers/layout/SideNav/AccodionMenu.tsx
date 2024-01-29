import { FunctionComponent, HTMLAttributes } from 'react';

import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SideNavInfo } from '@/constant/MenuArray';
import { cn } from '@/lib/utils';
interface AccodionMenuProps extends HTMLAttributes<HTMLDivElement> {
  sideNavInfoArray: SideNavInfo[];
}

const AccodionMenu: FunctionComponent<AccodionMenuProps> = ({
  className,
  sideNavInfoArray,
  ...props
}) => {
  return (
    <div className={cn(className)} {...props}>
      <Accordion type='single' collapsible className='w-full'>
        {sideNavInfoArray.map(data => {
          if (data.type === 'multi') {
            return (
              <AccordionItem key={data.title} value={data.title}>
                <AccordionTrigger className='px-4'>
                  {data.title}
                </AccordionTrigger>
                {data.subNav!.map(subData => {
                  return (
                    <Link key={subData.title} href={subData.path}>
                      <AccordionContent className='pl-5'>
                        {subData.title}
                      </AccordionContent>
                    </Link>
                  );
                })}
              </AccordionItem>
            );
          }
          return (
            <Link key={data.title} href={data.path}>
              <div
                key={data.title}
                className='flex flex-1 items-center justify-between border-b py-4 pl-4 font-medium transition-all hover:underline'
              >
                {data.title}
              </div>
            </Link>
          );
        })}
      </Accordion>
    </div>
  );
};

export { AccodionMenu };
