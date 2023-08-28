import CustomImageWithCaption from '@/components/_common/CustomImageWithCaption';
import ActNavigator from '@/components/curriculum/ActNavigator';
import CodeBox from '@/components/curriculum/CodeBox';
import ExerciseCard from '@/components/curriculum/ExcerciseCard';
import { chaptersInfo } from '@/constants/js_curriculum/js_chapters_info';
import styles from '@/styles/curriculum/Lecture.module.scss';

import primitive1 from '#/images/lectures/js/chap3/primitive-1.png';
import primitive2 from '#/images/lectures/js/chap3/primitive-2.png';
import primitive3 from '#/images/lectures/js/chap3/primitive-3.png';
import primitive4 from '#/images/lectures/js/chap3/primitive-4.png';
import primitive5 from '#/images/lectures/js/chap3/primitive-5.png';
import reference1 from '#/images/lectures/js/chap3/reference-1.png';
import reference2 from '#/images/lectures/js/chap3/reference-2.png';

const lessonCode = {
  primitiveDeclarationA: `let a = 25`,
  primitiveDeclarationB: `let a = 25
let b = a`,
  primitiveRedeclarationA: `let a = 25
let b = a
a = 30`,
  primitiveSumAB: `let a = 25
let b = a
a = 30
b = a + b`,
  primitiveCondition: `'2DC' === '2DC' // true
5 === 5 // true
undefined === undefined // true`,
  referenceCondition: `[] === [] // false

const obj1 = {}
const obj2 = {}
obj1 === obj2 // false

const fn1 = () => {}
const fn2 = () => {}
fn1 === fn2 // false`,
  primitiveAndReference: `let a = 5
let b = 5
if (a === b) {
  console.log("a와 b가 일치합니다!") // 찍힐까요?
}

let c = []
let d = []
if (c === d) {
  console.log("c와 d가 일치합니다!") // 찍힐까요?
}`,
  referenceArray1: `const product = []
const cart = []`,
  referenceArray2: `const product = []
const cart = product

if (cart === product) {
  // cart === product가 참이므로 출력됩니다.
  console.log("두 배열은 같은 배열입니다.")
}`,
  referenceArray3: `let product = []
const cart = product
console.log(product === cart) // true

product = []
console.log(product === cart) // false`,
  primitiveTypes: `// 숫자형 (number)
let age = 30

// 문자형 (string)
let message = "Hello, world!"

// 불리언 (boolean)
let isLogged = true

// null
let user = null

// undefined
let email
console.log(email)

// 심볼 (Symbol)
const id = Symbol('id')
let user = {
  [id]: '12345'
}`,
  referenceTypes: `// 객체 (Object)
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
}
  
// 배열 (Array)
let colors = ['red', 'green', 'blue']
  
// 함수 (Function)
function greet(name) {
  return 'hello' + name
}`,
  arrayExplain1: `const 과일바구니 = ['사과', '수박', '참외', '감']`,
  arrayExplain2: `['사과' // 엘리먼트
'수박', // 엘리먼트
'참외', // 엘리먼트
'감'// 엘리먼트 ]`,
  arrayExplain3: `const 과일바구니 = ['사과', '수박', '참외', '감']
과일바구니[0] // '사과'
과일바구니[1] // '수박'
과일바구니[2] // '참외'
과일바구니[3] // '감'`,
  arrayExplain4: `const 과일바구니 = ['사과', '수박', '참외', '감', 2, 100]
let number = 0
과일바구니[number] // '사과'
과일바구니[100-99] // '수박'
과일바구니[과일바구니[4]] // '참외'
과일바구니[과일바구니[5]] // undefined`,
  arrayExplain5: `const 과일바구니 = ['사과', '수박', '참외', '감', '잭푸르트', '용과']
과일바구니.length // 6
과일바구니[과일바구니.length - 1] // '용과'`,
  forArrayQuestion1: `// 배열 내 모든 엘리먼트를 순서대로 console.log 해보세요
const 과일바구니 = ['사과', '수박', '참외', '감', '잭푸르트', '용과']
for (let i = ... )`,
  forArrayAnswer1: `for (let i = 0; i < 과일바구니.length; i++) {
    console.log(과일바구니[i])
}`,
  forArrayQuestion2: `// 배열 내 모든 엘리먼트를 역순으로 console.log 해보세요!
const 투썸메뉴 = ['잉글리쉬 브랙퍼스트', '제주 유기농 녹차', '애플 민트티', '아메리카노', '흑임자 카페라떼', '복숭아 에이드']
for (let i = ... )`,
  forArrayAnswer2: `for (let i = 투썸메뉴.length - 1; i >= 0; i--) {
  console.log(투썸메뉴[i])
}`,
  primitiveInReferenceQuestion: `const arr1 = [1, 2, 3]
const arr2 = [arr1, 1, 2]

console.log(arr1 === arr2[arr1[2] - arr1[1] - arr1[0]]) // ?`,

  primitiveInReferenceAnswer: `const arr1 = [1, 2, 3]
const arr2 = [arr1, 1, 2]

console.log(arr1 === arr2[arr1[2] - arr1[1] - arr1[0]]) // true
arr1[2] // 3
arr1[1] // 2
arr1[0] // 1
// 3 - 2 - 1 = 0
arr2[0] === arr1 // true`,
};

export default function Lecture() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum='js'
        highlightActNum={1}
        chapterInfo={chaptersInfo.chapter3}
      ></ActNavigator>
      <h1>배열 기초</h1>
      <p>챕터3에 오신 여러분들을 환영합니다.</p>
      <p>이 챕터에서는 배열을 중점적으로 다뤄 볼 예정인데요.</p>
      <p>
        본격적으로 배열을 배우기 전에 데이터의 원시 타입과 참조 타입의 동작
        원리에 대해 다뤄볼 것입니다.
      </p>
      <p>
        그리고 배열의 특수한 기능들과, 그 기능들을 사용할 수 있게 해주는
        패러다임인 프로토타입에 대해 배웁니다.
      </p>
      <p>
        우리가 자주 사용할 배열 전용 프로토타입 함수들을 직접 만들어보는 시간도
        가질 것입니다.
      </p>
      <p>차근차근 알아가 보겠습니다!</p>
      <h2>배열이란 무엇인가?</h2>
      <p>배열이란 무엇일까요?</p>
      <p>
        컴퓨터 과학에서는 배열은 인덱스와 인덱스에 대응하는 데이터들로 이루어진
        자료구조 라고 명시합니다.
      </p>
      <p>
        위의 말을 간단히 하면,{' '}
        <b>
          여러 데이터들에게 번호표(인덱스)를 하나씩 나눠준 뒤 일렬로 줄 세워
          묶어버린 것
        </b>
        이 배열입니다.
      </p>
      <p>
        즉, 배열을 이용하면 여러개의 데이터를 한번에, 규칙적으로 사용할 수
        있습니다.
      </p>
      <h2>원시 타입과 참조 타입</h2>
      <p>
        배열로 여행을 떠나기 전에 데이터 타입을 조금만 공부해보고
        넘어가겠습니다.
      </p>
      <p>우리는 아래 코드의 조건식이 true임을 알고 있습니다.</p>
      <CodeBox code={lessonCode.primitiveCondition} />
      <br />
      <p>
        그런데 이 코드들의 조건식은 왜 false일까요? 위의 코드와 별로
        달라보이는게 없는데 말입니다.
      </p>
      <CodeBox code={lessonCode.referenceCondition} />
      <p>데이터가 똑같은데 왜 false인지 궁금하실 수 있는데요.</p>
      <p>이런 현상을 이해하기 위해서 원시 타입과 참조 타입을 알아야합니다.</p>
      <h3>원시 타입</h3>
      <p>
        원시 타입은 <b>변수에 실제 값이 할당된다는 것</b>과,{' '}
        <b>저장된 값은 변경되지 않는다(불변성을 지닌다)</b>는 특징을 가진 데이터
        타입들입니다.
      </p>
      <p>실제 값이 할당되고, 불변성을 지닌다는 것은 무슨 의미일까요?</p>
      <p>코드와 그림을 통해 살펴보겠습니다.</p>
      <br />
      <CodeBox code={lessonCode.primitiveDeclarationA} />
      <p>변수 a가 선언되었습니다. a에는 숫자 25가 할당되어 있습니다.</p>
      <p>
        숫자 25가 메모리에 기록되고 식별자가 메모리 주소를 참조하는 것을
        대략적으로 그려보았습니다.
      </p>
      <br />
      <CustomImageWithCaption
        imageSrc={primitive1}
        width={347}
        height={450}
        alt='변수 a에 숫자 25가 할당'
        caption='변수 a에 숫자형(원시타입) 데이터 25가 할당되었습니다.'
      />
      <p>
        숫자형 데이터 25는 메모리 특정 공간에 기록이 되고, 그 메모리 공간의
        주소를 식별자가 참조하고 있습니다.
      </p>
      <br />
      <p>이 후 변수 b를 만들어보겠습니다. b에는 a가 할당됩니다.</p>
      <br />
      <CodeBox code={lessonCode.primitiveDeclarationB} />
      <p>
        b가 a를 참조했으니, b는 a의 메모리 주소를 그대로 참조하고 있을까요??
      </p>
      <p>정답은 그렇지 않다 입니다.</p>
      <p>
        숫자형 데이터는 원시 타입이기 때문에 메모리 주소가 아니라 값 자체를
        복제한 후, 별도의 메모리에 저장합니다.
      </p>
      <p>그림으로 묘사하면 아래와 같을 것입니다.</p>
      <br />
      <CustomImageWithCaption
        imageSrc={primitive2}
        width={347}
        height={450}
        alt='변수 B에 a가 할당'
        caption='변수 b에 a가 할당되었고, b는 a의 값을 복제해옵니다.'
      />
      <br />
      <p>이제 변수 a에 다른 값을 재할당 해보겠습니다.</p>
      <CodeBox code={lessonCode.primitiveRedeclarationA} />
      <br />
      <p>a에 30을 재할당 했습니다.</p>
      <p>그렇다면 이전에 변수 a에 저장되어 있던 25는 어디로 가게 될까요?</p>
      <p>25가 저장된 위치는 사실 변하지 않습니다.</p>
      <p>
        자바스크립트의 원시 타입은 불변성이기 때문에 메모리에 저장된 값이 바뀌지
        않습니다.
      </p>
      <p>
        그 대신 메모리의 다른 부분에 30이 저장되고, 변수 a는 30이 저장된
        메모리의 주소를 다시 참조합니다.
      </p>
      <p>그림으로 표시하면 아래와 같습니다.</p>
      <br />
      <CustomImageWithCaption
        imageSrc={primitive3}
        width={347}
        height={450}
        alt='변수 a에 30이 재할당'
        caption='변수 a에 30을 재할당 했습니다. a는 30이 저장된 메모리 주소를 참조합니다.'
      />
      <br />
      <p>이제 변수 a는 30이 담긴 메모리의 주소를 참조합니다.</p>
      <p>그렇다면 더이상 참조되지 않는 데이터인 25는 어떻게 될까요?</p>
      <p>
        어떤 변수에도 참조되지 않는 메모리는 <b>가비지 컬렉터</b>에 의해
        회수됩니다.
      </p>
      <p>
        다만 가비지 컬렉터는 언어의 내부적 동작에 의해 실행되므로, 메모리의 회수
        시기는 우리가 알 수 없습니다.
      </p>
      <br />
      <p>
        이렇게 메모리를 알아서 관리해주는 언어를 <b>매니지드 언어</b>라고
        합니다.
      </p>
      <p>
        반대로 참조한 메모리를 직접 해제해야 하는 언어를 <b>언매니지드 언어</b>
        라고 하지요.
      </p>
      <br />
      <p>이제 변수 b에 변수 a와 변수 b를 더해보도록 하겠습니다.</p>
      <CodeBox code={lessonCode.primitiveSumAB} />
      <p>
        b에 새로운 표현식이 할당되었으므로, 표현식이 계산된 값이 메모리에 할당
        될 것입니다.
      </p>
      <p>그림으로 간략히 표현해보면 아래와 같습니다.</p>
      <CustomImageWithCaption
        imageSrc={primitive4}
        width={347}
        height={450}
        alt='변수 b에 a와 b를 더함'
        caption='a + b는 표현식입니다. 표현식은 곧 값을 나타내지요. 새로운 값은 메모리의 다른 부분에 저장됩니다.'
      />
      <p>25 + 30 이라는 표현식이 계산된 후, 메모리에 저장됩니다.</p>
      <p>그리고 변수 b는 새로운 값을 참조합니다.</p>
      <p>이로써</p>
      <ul>
        <li>
          <b>
            변수에 원시타입 데이터를 할당할때는 늘 새로운 값이 할당된다는 것과
          </b>
        </li>
        <li>
          <b>원시 타입 데이터는 불변성을 가진다는 것</b>
        </li>
      </ul>
      <p>을 설명할 수 있습니다.</p>
      <br />
      <h4>추가 파트 : 실행 컨텍스트와 원시타입 데이터</h4>
      <p>
        원시 타입 데이터 변수 선언을 실행 컨텍스트의 관점에서 이해해보겠습니다.
      </p>
      <p>
        함수가 실행되면 실행 컨텍스트가 생성되고, 변수들이 환경 레코드에
        등록됩니다.
      </p>
      <p>
        실행 컨텍스트의 변수 등록을 메모리 관점에서 생각해보면 아래와 같을
        것입니다.
      </p>
      <CustomImageWithCaption
        imageSrc={primitive5}
        width={643}
        height={355}
        alt='실행 컨텍스트에 등록된 변수의 메모리 참조'
        caption='실행 컨텍스트에 등록된 변수의 메모리 참조'
      />
      <p>위 그림은 원시 타입과 참조 타입을 이해하는데 필요합니다.</p>
      <p>이제 참조 타입에 대해서 학습해보도록 하겠습니다!</p>
      <h3>참조 타입</h3>
      <p>퀴즈입니다.</p>
      <p>두개의 console.log가 모두 출력될까요?</p>
      <CodeBox code={lessonCode.primitiveAndReference} />
      <br />
      <p>
        <b>&ldquo;a와 b가 일치합니다!&ldquo;</b> 만 찍혀 나올 것입니다.
      </p>
      <p>
        실제로 자바스크립트 식별자가 바라보는 관점에서 a와 b는 동일한 값을
        가지고 있으므로 두 비교는 참입니다.
      </p>
      <p>
        <b>그런데 c와 d는 무엇이 다를까요?</b> 둘다 [] 라는 값을 가지고 있는데
        말입니다.
      </p>
      <br />
      <p>
        <b>[]</b>는 <b>배열(Array)</b>이라는 데이터 구조이고, 참조 타입의 데이터
        입니다.
      </p>
      <p>이 참조 타입의 데이터들은 메모리 할당이 약간 특이하게 이뤄집니다.</p>
      <p>아래 코드와 그림을 통해 설명을 이어가보도록 하겠습니다.</p>
      <br />
      <CodeBox code={lessonCode.referenceArray1} />
      <br />
      <p>배열은 여러가지 데이터를 담을 수 있는 역할을 합니다.</p>
      <p>
        데이터를 담을 수 있다는 것을 표현하고자 product와 cart을 배열로
        만들었습니다.
      </p>
      <p>이 두 배열은 어떤 방식으로 메모리에 할당될까요?</p>
      <p>아래 그림을 보시겠습니다.</p>
      <CustomImageWithCaption
        imageSrc={reference1}
        width={840}
        height={400}
        alt='참조타입이 메모리에 저장되는 그림'
        caption='참조 타입은 힙(heap)이라는 메모리의 가변적인 부분을 활용합니다.'
      />
      <p>참조타입은 값이 메모리 스택에 그대로 할당 되었던 원시 타입과 달리,</p>
      <p>
        heap이라는 메모리의 가변적인 영역에 데이터가 할당되고, 변수는 heap의
        메모리 주소를 참조하게 됩니다.
      </p>
      <p>
        즉, 변수에 할당된 값이 다르므로, 둘을 비교 연산하면 false가 나오게 되는
        것 입니다. ( 위 예시의 0x2345와 0x3516이 다르듯이요!)
      </p>
      <br />
      <p>그렇다면 아래와 같은 상황은 어떨까요?</p>
      <CodeBox code={lessonCode.referenceArray2} />
      <br />
      <p>product에 배열이 할당되었고, cart에는 product가 할당됩니다.</p>
      <p>
        이 경우, product의 참조 주소값을 cart가 그대로 가져오므로 두 식별자는
        같은 배열을 참조하게 됩니다.
      </p>
      <br />
      <CustomImageWithCaption
        imageSrc={reference2}
        width={840}
        height={400}
        alt='다른 식별자가 동일한 heap 주소를 참조하고 있는 그림'
        caption='식별자 product와 cart는 동일한 heap 메모리 주소를 참조하게 됩니다.'
      />
      <p>약간은 감이 잡히셨을거라고 믿습니다.</p>
      <br />
      <p>따라서 메모리의 관점에서 보면 아래 코드를 설명할 수 있습니다.</p>
      <CodeBox code={lessonCode.referenceArray3} />
      <br />
      <p>최초에 product에 배열이 할당 되었습니다.</p>
      <p>cart는 product가 참조하고 있는 배열 주소를 복제해옵니다.</p>
      <p>
        즉, 둘은 같은 배열을 참조하고 있으므로 첫번째 비교에서는 true가
        출력됩니다.
      </p>
      <br />
      <p>이후 product에 새로운 배열이 할당이 되었습니다.</p>
      <p>이제 product는 다른 배열을 참조하게 됩니다.</p>
      <p>
        다만 cart는 여전히 이전에 생성된 배열 주소를 참조하고 있으므로, 둘을
        비교하면 false가 출력됩니다.
      </p>
      <br />
      <hr />
      <br />
      <p>원시 타입과 참조 타입의 차이점을 공부해 보았습니다.</p>
      <p>내부적 원리까지 모두 한번에 이해하실 필요는 없습니다.</p>
      <p>
        다만, 개발 중 알 수 없는 현상이 일어났을 때, 그것을 캐치하고 해결하려면
        언어의 내부 원리를 어느정도는 알고 있어야 합니다.
      </p>
      <p>
        이제 원시 타입 데이터 종류와 참조 타입 데이터 종류를 알아보겠습니다.
      </p>

      <h3>원시 타입 데이터 종류</h3>
      <CodeBox code={lessonCode.primitiveTypes} />
      <p>원시 타입의 데이터 종류입니다.</p>

      <h3>참조 타입 데이터 종류</h3>
      <CodeBox code={lessonCode.referenceTypes} />
      <p>원시 타입을 제외한 모든 타입이 참조 타입이라고 볼 수 있습니다.</p>

      <h2>배열의 구성요소</h2>
      <p>이제 본격적으로 배열에 대해 배워보겠습니다.</p>
      <p>
        앞서 말씀드렸듯이 배열은 특정 데이터들을 인덱스 순서대로 묶을 수 있는
        기능을 하는 데이터 타입입니다.
      </p>
      <CodeBox code={lessonCode.arrayExplain1} />
      <br />
      <p>과일 이름을 표현한 문자열 데이터 4개를 배열에 추가한 그림입니다.</p>
      <p>
        배열 내부에 있는 각각의 데이터를 <b>엘리먼트</b>라고 하며, 배열 내
        데이터에 접근할 수 있는 숫자를 <b>인덱스</b>라고 합니다.
      </p>

      <h3>1. 엘리먼트(element)</h3>
      <CodeBox code={lessonCode.arrayExplain2} />
      <br />
      <p>배열 내 위치한 각각의 데이터를 엘리먼트(element)라고 부릅니다.</p>

      <h3>2. 인덱스(index)</h3>
      <CodeBox code={lessonCode.arrayExplain3} />
      <br />
      <p>
        그리고 배열 내 엘리먼트에 바로 접근할 수 있는 숫자를 인덱스라고 합니다.
      </p>
      <p>인덱스는 0부터 시작해서 배열 길이 - 1으로 끝납니다.</p>
      <p>우리의 과일바구니는 4개의 엘리먼트가 있었죠.</p>
      <p>즉, 과일바구니의 배열 길이는 4이고, 배열의 최대 인덱스는 3입니다.</p>
      <p>
        배열에 인덱스로 접근해서 엘리먼트를 가져오는 문법은{' '}
        <b>배열[인덱스숫자]</b> 입니다.
      </p>
      <p>
        아래의 코드가 이해가 잘 가신다면 인덱스와 엘리먼트에 대한 기초적인
        이해는 모두 되었다고 봐도 무방합니다.
      </p>
      <CodeBox code={lessonCode.arrayExplain4} />
      <br />
      <p>
        위의 코드에서는 대괄호 내부에 숫자가 오고 있다는 것을 기억해주시기
        바랍니다.
      </p>
      <p>
        다만 인덱스를 벗어나는 숫자가 오게 될 경우, 배열 내 값이 없다는 의미로{' '}
        <b>undefined</b>가 출력됩니다.
      </p>

      <h3>3. 길이(length)</h3>
      <CodeBox code={lessonCode.arrayExplain5} />
      <br />
      <p>length는 배열의 프로퍼티(property)입니다.</p>
      <p>
        프로퍼티는 객체의 용어이고, 객체 챕터에서 더 자세하게 다룰 주제입니다.
      </p>
      <p>
        자바스크립트에서 배열은 객체의 일부이고, 그렇기 때문에 별도의 프로퍼티를
        가지고 있습니다.
      </p>
      <br />
      <p>
        length는 배열의 길이를 나타내는 숫자형 데이터로, 배열에 .length를 붙여
        입력하면 배열의 길이를 알 수 있습니다.
      </p>
      <p>
        배열의 최대 인덱스는 length - 1임을 꼭 기억해주세요! 굉장히 많이
        사용됩니다!
      </p>
      <h2>Exercise</h2>
      <ol>
        <ExerciseCard
          title='배열 내 모든 엘리먼트를 순서대로 console.log 해보세요!'
          QuestionCode={lessonCode.forArrayQuestion1}
          AnswerCode={lessonCode.forArrayAnswer1}
        />
        <ExerciseCard
          title='배열 내 모든 엘리먼트를 역순으로 console.log 해보세요!'
          QuestionCode={lessonCode.forArrayQuestion2}
          AnswerCode={lessonCode.forArrayAnswer2}
        />
        <ExerciseCard
          title='console.log 내부 조건식은 true일까요? false일까요?'
          QuestionCode={lessonCode.primitiveInReferenceQuestion}
          AnswerCode={lessonCode.primitiveInReferenceAnswer}
        />
      </ol>
      <p>내용을 충분히 숙지하셨다면 다음 단계로 넘어가셔도 좋습니다.</p>
      <p>
        다음 장에서는 배열을 다루는데 필수적으로 알아야 하는 배열 메서드와,
        메서드를 사용할 수 있게 해주는 프로토타입에 대해 배워보겠습니다.
      </p>
      <p>고생하셨습니다!</p>
    </div>
  );
}
