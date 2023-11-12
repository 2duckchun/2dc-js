'use client';

import { useEffect, useRef, useState } from 'react';

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
      className={`h-height backdrop-saturate-500 sticky top-0 backdrop-blur-xl backdrop-filter transition-shadow duration-300 ${
        navShadow ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <nav className='flex h-full'>
        {/* 로고 */}
        <div className='basis-3/12'>로고</div>
        {/* 네비게이션 */}
        <ul className='flex basis-7/12'>
          <li>curriculum</li>
          <li>repo</li>
        </ul>
        {/* 로그인 기능 확장 */}
        <div className='basis-3/12'>플레이스홀더</div>
      </nav>
    </div>
  );
}
