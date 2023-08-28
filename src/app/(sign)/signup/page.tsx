'use client';

import { useState } from 'react';

import CustomButton from '@/components/_common/CustomButton';
import CustomInput from '@/components/_common/CustomInput';
import CustomInputWithButton from '@/components/_common/CustomInputWithButton';
import CustomLink from '@/components/_common/CustomLink';

import styles from './page.module.scss';

export default function SignUp() {
  const [userInput, setUserInput] = useState({
    id: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
    email: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const testHandler = () => {};

  return (
    <section className={styles.signup_section}>
      <div className={styles.signup_container}>
        <h1 className={styles.title}>SIGN UP</h1>
        <CustomInputWithButton
          id='id'
          labelText='아이디'
          type='text'
          name='id'
          isRequired={true}
          buttonText='Check'
          placeholder='아이디를 입력해주세요.'
          value={userInput.id}
          onChangeHandler={handleInput}
        />
        <CustomInputWithButton
          id='nickname'
          labelText='닉네임'
          type='text'
          name='nickname'
          isRequired={true}
          buttonText='Check'
          placeholder='닉네임을 입력해주세요.'
          value={userInput.nickname}
          onChangeHandler={handleInput}
        />
        <CustomInput
          id='password'
          labelText='비밀번호'
          type='password'
          name='password'
          isRequired={true}
          placeholder='비밀번호를 입력해주세요.'
          value={userInput.password}
          onChangeHandler={handleInput}
        />
        <CustomInput
          id='password-confirm'
          labelText='비밀번호 확인'
          type='password'
          name='passwordConfirm'
          isRequired={true}
          placeholder='비밀번호를 한번 더 입력해주세요.'
          value={userInput.passwordConfirm}
          onChangeHandler={handleInput}
        />
        <CustomInputWithButton
          id='email'
          labelText='이메일'
          type='email'
          name='email'
          isRequired={true}
          buttonText='Check'
          placeholder='이메일을 입력해주세요.'
          value={userInput.email}
          onChangeHandler={handleInput}
        />
        <CustomButton propStyle={styles.signup_create_button} onClickHandler={testHandler}>
          계정 생성
        </CustomButton>
        <p className={styles.p_link_signin}>
          계정이 이미 있으신가요?{' '}
          <CustomLink href={{ pathname: '/signin' }}>
            <span>signin</span>
          </CustomLink>
        </p>
      </div>
    </section>
  );
}
