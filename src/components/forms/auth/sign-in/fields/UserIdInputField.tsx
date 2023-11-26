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

export default function UserIdInputField() {
  const { form } = useSignInFormContext();

  return (
    <FormField
      control={form.control}
      name='userId'
      render={({ field }) => (
        <FormItem>
          <FormLabel>UserId</FormLabel>
          <FormControl>
            <Input placeholder='아이디 입력' {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
