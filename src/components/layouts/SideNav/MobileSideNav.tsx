'use client';

import { FunctionComponent, HTMLAttributes } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { SideNavInfo, TopNavInfoArray } from '@/constant/MenuArray';
import { cn } from '@/lib/utils';

import { AccodionMenu } from './menu/AccodionMenu';
interface MobileSideNavProps extends HTMLAttributes<HTMLDivElement> {
  navArray: SideNavInfo[];
}

// URL마다 아코디언 메뉴로 전달하는 네브 메뉴가 달라짐.

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
