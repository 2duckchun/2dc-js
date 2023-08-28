import CustomImageWithCaption from '@/components/_common/CustomImageWithCaption';
import ActNavigator from '@/components/curriculum/ActNavigator';
import CodeBox from '@/components/curriculum/CodeBox';
import { chaptersInfo } from '@/constants/js_curriculum/js_chapters_info';
import styles from '@/styles/curriculum/Lecture.module.scss';

import weakType from '#/images/lectures/js/chap0/weaktype.png';

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

export default function Lecture() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum='js'
        highlightActNum={2}
        chapterInfo={chaptersInfo.chapter0}
      ></ActNavigator>
      <h1>연산자(Operator)</h1>
      <p>
        본격적인 여행을 떠나기 전에 필수적으로 알아야할 연산자라는 개념에 대해
        짚고 넘어갑시다.
      </p>
      <p>연산자는 무엇이고, 연산자를 어떻게 사용할까요?</p>
      <p>사실 우리는 이전 섹션에서도 연산자를 계속 사용하고 있었습니다.</p>
      <h2>연산자란?</h2>
      <p>연산이란 특정한 작업을 수행해서 값을 나타내는 것을 의미합니다.</p>
      <p>
        이런 뜻에서 자바스크립트의 연산자는{' '}
        <b>특정한 값을 통해 다른 값을 산출하는 명령어</b> 라고 할 수 있겠습니다.
      </p>
      <p>5 + 5를 자바스크립트를 통해 연산한다고 가정해보겠습니다.</p>
      <p>
        우리가 쓴 5, +, 5는 모두 기계어로 변환되어 CPU에서 계산될 것입니다.
        그리고 값이 산출될 것입니다.
      </p>
      <p>
        여기서 5는 연산을 당하는 주체인 <b>피연산자</b>라고 하고, 두 피연산자를
        연산하고자 지시하는 명령어인 +를 <b>연산자</b>라고 합니다.
      </p>
      <p>+ 연산자의 존재로써 5 두개가 10으로 계산되었기 때문입니다!</p>
      <h2>할당 연산자</h2>
      <CodeBox code={lessonCode.assignment} />
      <p>할당 연산자는 너무 쉽습니다.</p>
      <p>
        이퀄 기호인 <code className={styles.code_tag}>=</code> 이 할당
        연산자(assignment operator)라고 합니다.
      </p>
      <p>
        할당 연산자는 <b>우측의 값</b>을 <b>좌측의 변수</b>에 그대로 할당하는
        역할을 합니다.
      </p>
      <p>
        즉, =은 ~와 같다가 아니라 <b>우변을 좌변에 할당한다.</b> 가 맞겠습니다.
      </p>
      <p>
        +=, -=, /= 같이 생긴 할당 연산자도 존재합니다. 분명히 사용할 일이
        있으실텐데요.
      </p>
      <p>
        할당 연산자의 편의 기능이므로 나중에 따로 공부해보시는 것을 추천합니다!
      </p>
      <h2>연산자와 표현식(Expression)</h2>
      <p>
        연산자는 <b>어떤 값을 연산하라는 명령</b>입니다.
      </p>
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
      <br />
      <p>위의 코드에서 1과 2는 피연산자가 되고 +는 연산자가 되겠습니다.</p>
      <p>
        1과 2는 각각 떨어져 있으면 단순한 값의 나열일 뿐이지만 +라는 연산자를
        만나면 3이라는 값으로 연산됩니다.
      </p>
      <p>여기서 잠시 표현식이라는 단어를 알아볼까요?</p>
      <p>
        표현식은 <b>값을 생성하거나, 값을 표현하는 코드의 구조 자체</b>를
        의미합니다.
      </p>
      <p>
        1 + 2는 표현식일까요? <b>네 맞습니다!</b> 3이라는 값을 생성하고 표현할
        수 있습니다.
      </p>
      <p>
        3은 표현식일까요? <b>맞습니다!</b> 3이라는 값을 표현하고 있죠!
      </p>
      <p>표현식의 개념은 상당히 넓습니다.</p>
      <p>
        <b>어떤 값으로 표현될 수 있는 코드 자체</b>를 <b>표현식</b>이라고
        합니다.
      </p>
      <p>자 넘어가봅시다!</p>
      <h2>이항 산술 연산자</h2>
      <p>이름은 거창하지만 별거 없는 이항 산술 연산자입니다.</p>
      <p>
        이항 산술 연산자(Binary arithmetic operators)는 초등학교때 배우는 덧셈,
        뺄셈, 나눗셈, 곱셈과 같은 산술 연산을 하는 기호입니다.
      </p>
      <p>두개의 값을 하나의 표현식으로 만드는 역할을 하지요.</p>
      <CodeBox code={lessonCode.arithmetic} />
      <p>1 + 2의 연산값 3입니다.</p>
      <p>
        사실 위의 표현식은 어떤 변수에 할당하지 않았으므로 두고두고 쓰기가
        어렵습니다.
      </p>
      <p>
        변수에 할당하지 않았으므로 저장된 메모리 주소를 알 수 없기 때문이죠.
      </p>
      <p>
        하지만 표현식 자체는 값 자체로 이용할 수 있습니다. 아래 코드를 보시죠.
      </p>
      <CodeBox code={lessonCode.adding1Function} />
      <br />
      <p>
        함수입니다. 아직 함수의 개념을 배우지는 않았지만 익숙해지시는 차원에서
        한번 보시죠!
      </p>
      <p>
        함수의 괄호친 곳에 5 + 5가 파라미터(매개변수)라는 것으로 들어있는 것을
        보실 수 있습니다.
      </p>
      <p>
        5라는 피연산자들은 +에 의해 연산되어 하나의 표현식이 되기 때문에 10으로
        평가되고
      </p>
      <p>최종적으로 const b는 11이 할당 됩니다.</p>
      <h3>단항 산술 연산자의 종류</h3>
      <CodeBox code={lessonCode.otherArithmetic} />
      <p>
        덧셈뺄셈곱셈나눗셈은 익숙하시겠지만 나머지 연산자는 처음 보시는 분이 꽤
        되실겁니다.
      </p>
      <p>
        나머지 연산자는 <b>모듈러 연산</b>이라고도 하는데요. 정수론에서 중요한
        개념 중 하나입니다.
      </p>
      <p>
        풀어보자면, <b>A mod B = C은 B로 A를 나눈 나머지가 C와 같다</b>는 뜻
        입니다.
      </p>
      <p>
        이것을 <b>A % B</b> 로 표현한 것입니다.
      </p>
      <p>연습을 한번 해보죠!</p>
      <h3>모듈러 연산</h3>
      <CodeBox code={lessonCode.moduloQuestion} />
      <details>
        <summary>정답!</summary>
        <CodeBox code={lessonCode.moduloAnswer} />
        <br />
        <p>
          나머지 연산자는 의도적인 연습을 몇번 해보시면 금방 익힐 수 있습니다.
        </p>
        <p>
          카운트 6마다 실행되는 변수를 만들때 count % 6 === 0 과 같이 표현할 수
          있듯이
        </p>
        <p>모듈러 연산은 활용 방법이 참 많습니다.</p>
      </details>
      <h2>단항 산술 연산자</h2>
      <p>
        단항 산술 연산자는 1개의 피연산자를 산술하여 표현식을 만드는
        연산자입니다.
      </p>
      <h3>단항 증감 연산자</h3>
      <p>
        ++, -- 증감 연산자는 피연산자의 값을 증가 또는 감소시키고 값을 변경하는
        부수 효과(side Effect)가 있습니다.
      </p>
      <p>값 자체가 변경된다는 것이 중요합니다!</p>
      <p>아래 코드를 구글 크롬 콘솔에 한번 쳐보세요!</p>
      <CodeBox code={lessonCode.unaryIncreaseDecrease} />
      <p>
        최종적인 a의 값은 같지만, console에 즉시 나오는 a의 값은 뒤죽박죽일
        것입니다.
      </p>
      <p>
        증감 연산자가 변수의 앞에 있느냐 (prefix냐 postfix냐)에 따라 값의 실행
        순서가 바뀌게되어 위와 같은 현상이 나타납니다.
      </p>
      <p>코드를 깔끔하게 작성하기 위해 알고 넘어가시면 좋습니다.</p>
      <p>
        물론 당장 알 필요까지는 없을 것 같지만, 원리에 대해 궁금하면 mdn
        문서에서 찾아보도록 합시다!
      </p>
      <p>++, --의 prefix, postfix 부분을 찾아보시면 됩니다!</p>
      <h3>단항 기호 연산자</h3>
      <p>
        단항 기호(+, -) 연산자는 피연산자를 숫자로 변환하는 기능을 가지고
        있습니다. 부수효과는 없습니다.
      </p>
      <p>사용할 일이 많지는 않을 연산자 같습니다.</p>
      <p>
        단순히 값을 강제로 숫자로 만드는 연산자구나~ 라고 생각하고 넘어가셔도
        좋습니다.
      </p>
      <br />
      <p>
        <b>&quot;+ 단항 연산자&quot;</b> 는 피연산자를 숫자로 변환하는 기능외에
        별다른 기능을 가지고 있지 않습니다.
      </p>
      <CodeBox code={lessonCode.unaryPlusQuestion} />
      <details>
        <summary>정답!</summary>
        <CodeBox code={lessonCode.unaryPlusAnswer} />
      </details>
      <p>
        <b>&quot;- 단항 연산자&quot;</b> 는 피연산자를 숫자로 변환하면서 숫자의
        부호를 바꾸는 기능을 합니다.
      </p>
      <CodeBox code={lessonCode.unaryMinusQuestion} />
      <details>
        <summary>정답!</summary>
        <CodeBox code={lessonCode.unaryMinusAnswer} />
      </details>
      <CodeBox code={lessonCode.unaryPlusMinus} />
      <p>수학 기호와 거의 동일하다고 보시면 됩니다.</p>
      <h2>비교 연산자</h2>
      <p>비교 연산자는 뭘까요?</p>
      <p>
        <b>황소가 검은소보다 일을 잘하느냐?</b>라는 질문에 농민은{' '}
        <b>어유 그런 말씀 마세유</b> 라는 말을 할 수 있지만
      </p>
      <p>
        컴퓨터는 동일한 질문에 <b>맞다(true), 틀리다(false)</b> 두가지 답변만
        해줄 것입니다.
      </p>
      <p>
        이처럼 비교 연산자를 이용하면 두 값을 비교해서 비교값이 참인지 거짓인지{' '}
        <b>논리값(boolean)으로 표시할 수 있습니다</b>.
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
      <br />
      <p>근데 잠깐만요.</p>
      <p>이러한 현상은 왜 벌어지는 걸까요?</p>
      <p>
        자바스크립트가 <b>약타입 언어</b>라서 이런 일이 벌어집니다.
      </p>
      <p>
        연산할 피연산자의 타입이 다르면 에러를 낼 법도 한데 자바스크립트는
        어떻게든 연산을 해내려고 하는데요.
      </p>
      <CustomImageWithCaption
        imageSrc={weakType}
        width={355}
        height={461}
        caption={'이해 안하셔도 됩니다.'}
        alt={'자바스크립트는 약타입 언어이다.'}
      />
      <p>이 과정에서 자기 멋대로 데이터를 이상하게 바꿔서 비교합니다.</p>
      <p>
        즉 약타입이라는 이유 (타입에 매우 관대함) 때문에 동등 비교와 일치 비교가
        나뉘게 됩니다.
      </p>
      <p>
        <b>동등 비교</b>에서는 동등한지 아닌지 판별하기 위해서 강제적으로 형
        변환을 한 뒤에 일치 여부를 비교합니다.
      </p>
      <p>
        <b>일치 비교</b>는 자동 형변환 없이 데이터의 값이 완벽히 일치하는지
        비교합니다.
      </p>
      <p>
        동등비교는 상당히 난잡한 상황을 만들 수 있으므로 대부분의 상황에서는
        일치 비교를 쓰시는 편이 낫습니다.
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
        논리 연산자는 뭔가를 논증할때 사용하는 <b>또는(OR)</b>,{' '}
        <b>그리고(AND)</b>와 동일한데요.
      </p>
      <p>
        <b>OR은 비교 대상이 하나만 참(true)이어도 전체가 참(true)입니다.</b>
      </p>
      <p>
        <b>
          AND는 비교 대상 중 하나만 거짓(false)이어도 전체가 거짓(false)입니다.
        </b>
      </p>
      <p>
        자바스크립트에서 OR은 <b>논리합(||)</b>이라고 하며, AND는{' '}
        <b>논리곱(&&)</b>이라고 합니다.
      </p>
      <p>코드를 통해 살펴보겠습니다.</p>
      <CodeBox code={lessonCode.logicOperator} />
      <p>
        논리값은 <b>불리언(boolean)</b> 이라고도 합니다.
      </p>
      <p>참 거짓의 표현을 통해 상황을 시뮬레이션 할 수 있는데요.</p>
      <p>하나의 불리언으로는 2개의 상황을,</p>
      <p>2개의 불리언으로는 4개의 상황을,</p>
      <p>3개의 불리언으로는 8개의 상황을 만들 수 있습니다.</p>
      <p>즉, 컨트롤할 수 있는 상황이 2^n개로 불어납니다.</p>
      <p>하나의 기능 구현에서 너무 많은 논리값을 사용한다면</p>
      <p>예기치 못한 버그가 생길 수 있겠지요.</p>
      <h3>논리 부정 연산자</h3>
      <p>논리 부정 연산자는 기존에 정해진 논리를 부정하는 연산자입니다.</p>
      <p>
        피연산자는 불리언값이 아니어도 됩니다. 논리 연산자는 피연산자의 타입을
        암묵적으로 boolean값으로 변형시킵니다.
      </p>
      <p>약타입 만세입니다.</p>
      <CodeBox code={lessonCode.nonOperator} />
      <p>숫자 0과 빈 문자열은 불리언 false로 표기됩니다.</p>
      <p>
        <b>이런 상황을 truthy하다, falsey하다로 나누는데,</b> 이것은 다음
        섹션에서 배워보도록 하겠습니다.
      </p>
      <h2>이 외에도...</h2>
      <p>자바스크립트 연산자는 생각보다 많습니다.</p>
      <p>연산은 새로운 표현식을 만드는 방법이기 때문인데요.</p>
      <p>
        피연산자를 대상으로 다른 값을 산출해내면 그것을 연산자라고 할 수
        있습니다.
      </p>
      <p>
        예를 들어 아래 코드의 <b>typeof</b>도 연산자입니다.
      </p>
      <CodeBox code={lessonCode.typeofOperator} />
      <p>
        이것을 <b>typeof 연산자</b>라고 합니다.
      </p>
      <p>연산이 꼭 계산에만 국한되지 않는 다는 점을 알려드리고 싶었습니다.</p>
      <br />
      <p>연산자 우선순위라는 것도 있는데요.</p>
      <p>나중에 또 배우시겠지만</p>
      <p>일단은 사칙연산과 비슷하다고 알고 넘어가셔도 좋을 것 같습니다.</p>
      <p>
        표현식 <b>(1 + 5) * 5 + 6 / 2</b> 의 값은 뭘까요?
      </p>
      <br />
      <p>(두뇌 풀가동 짤)</p>
      <br />
      <p>연산자 우선순위는 하나의 표현식에 여러가지의 연산자가 있을 경우</p>
      <p>어떤 것을 미리 연산하느냐? 에 대한 순서입니다.</p>
      <p>
        연산자가 많아서 연산자 우선순위 종류도 많은데 일단 사칙연산이다 정도로만
        알고 넘어가시죠!
      </p>
      <br />
      <p>
        이번 챕터에서는 연산자의 정의와 필수적인 연산자만 알아가셔도 성공입니다.
      </p>
      <p>아직까지는 좀 지루하실 수 있습니다.</p>
      <p>사실 앞으로는 재미있을 거라고도 장담을 못드리겠습니다.</p>
      <p>그래도 의미있는 시간을 만들어드릴 수 있는 자신은 있습니다.</p>
      <p>그럼 다음 챕터에서 보시죠!</p>
      <br />
      <p>
        <b>모듈로 연산은 꼭 연습해보세요!!!!!!</b>
      </p>
    </div>
  );
}
