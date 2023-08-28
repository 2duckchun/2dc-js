import React from 'react';

import styles from './CustomInput.module.scss';

type PropsType = {
  id: string;
  labelText: string;
  type: string;
  name: string;
  placeholder: string;
  isRequired: boolean;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CustomInput({
  id,
  labelText,
  type,
  name,
  placeholder,
  isRequired,
  value,
  onChangeHandler,
}: PropsType) {
  return (
    <div className={styles.input_container}>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        name={name}
        required={isRequired}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
}
