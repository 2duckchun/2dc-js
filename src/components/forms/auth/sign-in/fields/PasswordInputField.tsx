import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useSignInFormContext } from '../hooks/useSignInFormContext';

export default function PasswordInputField() {
  const { form } = useSignInFormContext();

  return (
    <FormField
      control={form.control}
      name='password'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input placeholder='패스워드 입력' {...field} />
          </FormControl>
          <FormDescription>This is your private password.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
