'use client';

import { useSidebarContext } from '@/hooks/useSideBarContext';
import { cn } from '@/lib/utils';

export const HamburgerMenu = ({ className }: { className?: string }) => {
  const { isOpen, setIsOpen } = useSidebarContext();

  const commonStyles = cn(
    'my-[5px] h-[2px] w-[20px] bg-slate-900 transition-all',
  );

  return (
    <div
      className={cn(className, 'inline-block')}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={cn(
          commonStyles,
          isOpen ? 'translate-y-[7px] -rotate-45 transform' : '',
        )}
      ></div>
      <div className={cn(commonStyles, isOpen ? 'opacity-0' : '')}></div>
      <div
        className={cn(
          commonStyles,
          isOpen ? '-translate-y-[7px] rotate-45 transform' : '',
        )}
      ></div>
    </div>
  );
};
