import styles from "./UserAuthContainer.module.scss";

export default function UserAuthContainer() {
  return (
    <div className={styles.nav_user}>
      <button>로그인</button>
      <button>회원가입</button>
    </div>
  );
}
