import styles from "./page.module.scss";

export default function SignUp() {
  return (
    <section className={styles.signup_section}>
      <div className={styles.signup_container}>
        <h1 className={styles.title}>SIGN UP</h1>
        <div className={styles.input_container_with_button}>
          <label htmlFor="id">아이디</label>
          <div>
            <input id="id" type="text" required />
            <button>중복체크</button>
          </div>
        </div>
        <div className={styles.input_container_with_button}>
          <label htmlFor="nickname">닉네임</label>
          <div>
            <input id="nickname" type="text" required />
            <button>중복체크</button>
          </div>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="password">비밀번호</label>
          <input id="password" type="password" required />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="password-confirm">비밀번호 확인</label>
          <input id="password-confirm" type="password" required />
        </div>
        <div className={styles.input_container_with_button}>
          <label htmlFor="email">이메일</label>
          <div>
            <input id="email" type="email" required />
            <button>중복체크</button>
          </div>
        </div>
        <div>
          <button className={styles.signup_create_button}>계정생성</button>
        </div>
        <p>계정이 이미 있으신가요? signin</p>
      </div>
    </section>
  );
}
