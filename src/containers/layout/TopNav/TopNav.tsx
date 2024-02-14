'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocalStorage } from 'usehooks-ts';

import { HamburgerMenu } from '@/components/icons/HamburgerMenu';
import { Button } from '@/components/ui/button';
import { AppPath } from '@/constant/AppPath';
import { TopNavInfoArray } from '@/constant/MenuArray';
import { CALLBACK_URL } from '@/constant/utils';
import { cn } from '@/lib/utils';

export default function TopNav() {
  const [navShadow, setNavShadow] = useState<boolean>(false);
  const router = useRouter();
  const [callback, setCallback] = useLocalStorage(CALLBACK_URL, '');

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
      <nav className='flex h-full items-center justify-between md:relative'>
        <div className='flex basis-4/12 justify-center'>
          <HamburgerMenu className='absolute left-3 top-3 md:hidden' />
          <Link href={AppPath.home()}>
            <span className='text-3xl font-bold'>2DC</span>
          </Link>
        </div>
        <ul className='hidden md:flex md:basis-8/12 md:justify-evenly'>
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
        <div className='flex basis-2/12 justify-evenly gap-3'>
          <Button
            className={cn('rounded-xl')}
            variant={'outline'}
            onClick={() => {
              setCallback(`${window.location.href}`);
              router.push(
                `https://github.com/login/oauth/authorize?client_id=ea50e2bae4a16942de47`,
              );
            }}
          >
            Sign In
          </Button>
        </div>
      </nav>
    </div>
  );
}
