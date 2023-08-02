"use client";

import { useRouter } from "next/navigation";
import styles from "./UserAuthContainer.module.scss";

export default function UserAuthContainer() {
  const router = useRouter();
  return (
    <div className={styles.nav_user}>
      <button onClick={() => router.push("/login")}>로그인</button>
      <button>회원가입</button>
    </div>
  );
}
