import { FunctionComponent, HTMLAttributes } from 'react';

import { SideNavInfo } from '@/constant/MenuArray';
import { cn } from '@/lib/utils';

import { AccodionMenu } from './menu/AccodionMenu';

interface DeskTopSideNavProps extends HTMLAttributes<HTMLDivElement> {
  navArray: SideNavInfo[];
}

// URL마다 아코디언 메뉴로 전달하는 네브 메뉴가 달라짐.

const DeskTopSideNav: FunctionComponent<DeskTopSideNavProps> = ({
  className,
  navArray,
  ...props
}) => {
  return (
    <div className={cn('fixed h-full w-[250px] shadow-2xl')} {...props}>
      <AccodionMenu sideNavInfoArray={navArray} />
    </div>
  );
};

export { DeskTopSideNav };
