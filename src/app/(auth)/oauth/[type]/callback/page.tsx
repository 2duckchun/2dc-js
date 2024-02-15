'use client';

import { FunctionComponent, useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { ClimbingBoxLoader } from 'react-spinners';
import { useLocalStorage } from 'usehooks-ts';

import { AppClientApiEndPoint } from '@/config/AppClientApiEndPoint';
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

const loginWithOAuth = async (code: string) => {
  const response = await fetch(
    AppClientApiEndPoint.postGitHubAuthenticationCode(),
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ authCode: code }),
    },
  );

  if (!response.ok) {
    throw new Error('Failed to authenticate with GitHub');
  }

  const result = await response.json();
  return result;
};

const Page: FunctionComponent<pageProps> = ({
  params: { type },
  searchParams: { code },
}) => {
  const [callback] = useLocalStorage(CALLBACK_URL, '');
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['login', type, code],
    queryFn: async () => await loginWithOAuth(code),
  });
  return (
    <main className='flex h-[100vh] w-[100vw] flex-col items-center justify-center'>
      {isPending && (
        <>
          <ClimbingBoxLoader size={20} loading={true} speedMultiplier={2} />
          <p className='p-5 text-lg font-bold'>로그인 중 입니다!</p>
        </>
      )}
      <p>{isSuccess && data.accessToken}</p>
      <p>{isSuccess && data.refreshToken}</p>
      <p>{isSuccess && callback}</p>
      <p>{isError && '응에러야'}</p>
    </main>
  );
};

export default Page;
