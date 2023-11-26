'use client';

import { FunctionComponent } from 'react';

import { usePathname } from 'next/navigation';

import {
  JavaScriptCurriculumNavInfoArray,
  MainSideNavInfoArray,
} from '@/constant/MenuArray';
import { useSidebarContext } from '@/hooks/useSideBarContext';
import { cn } from '@/lib/utils';

import { DeskTopSideNav } from './DeskTopSideNav';
import { MobileSideNav } from './MobileSideNav';
interface SideNavProps {}

const SideNav: FunctionComponent<SideNavProps> = ({}) => {
  const { isOpen } = useSidebarContext();
  const pathname = usePathname();

  let sideNavArray = MainSideNavInfoArray;

  if (pathname.split('/')[2] === 'javascript') {
    sideNavArray = JavaScriptCurriculumNavInfoArray;
  }

  return (
    <nav>
      <div className='hidden md:block md:w-[250px]'>
        <DeskTopSideNav navArray={sideNavArray} />
      </div>
      <div
        className={cn(
          'top-50 fixed left-0 isolate z-50 mb-5 h-auto w-full bg-white shadow-md transition-all duration-300 md:hidden',
          isOpen ? '' : 'hidden',
        )}
      >
        <MobileSideNav navArray={sideNavArray} className={'h-full'} />
      </div>
    </nav>
  );
};

export default SideNav;
