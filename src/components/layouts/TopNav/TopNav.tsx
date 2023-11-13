'use client';

import { useEffect, useState } from 'react';

import { HamburgerMenu } from '@/components/icons/HamburgerMenu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function TopNav() {
  const [navShadow, setNavShadow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavShadow(false);
        return;
      }
      setNavShadow(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        'h-header sticky top-0 backdrop-blur-xl transition-shadow duration-300',
        navShadow ? 'shadow-md' : 'shadow-sm',
      )}
    >
      <nav className='md: relative flex h-full items-center justify-between'>
        <div className='flex basis-4/12 justify-center'>
          <HamburgerMenu className='absolute left-3 top-3 md:hidden' />
          <span className='text-3xl font-bold'>2DC</span>
        </div>
        <ul className='hidden md:flex md:basis-8/12 md:justify-evenly'>
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
        <div className='flex basis-2/12 justify-evenly gap-3'>
          <Button className={cn('rounded-xl')} variant={'outline'}>
            Sign In
          </Button>
          <Button className={cn('rounded-xl')}>Sign Up</Button>
        </div>
      </nav>
    </div>
  );
}
