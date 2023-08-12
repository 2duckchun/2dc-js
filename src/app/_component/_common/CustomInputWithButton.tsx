import styles from "./CustomInputWithButton.module.scss";

type PropsType = {
  id: string;
  labelText: string;
  type: string;
  name: string;
  buttonText: string;
  placeholder: string;
  isRequired: boolean;
};

export default function CustomInputWithButton({
  id,
  labelText,
  type,
  name,
  buttonText,
  placeholder,
  isRequired,
}: PropsType) {
  return (
    <div className={styles.input_container_with_button}>
      <label htmlFor={id}>{labelText}</label>
      <div>
        <input
          id={id}
          type={type}
          name={name}
          required={isRequired}
          placeholder={placeholder}
        />
        <button>{buttonText}</button>
      </div>
    </div>
  );
}
