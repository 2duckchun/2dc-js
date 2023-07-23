import styles from "@/styles/Chapter.module.scss";
import weakType from "#/chap0/weaktype.png";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import CustomImageWithCaption from "@/app/_component/_common/CustomImageWithCaption";
import ActNavigator from "@/app/_component/_curriculum/ActNavigator";
import { chaptersInfo } from "../../JS_CHAPTER_INFO";

const lessonCode = {
  assignment: `const $body = document.querySelector('body')`,
  operatorOperand: `const num = 1 + 2`,
  arithmetic: `1 + 2`,
  adding1Function: `function adding1(n) {
    return n + 1
}

const b = adding1(5 + 5)
// b는 뭘까요?`,
  otherArithmetic: `// 덧셈뺄셈
1 + 1 // 2
5 - 1 // 4

// 곱셈
3 * 3 // 9

// 나눗셈
3 / 3 // 1
3 / 5 // 0.6

// 나머지연산
3 % 5 // 3
14 % 5 // 4`,
  moduloQuestion: `1500 % 500 // 뭘까요?
1223 % 20 // 뭘까요?
70 % 6 // 뭘까요?
`,
  moduloAnswer: `1500 % 500 // 0
1223 % 20 // 3
70 % 6 // 4
`,
  unaryIncreaseDecrease: `let a = 5
a++ // a === 6
a-- // a === 5
--a // a === 4
a++ // a === 5
a++ // a === 6`,
  unaryPlusQuestion: `let a = 10
+a
a // a는 뭐가 되었을까요?

const b = '라피스' + '라줄리' // b는 뭘까요??
+b // 무슨 값이 나올까요?
b // b는 뭘까요?`,
  unaryPlusAnswer: `let a = 10
+a
a // a는 그대로 10입니다. (+, - 단항 연산자는 부수 효과가 없습니다!)

const b = '라피스' + '라줄리' // 문자열은 "+ 이항 연산자"로 더할 수 있습니다.
// 따라서 b는 "라피스라줄리"가 됩니다.
+b // "+ 단항 연산자"는 값을 숫자로 바꿉니다. 문자열은 숫자가 아니므로 NaN이 출력됩니다.(Not A number)
b // 부수효과는 없으므로 b는 여전히 '라피스라줄리' 입니다.`,
  unaryPlusMinus: `-10 // -10
-(-10) // 10
+5 // 5
+(-5) // -5
-(-(-10)) // -10
+(-(-(-10))) // -10`,
  unaryMinusQuestion: `let a = 10
-a
a // a는 뭐가 되었을까요?

const b = '라피스' + '라줄리'
-b // 무슨 값이 나올까요?
b // b는 뭘까요?`,
  unaryMinusAnswer: `let a = 10
-a // -10이 계산됩니다. a에 할당되지는 않습니다.
a // a는 그대로 10입니다. (+, - 단항 연산자는 부수 효과가 없습니다!)

const b = '라피스' + '라줄리'
-b // 문자열은 숫자가 아니므로 NaN이 출력됩니다.(Not A number)
b // 부수효과는 없으므로 b는 여전히 '라피스라줄리' 입니다.`,
  relationalOperator: `9 > 0 // 크다? true
9 < 0 // 작다? false 
9 > 9 // 크다? false

9 >= 9 // 크거나 같다? true
9 <= 6 // 작거나 같다? false`,
  equalityOperator: `10 == '10' // true, 숫자 10과 문자열 '10'는 동등하다.
10 === '10' // false, 숫자 10과 문자열 '10'은 일치하지 않는다.`,
  equalityOperatorSet: `10 != '10' // false, 숫자 10과 문자열 '10'는 동등하므로.
8 != '9' // true, 숫자 8과 문자열 '9'은 동등하지 않으므로.
100 !== '100' // true, 숫자 100과 문자열 '100'은 일치하지 않으므로.`,
  logicOperator: `true || true // true
true || false // true (하나가 참이므로)
false || true // true
false || false // false

true && true // true
true && false // false
false && true // false
false && false // false`,
  nonOperator: `!true // false
!0 // true
!"" // true
!"0" // false`,
  typeofOperator: `typeof 123 // 'number'
typeof function(){} // 'function'`,
};

export default function LessonPage() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum="js"
        highlightActNum={2}
        chapterInfo={chaptersInfo.chapter0}
      ></ActNavigator>

      <h1>연산자(Operator)</h1>
      <p>
        본격적인 여행을 떠나기 전에 필수적으로 알아야할 연산자라는 개념에 대해
        짚고 넘어갑시다.
      </p>
      <p>연산자는 무엇이고, 우리가 어떻게 연산자를 활용하고 있었을까요?</p>
      <p>우리는 Act1에서 무의식적으로 연산자를 계속 사용하고 있었습니다.</p>
      <h2>기본적인 할당 연산자</h2>
      <CodeBox code={lessonCode.assignment} />
      <p>Act1에서 활용했었던 코드입니다. </p>
      <p>어떤게 기본적인 할당 연산자일까요?</p>
      <p>
        이퀄 기호인 <code className={styles.code_tag}>=</code> 이 할당
        연산자(assignment operator)로 사용되고 있었습니다.
      </p>
      <p>
        할당 연산자는 우측의 값을 좌측의 변수에 그대로 할당하는 역할을 합니다.
      </p>
      <p>
        +=, -=, /= 같이 생긴 할당 연산자도 존재하지만 당장에 쓸 일이 없으니
        패스하겠습니다.
      </p>
      <h2>연산자와 피연산자</h2>
      <p>연산자는 어떤 값을 계산하는 기호입니다.</p>
      <p>피연산자는 계산을 당하는 값입니다.</p>
      <CodeBox code={lessonCode.operatorOperand} />
      <ul>
        <li>
          <code className={styles.code_tag}>+</code> : 연산자(operator)
        </li>
        <li>
          <code className={styles.code_tag}>1, 2</code> : 피연산자(operand)
        </li>
      </ul>
      <h2>이항 산술 연산자</h2>
      <p>
        이항 산술 연산자(Binary arithmetic operators)는 초등학교때 배우는 덧셈,
        뺄셈, 나눗셈, 곱셈과 같은 산술 연산을 하는 기호입니다.
      </p>
      <p>두개의 값을 계산하여 하나의 값으로 만드는 역할을 하지요.</p>
      <CodeBox code={lessonCode.arithmetic} />
      <p>1 + 2의 계산값은 3입니다.</p>
      <p>
        할당 연산자가 없으므로 이 값이 어떤 변수에 할당되지는 않습니다. 할당되지
        않았을 경우, 메모리에 값이 저장되지 않으므로 값을 필요할때마다 불러서
        사용할 수 없습니다.
      </p>
      <p>
        하지만 아래와 같은 경우, 값을 다른 변수에 할당하지 않고도 활용이
        가능합니다.
      </p>
      <CodeBox code={lessonCode.adding1Function} />
      <p>
        함수의 개념을 아직은 배우지 않았지만 연습하는 차원에서 함수를
        사용해보겠습니다.
      </p>
      <p>
        두 개의 값이 하나의 값으로 계산되어 함수에 전달되므로, 함수의 n에는 10이
        할당된 것과 같습니다.
      </p>
      <p>따라서 b는 11이 됩니다.</p>
      <h3>단항 산술 연산자의 종류</h3>
      <CodeBox code={lessonCode.otherArithmetic} />
      <p>산술 연산자는 어려운 개념이 아니므로 설명을 여기서 줄이려고 합니다.</p>
      <p>다만, 나머지 연산자는 처음 보는 개념이실 수 있는데요.</p>
      <p>
        나머지 연산자는 <b>모듈러 연산</b>이라고도 합니다. 정수론에서의 중요한
        개념 중 하나입니다.
      </p>
      <p>
        (컴퓨터는 메모리 내 신호를 0과 1로 판단하므로, 연속되지 않는 수를 다루는
        정수론과 이산수학이 중요하게 다뤄진다고 합니다.)
      </p>
      <p>A mod B = C은 B로 A를 나눈 나머지가 C와 같다는 뜻 입니다.</p>
      <p>이것을 A % B 로 표현한 것입니다.</p>
      <h3>모듈러 연산</h3>
      <CodeBox code={lessonCode.moduloQuestion} />
      <details>
        <summary>정답!</summary>
        <CodeBox code={lessonCode.moduloAnswer} />
      </details>
      <h2>단항 산술 연산자</h2>
      <p>
        단항 산술 연산자는 1개의 피연산자를 산술하여 숫자 값을 만드는
        연산자입니다.
      </p>
      <h3>단항 증감 연산자</h3>
      <p>
        ++, -- 증감 연산자에는 피연산자의 값을 증가 또는 감소시키고 값을
        변경하는 부수 효과(side Effect)가 있습니다.
      </p>
      <p>아래의 코드를 구글 크롬 콘솔에 한번 쳐보세요!</p>
      <CodeBox code={lessonCode.unaryIncreaseDecrease} />
      <p>
        최종적인 a의 값은 같지만, console에 즉시 나오는 a의 값은 뒤죽박죽일
        것입니다.
      </p>
      <p>
        증감 연산자가 변수의 앞에 있느냐 (prefix냐 postfix냐)에 따라 값의 실행
        순서가 바뀌게되어 그런 현상이 나타납니다. 코드를 깔끔하게 작성할 때 알고
        사용하면 좋습니다.
      </p>
      <p>
        당장 알 필요까지는 없을 것 같지만, 원리에 대해 궁금하면 mdn 문서에서
        찾아보도록 합시다! ++, --의 prefix, postfix 부분을 찾아보시면 됩니다!
      </p>
      <h3>단항 기호 연산자</h3>
      <p>
        단항 기호(+, -) 연산자는 피연산자를 숫자로 변환하는 기능을 가지고
        있습니다. 부수효과는 없습니다.
      </p>
      <p>
        &quot;+ 단항 연산자&quot; 는 피연산자를 숫자로 변환하는 기능외에 별다른
        기능을 가지고 있지 않습니다.
      </p>
      <CodeBox code={lessonCode.unaryPlusQuestion} />
      <details>
        <summary>정답!</summary>
        <CodeBox code={lessonCode.unaryPlusAnswer} />
      </details>
      <p>
        &quot;- 단항 연산자&quot; 는 피연산자를 숫자로 변환하면서 숫자의 부호를
        바꾸는 기능을 합니다.
      </p>
      <CodeBox code={lessonCode.unaryMinusQuestion} />
      <details>
        <summary>정답!</summary>
        <CodeBox code={lessonCode.unaryMinusAnswer} />
      </details>
      <CodeBox code={lessonCode.unaryPlusMinus} />
      <p>수학 기호와 거의 동일하다고 보시면 됩니다.</p>
      <h2>비교 연산자</h2>
      <p>
        비교 연산자를 이용하면 두 값의 대소를 판단하거나, 두 값이 동일한지 등을
        비교해서 <b>논리값(true, false)으로 표시할 수 있습니다</b>.
      </p>
      <h3>대소 관계 비교</h3>
      <p>대소를 판별하는 연산자입니다.</p>
      <p>크다, 작다, 크거나 같다, 작거나 같다를 판별할 수 있습니다.</p>
      <CodeBox code={lessonCode.relationalOperator} />
      <h3>동등 일치 비교</h3>
      <p>동등하거나 일치하거나를 비교할 수 있습니다.</p>
      <p>
        동등하다와 일치하다가 같은 뜻으로 보이실 수 있습니다. 비슷하긴 하지만
        다른 개념입니다. 코드를 통해 살펴보겠습니다.
      </p>
      <CodeBox code={lessonCode.equalityOperator} />
      <p>이러한 현상은 왜 벌어지는 걸까요?</p>
      <p>자바스크립트가 약타입 언어라서 이런 일이 벌어집니다.</p>
      <p>
        약타입 언어는 다른 타입형태끼리 비교가 가능하며, 암묵적으로
        변환해주기까지 합니다.
      </p>
      <CustomImageWithCaption
        imageSrc={weakType}
        width={355}
        height={461}
        caption={"이해하려 하지 않으셔도 됩니다."}
        alt={"자바스크립트는 약타입 언어이다."}
      />
      <p>약타입이라는 이유 때문에 동등 비교와 일치 비교가 나뉘게 됩니다.</p>
      <p>
        동등 비교에서는 동등한지 아닌지 판별하기 위해서 강제적으로 형 변환을 한
        뒤에 일치 여부를 비교합니다.
      </p>
      <p>
        이는 프로그래밍에서 상당히 난잡한 상황을 만들 수 있으므로 대부분의
        상황에서는 일치 비교를 쓰시는 편이 낫습니다.
      </p>
      <h3>부동등 불일치 비교</h3>
      <CodeBox code={lessonCode.equalityOperatorSet} />
      <p>부동등이냐, 부일치냐로도 판별할 수 있습니다.</p>
      <p>각각 동등, 일치 연산자의 반대 개념이라고 생각하시면 됩니다.</p>
      <h2>논리 연산자</h2>
      <p>
        논리 연산자는 논리 연산 기호를 이용해서 좌항과 우항의 논리값을
        판단합니다. (따라서 true, false만 반환합니다.)
      </p>
      <p>
        뭔가를 논증할때 사용하는 <b>또는(OR)</b>, <b>그리고(AND)</b>와
        동일합니다.
      </p>
      <p>OR은 비교 대상이 하나만 참(true)이어도 전체가 참(true)입니다.</p>
      <p>
        AND는 비교 대상 중 하나만 거짓(false)이어도 전체가 거짓(false)입니다.
      </p>
      <p>
        자바스크립트에서 OR은 논리합(||)이라고 하며, AND는 논리곱(&&)이라고
        합니다.
      </p>
      <p>코드를 통해 살펴보겠습니다.</p>
      <CodeBox code={lessonCode.logicOperator} />
      <p>
        (논리값은 <b>불리언(boolean)</b> 이라고도 합니다. 참 거짓의 표현을 통해
        하나의 불리언으로는 2개의 상황을, 2개의 불리언으로는 4개의 상황을, 3개의
        불리언으로는 8개의 상황을 만들 수 있습니다. 컨트롤할 수 있는 상황이
        2^n개로 불어납니다.)
      </p>
      <h3>논리 부정 연산자</h3>
      <p>논리 부정 연산자는 기존에 정해진 논리를 부정하는 연산자입니다.</p>
      <p>
        피연산자는 불리언값이 아니어도 됩니다. 논리 연산자는 피연산자의 타입을
        암묵적으로 boolean값으로 변형시키기 때문입니다.
      </p>
      <CodeBox code={lessonCode.nonOperator} />
      <p>숫자 0과 빈 문자열은 불리언 false로 표기됩니다.</p>
      <p>
        이런 상황을 truthy하다, falsey하다로 나누는데, 이것은 다음 섹션에서
        배워보도록 하겠습니다.
      </p>
      <h1>이 외에도...</h1>
      <p>연산자의 세계는 생각보다 방대합니다.</p>
      <p>연산자의 정의가 생각보다 자유롭기 때문인데요.</p>
      <p>
        피연산자를 대상으로 다른 값을 산출해내면 그것을 연산자라고 하기 때문에
        별의 별 연산자가 많습니다.
      </p>
      <p>예를들어 아래 코드의 typeof도 연산자입니다.</p>
      <CodeBox code={lessonCode.typeofOperator} />
      <p>이것을 typeof 연산자라고 합니다.</p>
      <p>연산자 우선순위라는 것도 있습니다.</p>
      <p>
        다항식처럼, 여러개의 피연산자와 여러개의 연산자가 섞여 있을 경우, 어떤
        것이 먼저 연산되느냐에 따른 우선순위입니다.
      </p>
      <p>
        하지만 당장에 많이 사용하는 것은 덧셈, 나눗셈과 같은 정도고 그 정도라면
        수학 공식과 비슷하기 때문에 굳이 당장 빡세게 외울 필요는 없습니다.
      </p>
      <p>
        종류가 다양한만큼 모든 것들을 당장에 사용할 일은 없습니다. 필요할 때마다
        mdn에 검색해서 찾아보시면 됩니다.
      </p>
      <p>
        이번 챕터에서는 연산자의 정의와 필수적인 연산자만 알아가셔도 성공입니다.
      </p>
      <p>그럼 고생하셨습니다!</p>
    </div>
  );
}
