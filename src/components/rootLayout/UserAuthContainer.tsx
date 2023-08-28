'use client';

import { useRouter } from 'next/navigation';

import styles from './UserAuthContainer.module.scss';

export default function UserAuthContainer() {
  const router = useRouter();
  return (
    <div className={styles.nav_user}>
      <button onClick={() => router.push('/signin')}>SIGN IN</button>
      <button onClick={() => router.push('/signup')}>SIGN UP</button>
    </div>
  );
}
