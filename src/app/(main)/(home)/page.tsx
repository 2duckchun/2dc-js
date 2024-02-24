import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AppPath } from '@/constant/AppPath';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-5 xl:px-24'>
      <h2 className='mb-10 mt-5 text-7xl font-extrabold text-blue-600 shadow-blue-600/50 drop-shadow-md'>
        2DC WORLD
      </h2>
      <div className='flex w-full flex-col gap-[25px]'>
        <JavascriptCurriculumIntro />
        <KnosIntro />
      </div>
    </main>
  );
}

const JavascriptCurriculumIntro = () => {
  return (
    <Link href={AppPath.curriculum()}>
      <div className='flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 p-5 shadow-md transition-all hover:scale-105'>
        <Image
          src={'/images/javascript-640.png'}
          width={160}
          height={160}
          alt='자바스크립트 로고'
          placeholder='blur'
          className='rounded-xl'
          blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII='
        />
        <div className='mt-10 text-center'>
          <h2 className='text-5xl'>빡세게 배우는 자바스크립트</h2>
          <div className='mt-5 text-xl'>
            <p>가장 빨리 가는 방법은 올바르게 가는 것입니다.</p>
            <p className='mt-3'>올바르게 가실 수 있도록</p>
            <p>삽질하며 익힌 JS 지식들을</p>
            <p>커리큘럼에 맞게 공유합니다.</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const KnosIntro = () => {
  return (
    <Link href={AppPath.knos()}>
      <div className='flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 p-5 shadow-md transition-all hover:scale-105'>
        <Image
          src={'/images/knos.svg'}
          width={160}
          height={160}
          alt='방통대 로고'
          placeholder='blur'
          className='rounded-xl'
          blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII='
        />
        <div className='my-10 text-center'>
          <h2 className='text-5xl'>KNOS 컴퓨터과학과 노트정리</h2>
          <div className='mt-5 text-xl'>
            <p>학우분들께 도움이 되었으면 좋겠습니다.</p>
            <p>(공부해서 남주면 여러모로 좋습니다.)</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
