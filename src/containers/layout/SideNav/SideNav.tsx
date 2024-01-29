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
interface SideNavProps {
  pathname: string;
}

const SideNav: FunctionComponent<SideNavProps> = ({ pathname }) => {
  const { isOpen } = useSidebarContext();
  const sideNavArray = getSideNavArray(pathname.split('/')[1]);
  return (
    <nav>
      <div
        className={cn(
          pathname === '/' ? 'hidden' : 'hidden md:block md:w-[250px]',
        )}
      >
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

const getSideNavArray = (segment: string) => {
  switch (segment) {
    case 'curriculum':
      return JavaScriptCurriculumNavInfoArray;
    default:
      return MainSideNavInfoArray;
  }
};
