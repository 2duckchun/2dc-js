import { cookies } from 'next/headers';

export default function useInitTheme() {
  const cookieStore = cookies();
  let theme = cookieStore.get('theme');
  if (!theme) {
    return { name: 'theme', value: 'light' };
  }

  return theme;
}
