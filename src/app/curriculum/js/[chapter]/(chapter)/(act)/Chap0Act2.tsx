import Image from "next/image";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import styles from "./Act.module.scss";

export default function Chap0Act2() {
  return (
    <div className={styles.act_container}>
      <h2>연산자는 알고가자</h2>
      <p>앞으로 나아가기 전에 연산자에 대해 알아보고 넘어갑시다.</p>
      <p>
        연산자(operator)는 특정 연산을 수행해서 하나의 값으로 만드는 역할을
        수행합니다.
      </p>
      <p>1 + 2에서 1과 2는 피연산자이고 +가 연산자라고 할 수 있겠습니다.</p>
      <p>
        1과 2는 다른 값이고, +라는 연산자가 작동해서 두 값을 하나의 값으로
        만들기 때문입니다.
      </p>
      <h2>산술 연산자</h2>
      <CodeBox
        code={`+ // 덧셈 연산자
- // 뺄셈 연산자
* // 곱셈 연산자
/ // 나눗셈 연산자
% // 나머지 연산자
`}
      />
      <p>어렵지 않으실 겁니다.</p>
      <p>
        위의 산술 연산자들은 2개 이상의 피연산자를 연산하여 새로운 값을
        생성합니다.
      </p>
      <p>여기서 나머지 연산자가 굉장히 생소하실 수 있습니다.</p>
      <CodeBox
        code={`11554 % 500 // ??
11554 / 100 // ??
`}
      />
      <details>
        <summary>정답</summary>
        <CodeBox
          code={`11554 % 500 // 54
11554 / 100 // 115.54
`}
        />
      </details>
      <h2>Reference</h2>
      <p>https://developer.mozilla.org/ko/docs/Glossary/URL</p>
    </div>
  );
}
