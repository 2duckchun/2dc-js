import React from 'react';

import Image from 'next/image';

import Metaton from '/public/mettaton-ex-undertale.gif';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <Image src={Metaton} width={498} height={493} alt='메타톤' />
      </div>
    </main>
  );
}
