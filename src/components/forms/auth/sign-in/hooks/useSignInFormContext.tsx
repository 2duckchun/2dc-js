'use client';

import { createContext, useContext } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  userId: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const useSignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      userId: '',
      password: '',
    },
  });

  const onSubmit = (
    data: z.infer<typeof formSchema>,
    onSuccess: () => void,
    onError: () => void,
  ) => {
    // 로그인 성공시 onSuccess 콜백 호출
    // 기타 에러시 onError 콜백 호출
  };

  return {
    form,
    onSubmit,
  };
};

const SignInFormContext = createContext<ReturnType<
  typeof useSignInForm
> | null>(null);

export const useSignInFormContext = () => {
  const context = useContext(SignInFormContext);
  if (!context) {
    throw new Error('useSignInFormContext가 생성되지 않았습니다.');
  }

  return context;
};

export const SignInFormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { form, onSubmit } = useSignInForm();

  return (
    <SignInFormContext.Provider
      value={{
        form,
        onSubmit,
      }}
    >
      {children}
    </SignInFormContext.Provider>
  );
};
