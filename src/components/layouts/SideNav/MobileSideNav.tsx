'use client';

import { FunctionComponent, HTMLAttributes } from 'react';

import { Button } from '@/components/ui/button';
import { useSidebarContext } from '@/hooks/useSideBarContext';
import { cn } from '@/lib/utils';

import { AccodionMenu } from './menu/AccodionMenu';
interface MobileSideNavProps extends HTMLAttributes<HTMLDivElement> {}

// URL마다 아코디언 메뉴로 전달하는 네브 메뉴가 달라짐.

const MobileSideNav: FunctionComponent<MobileSideNavProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn(className, 'z-50')} {...props}>
      <ul className='flex h-full items-center justify-evenly md:hidden md:basis-8/12'>
        <Button variant={'outline'} className={cn('rounded-3xl')} size={'sm'}>
          <li>CURRICULUM</li>
        </Button>
        <Button variant={'outline'} className={cn('rounded-3xl')} size={'sm'}>
          <li>POST</li>
        </Button>
        <Button variant={'outline'} className={cn('rounded-3xl')} size={'sm'}>
          <li>Repo</li>
        </Button>
      </ul>
      <AccodionMenu />
    </div>
  );
};

export { MobileSideNav };
