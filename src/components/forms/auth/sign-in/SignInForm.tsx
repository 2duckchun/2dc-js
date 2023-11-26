'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import PasswordInputField from './fields/PasswordInputField';
import UserIdInputField from './fields/UserIdInputField';
import { useSignInFormContext } from './hooks/useSignInFormContext';

export default function SignInForm() {
  const { form, onSubmit } = useSignInFormContext();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(data => {
          console.log(data);
          onSubmit(
            data,
            () => console.log('성공시 콜백'),
            () => console.log('실패시 콜백'),
          );
        })}
        className='space-y-8'
      >
        <UserIdInputField />
        <PasswordInputField />
        <Button
          type='submit'
          onClick={() => {
            console.log(form.formState.isValid);
            console.log(form.getValues('userId'));
            console.log(form.getValues('password'));
          }}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
