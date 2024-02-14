'use client';

import { FunctionComponent } from 'react';

import { ClimbingBoxLoader } from 'react-spinners';
import { useLocalStorage } from 'usehooks-ts';

import { CALLBACK_URL } from '@/constant/utils';
interface pageProps {
  params: { type: string };
  searchParams: {
    code: string;
  };
}

// searchParams로 code를 받아옴
// 받아온 코드로 nest 서버에 인증을 요청
// 인증하는 중에는 로딩화면을 띄워줌
// 인증이 성공하면? 이전에 있던 페이지로 돌아감
// 인증이 실패하면? 에러를 띄워 에러 페이지로 보냄

const Page: FunctionComponent<pageProps> = ({
  params: { type },
  searchParams: { code },
}) => {
  const [callback] = useLocalStorage(CALLBACK_URL, '');

  return (
    <main className='flex h-[100vh] w-[100vw] flex-col items-center justify-center'>
      <ClimbingBoxLoader size={20} loading={true} speedMultiplier={2} />
      <p className='p-5 text-lg font-bold'>로그인 중 입니다!</p>
    </main>
  );
};

export default Page;
