import { FunctionComponent, HTMLAttributes } from 'react';

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
        {sideNavInfoArray.map((data, index) => {
          if (data.type === 'multi') {
            return (
              <AccordionItem key={data.title} value={data.title}>
                <AccordionTrigger className='px-4'>
                  {data.title}
                </AccordionTrigger>
                {data.subNav!.map((subData, index) => {
                  return (
                    <AccordionContent className='pl-5' key={subData.title}>
                      {subData.title}
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
            );
          }
          return (
            <div
              key={data.title}
              className='flex flex-1 items-center justify-between py-4 pl-5 font-medium transition-all hover:underline'
            >
              {data.title}
            </div>
          );
        })}
      </Accordion>
    </div>
  );
};

export { AccodionMenu };
