"use client";

import CustomInputWithButton from "@/app/_component/_common/CustomInputWithButton";
import styles from "./page.module.scss";
import CustomInput from "@/app/_component/_common/CustomInput";
import CustomButton from "@/app/_component/_common/CustomButton";
import CustomLink from "@/app/_component/_common/CustomLink";

export default function SignUp() {
  const testHandler = () => {
    console.log("test");
  };

  return (
    <section className={styles.signup_section}>
      <div className={styles.signup_container}>
        <h1 className={styles.title}>SIGN UP</h1>
        <CustomInputWithButton
          id="id"
          labelText="아이디"
          type="text"
          name="id"
          isRequired={true}
          buttonText="Check"
          placeholder="아이디를 입력해주세요."
        />
        <CustomInputWithButton
          id="nickname"
          labelText="닉네임"
          type="text"
          name="nickname"
          isRequired={true}
          buttonText="Check"
          placeholder="닉네임을 입력해주세요."
        />
        <CustomInput
          id="password"
          labelText="비밀번호"
          type="password"
          name="password"
          isRequired={true}
          placeholder="비밀번호를 입력해주세요."
        />
        <CustomInput
          id="password-confirm"
          labelText="비밀번호 확인"
          type="password"
          name="passwordConfirm"
          isRequired={true}
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
        <CustomInputWithButton
          id="email"
          labelText="이메일"
          type="email"
          name="email"
          isRequired={true}
          buttonText="Check"
          placeholder="이메일을 입력해주세요."
        />
        <CustomButton
          propStyle={styles.signup_create_button}
          onClickHandler={testHandler}
        >
          계정 생성
        </CustomButton>
        <p className={styles.p_link_signin}>
          계정이 이미 있으신가요?{" "}
          <CustomLink href={{ pathname: "/signin" }}>
            <span>signin</span>
          </CustomLink>
        </p>
      </div>
    </section>
  );
}
