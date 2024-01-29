'use client';

import { FunctionComponent, HTMLAttributes } from 'react';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { SideNav } from '../SideNav';

interface MainBodyProps extends HTMLAttributes<HTMLDivElement> {}

const MainBody: FunctionComponent<MainBodyProps> = ({
  className,
  children,
  ...props
}) => {
  const pathname = usePathname();

  return (
    <div className='flex-col md:flex'>
      <SideNav pathname={pathname} />
      <div className={cn(pathname === '/' ? '' : 'md:ml-[250px]')}>
        {children}
      </div>
    </div>
  );
};

export { MainBody };
