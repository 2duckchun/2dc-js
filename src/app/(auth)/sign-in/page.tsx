import { SignInFormContextProvider } from '@/components/forms/auth/sign-in/hooks/useSignInFormContext';
import SignInForm from '@/components/forms/auth/sign-in/SignInForm';

export default function Page() {
  return (
    <SignInFormContextProvider>
      <main className='flex min-h-[100vh] items-center justify-center bg-slate-300'>
        <section className='w-[500px]'>
          <SignInForm />
        </section>
      </main>
    </SignInFormContextProvider>
  );
}
