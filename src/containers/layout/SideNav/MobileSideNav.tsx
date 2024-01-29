'use client';

import { FunctionComponent, HTMLAttributes } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { SideNavInfo, TopNavInfoArray } from '@/constant/MenuArray';
import { cn } from '@/lib/utils';

import { AccodionMenu } from './AccodionMenu';
interface MobileSideNavProps extends HTMLAttributes<HTMLDivElement> {
  navArray: SideNavInfo[];
}

const MobileSideNav: FunctionComponent<MobileSideNavProps> = ({
  className,
  navArray,
  ...props
}) => {
  return (
    <div className={cn(className, 'z-50')} {...props}>
      <ul className='flex h-full items-center justify-evenly bg-slate-100 py-4 md:hidden md:basis-8/12'>
        {TopNavInfoArray.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <Button
                variant={'outline'}
                className={cn('rounded-3xl')}
                size={'sm'}
              >
                <li>{item.title}</li>
              </Button>
            </Link>
          );
        })}
      </ul>
      <AccodionMenu sideNavInfoArray={navArray} />
    </div>
  );
};

export { MobileSideNav };
