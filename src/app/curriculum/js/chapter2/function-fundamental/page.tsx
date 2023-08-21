import styles from "@/styles/Chapter.module.scss";
import { chaptersInfo } from "../../JS_CHAPTER_INFO";
import ActNavigator from "@/app/_component/_curriculum/ActNavigator";
import CustomImageWithCaption from "@/app/_component/_common/CustomImageWithCaption";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import ExerciseCard from "@/app/_component/_curriculum/ExcerciseCard";

// images
import pngFunctionMachine from "#/images/lectures/js/chap2/function-machine.png";
import pngfunctionComponent from "#/images/lectures/js/chap2/function-component.png";

const lessonCode = {
  fx: `function f(x) {
  return x + 2
}

f(2) // 4
f(4) // 6
f(10) // 12
// ...`,
  reuseability: `function addNumbers(a, b) {
  return a + b;
}

let result1 = addNumbers(2, 3); // 2 + 3 = 5
let result2 = addNumbers(10, 20); // 10 + 20 = 30
let result3 = addNumbers(20, 30); // 20 + 30 = 50
let result4 = addNumbers(30, 40); // 30 + 40 = 70
...`,
  maintainability1: `const today = new Date() // 날짜 객체를 생성하는 객체 생성자 함수입니다!

function formatDate(date) {
  // 날짜 포맷 변경 로직
  const year = date.getFullYear(); // Date 객체의 메서드입니다.
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 메서드는 다음에 배웁니다! 
  const day = String(date.getDate()).padStart(2, '0'); // 일단은 눈으로 봐주세요!

  const formattedDate = \`\${year}-\${month}-$\{day}\`\; 
  // \`\${}\`템플릿 리터럴(Template Literal)은 개인적으로 공부해보세요!
  return formattedDate;
}

const yyyymmdd = formatDate(today)`,
  maintainability2: `const today = new Date() // 날짜 객체를 생성하는 객체 생성자 함수입니다!

function formatDate(date) {
  // 날짜 포맷 변경 로직
  // ... (생략)
  const formattedDate = \`\${month}-$\{day}-\${year}\`\; 
  return formattedDate;
}

const mmddyyyy = formatDate(today)`,
  readability: ` // 위의 formatDate 함수를 사용한다고 가정..
  const today = new Date()
  console.log(\`\${formatDate(today)}에 Ned 님이 접속하셨습니다.\`) // 07-27-2023에 Ned 님이 접속하셨습니다.
  console.log(\`\${formatDate(today)}에 Snow 님이 접속하셨습니다.\`) // 07-27-2023에 Snow 님이 접속하셨습니다.
  console.log(\`\${formatDate(today)}에 Robb 님이 접속하셨습니다.\`) // 07-27-2023에 Robb 님이 접속하셨습니다.
  console.log(\`\${formatDate(today)}에 Arya 님이 접속하셨습니다.\`) // 07-27-2023에 Arya 님이 접속하셨습니다.`,
  functionComponent: `function sayHello(friend) {
  return \`hello! \${friend}!\`
}

console.log(sayHello("zito")) // hello! zito!`,
  exercise1: `1. 파라미터 2개를 가지는 함수를 선언문으로 작성해보세요!.
2. 파라미터 1개를 가지는 함수를 표현식으로 작성해보세요!
3. 파라미터 0개를 가지는 함수를 화살표 함수로 작성해보세요!`,
  exercise2: `function questionOne(var1, var2) {} // 1번 (문제 선언문)
const two = function(var1) {} // 2번 (문제 표현식)
const three = () => {} // 3번 문제 (화살표 함수)`,
  functionExecute: `function sayHello(friend) {
  return \`hello! \${friend}!\`
}

const harry = sayHello("ron") // 'hello! ron!'
const ron = sayHello // ƒ sayHello(friend)...`,
  functionDefinition: `function sayHello(friend) {
  return \`hello! \${friend}!\`
}`,
  functionExpression: `const sayHello = function(friend) {
  return \`hello! \${friend}!\` 
}`,
  ArrowFunction: `const sayHello = (friend) => {
  return \`hello! \${friend}!\` 
}

// 변수 : sayHello
// 함수 : () => {}`,
  sayHelloNoReturn: `const sayHello = (friend) => {
  console.log(\`hello! \${friend}!\`) 
}

const helloLog = sayHello("2DC") // hello! 2DC! 라는 출력은 나옵니다.

console.log(helloLog) // undefined`,
  sayHelloNoReturn2: `const sayHello = (friend) => {
  console.log(\`hello! \${friend}!\`) 
  console.log(\`hello! \${friend}!\`)
  return "done" 

  console.log(\`hello! \${friend}!\`) // 실행되지 않음
  console.log(\`hello! \${friend}!\`) // 실행되지 않음
  console.log(\`hello! \${friend}!\`) // 실행되지 않음
  console.log(\`hello! \${friend}!\`) // 실행되지 않음
  console.log(\`hello! \${friend}!\`) // 실행되지 않음
}

const helloLog = sayHello("2DC") // return문 이전의 console.log 2개가 출력됩니다.

console.log(helloLog) // "done"`,
  exercise3_Question: `const 홀짝 = (num) => {
  if (num % 2 === 0) return "짝수"
  return "홀수"
}

const answer1 = 홀짝(191)
const answer2 = 홀짝(250)
const answer3 = 홀짝(168)`,
  exercise3_answer: `const 홀짝 = (num) => {
  if (num % 2 === 0) return "짝수"
  return "홀수"
}

const answer1 = 홀짝(191) // 홀수
const answer2 = 홀짝(250) // 짝수
const answer3 = 홀짝(168) // 짝수

// 왜 "홀수" 또는 "짝수"만 리턴될까요?`,
  exercise4_Question: `const 비동기체험1 = (num) => {
  // setTimeout은 비동기 함수라고 합니다. 구글에 검색해보셔요!
  setTimeout(() => {
    return num
  }, 1000)
}

const answer1 = 비동기체험1(123)
const answer2 = 비동기체험1(456)
const answer3 = 비동기체험1(789)
`,
  exercise4_Answer: `const 비동기체험1 = (num) => {
  setTimeout(() => {
    return num
  }, 1000)
}

const answer1 = 비동기체험1(123) // undefined
const answer2 = 비동기체험1(456) // undefined
const answer3 = 비동기체험1(789) // undefined
// 왜 return이 있었는데도 변수에 undefined가 할당되었을까요?`,
  exercise5_Question: `const 비동기체험2 = (num, callback) => {
    setTimeout(() => {
        if (num % 2 === 0) callback("짝수")
        else callback("홀수")
    }, 3000)
    return "작업 끝!"
}`,
  exersice5_Question: `const 비동기체험2 = (num, callback) => {
    setTimeout(() => {
        if (num % 2 === 0) callback("짝수")
        else callback("홀수")
    }, 2000)
    return "작업 끝!"
}

const answer = 비동기체험2(102, (message) => {
    console.log(message)
})

// answer에는 무엇이 할당될까요?
// 2초 뒤에는 무슨 일이 발생할까요? 
`,
  exersice5_Answer: `const 비동기체험2 = (num, callback) => {
    setTimeout(() => {
        if (num % 2 === 0) callback("짝수")
        else callback("홀수")
    }, 2000)
    return "작업 끝!"
}

const answer = 비동기체험2(102, (message) => {
    console.log(message)
})

// const answer에는 "작업 끝!" 이 할당되고
// 2초 뒤에 "짝수"가 출력됩니다!`,
};

export default function Lecture() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum="js"
        highlightActNum={1}
        chapterInfo={chaptersInfo.chapter2}
      ></ActNavigator>
      <h1>함수의 기본</h1>
      <p>자바스크립트의 함수 생태계는 매우 방대합니다.</p>
      <p>
        함수를 이해하기 위해선 다양한 내용들을 다루어야 하기 때문에, 자료를
        만들면서 정말 많은 압박을 받았습니다.
      </p>
      <p>하지만 감사하게도, 저 또한 많은 공부를 하게 되었습니다.</p>
      <p>
        만약 강의 자료가 너무 어렵게 느껴지거나 혼란스럽게 보인다면 언제든
        코멘트를 남겨주세요!
      </p>
      <p>의견을 주시는 것은 제게 큰 영광입니다.</p>
      <br />
      <p>
        이 챕터가 여러분의 자바스크립트 여행에 큰 도움이 되었으면 하는
        바람입니다.
      </p>
      <p>그럼 시작해봅시다!!</p>
      <br></br>
      <CustomImageWithCaption
        imageSrc={pngFunctionMachine}
        width={330}
        height={327}
        alt={"함수 머신"}
        caption={"함수 기계입니다. 익숙하신 그림일지도 모르겠습니다."}
      />
      <p>위와 같은 그림을 많이 보셨을지도 모르겠습니다.</p>
      <p>
        함수 기계인데요. x를 넣으면 함수 기계 내부의 식을 거쳐서 y값이
        산출됩니다.
      </p>
      <p>
        자바스크립트에서의 함수도 약간 비슷한 개념입니다. 어떤 값을 넣으면
        내부의 코드 블록을 거쳐 값이 출력됩니다.
      </p>
      <CodeBox code={lessonCode.fx} />

      <h2>자바스크립트에서 함수란?</h2>
      <p>
        자바스크립트 함수의 정의는{" "}
        <b>코드 실행 단위를 묶어 나중에 호출할 수 있게 하는 것</b>으로 내릴 수
        있습니다.
      </p>
      <p>
        나중에 호출할 코드 덩어리를 만들수 있다는 것은 프로그래밍적으로 엄청난
        이점이 있습니다.
      </p>
      <p>코드 덩어리들을 함수로 묶어서 사용하는 것의 장점은 아래와 같습니다.</p>
      <h2>적절한! 함수 사용의 장점</h2>
      <ol>
        <li>재사용성 : 필요할 때마다 호출할 수 있다.</li>
        <li>유지보수성 : 로직을 수정해야 할 경우, 함수만 수정하면 된다.</li>
        <li>
          가독성 : 함수명을 잘 지으면 코드만 보고도 기능을 유추할 수 있다.
        </li>
      </ol>
      <h3>재사용성</h3>
      <p>
        함수는 코드의 블록을 캡슐화하는데 사용되므로, 비슷한 작업을 반복적으로
        수행할 때 굉장히 편리합니다.
      </p>
      <p>아래의 값들을 함수 없이 구했다면 어땠을지 상상해보세요!</p>
      <CodeBox code={lessonCode.reuseability} />
      <p>
        위의 코드에서는 더하기라는 로직을 함수화하여 재사용을 하고 있습니다.
        함수는 재사용성이 뛰어납니다.
      </p>
      <p>
        또한 함수의 내부 로직은 늘 일정하므로, 매개변수만 잘 바꿔주면 의도한
        값을 산출할 수 있습니다.
      </p>

      <h3>유지보수성</h3>
      <CodeBox code={lessonCode.maintainability1} />
      <p>
        Date 객체의 연, 월, 일을 구하는 로직을 가진 함수를 만들어보았습니다.
      </p>
      <p>이 함수는 yyyy-mm-dd 형식의 날짜를 제공합니다.</p>

      <br />
      <p>그런데 기획 중에 날짜 포맷이 dd-mm-yyyy로 바뀌게 되었습니다!</p>
      <p>이 경우엔 어떻게 해야할까요?</p>
      <p>함수의 내부 로직만 변경해주면 됩니다.</p>
      <br />

      <CodeBox code={lessonCode.maintainability2} />
      <p>
        함수의 로직을 바꾸면 함수를 사용하는 모든 코드들의 아웃풋도 함께
        변하겠지요.
      </p>
      <p>적절한 함수의 사용은 코드의 유지보수성을 크게 증가시킵니다.</p>

      <h3>가독성</h3>
      <p>
        함수 이름이 잘 지어져있으면 함수의 이름만으로도 내부의 로직과 기능을
        유추할 수 있습니다.
      </p>
      <CodeBox code={lessonCode.readability} />
      <p>
        사실 우리는 formatDate 함수명만 보고도 저 함수가 어떤 역할을 할 지
        유추할 수 있었습니다.
      </p>
      <p>
        (이게 올바른 예제인지는 모르겠네요. 아무튼 결국에는 재사용성,
        유지보수성, 가독성 모든 요소를 잡았습니다.)
      </p>

      <h2>함수의 구성요소</h2>
      <p>이번에는 함수의 구성요소를 살펴볼까요?</p>
      <p>
        친구에게 인사를 건네는 친절한 함수인 sayHello 함수를 만들어 보겠습니다.
      </p>
      <CodeBox code={lessonCode.functionComponent} />
      <p>이 함수의 구성요소를 풀어헤쳐보면 아래 그림과 같습니다.</p>
      <CustomImageWithCaption
        imageSrc={pngfunctionComponent}
        width={551}
        height={474}
        alt={"함수의 구성요소"}
        caption={"함수의 구성요소입니다."}
      />
      <ol>
        <li>함수이름 : 함수 식별자명</li>
        <li>
          파라미터(매개변수) : 함수가 동작할 때 사용할 데이터를 메모리에
          저장하는 변수(Variables)
        </li>
        <li>리턴문 : 함수가 실행되었을 때 반환할 값</li>
        <li>
          아규먼트(인수) : 함수를 호출했을 때 사용할 데이터. () 사이에 추가.
        </li>
      </ol>
      <p>함수를 선언할때는 파라미터를 사용하고,</p>
      <p>함수를 실행할때는 아규먼트를 사용합니다.</p>
      <p>
        저는 이것을 <b>파선아실</b>로 이해했지만, 사실 외울 필요까지는 없습니다.
      </p>

      <h2>함수 생성 방법</h2>
      <p>
        자바스크립트의 함수의 생성 방법 중 대표적인 세가지를 알아보도록
        하겠습니다.
      </p>
      <ol>
        <li>
          <b>함수 선언문</b>
        </li>
        <li>
          <b>함수 표현식</b>
        </li>
        <li>
          <b>화살표 함수</b>
        </li>
      </ol>
      <h3>1. 함수 선언문</h3>
      <CodeBox code={lessonCode.functionDefinition} />
      <p>
        함수 선언문으로 함수를 정의하는 방식입니다. 함수를 변수에 할당하지 않고,
        함수 자체를 선언합니다.
      </p>
      <h3>2. 함수 표현식</h3>
      <CodeBox code={lessonCode.functionExpression} />
      <p>
        함수 표현식으로 함수를 정의하는 방식입니다. 함수 자체를 특정 변수에
        할당한다는 것이 함수 선언문과의 차이점이라고 할 수 있겠습니다.
      </p>
      <p>표현식은 값이라고 말씀 드린 적이 있습니다.</p>
      <p>
        함수 표현식에서의 함수는 변수에 할당된 값처럼 동작합니다. 면접
        빈출이므로 알아두고 계시면 좋습니다!
      </p>
      <h3>3. 화살표 함수</h3>
      <CodeBox code={lessonCode.ArrowFunction} />
      <p>
        ES6부터 등장한 화살표 함수입니다. 위의 함수 선언문과 함수 표현식보다 더
        간결한 것을 보실 수 있습니다.
      </p>
      <br></br>
      <p>
        셋 다 함수를 만든다는 측면에서는 같지만, <b>함수 호이스팅</b>이나{" "}
        <b>this</b>의 유무 등 내부적인 동작 원리는 약간씩 다릅니다.
      </p>
      <p>
        일단 키워드만 알아두시고 다음에 필요하실 때 개인적인 공부를 하셔도 좋을
        것 같습니다.
      </p>
      <p>앎의 범주를 늘려나간 후에 모르는 것의 범주를 줄여봅시다.</p>
      <br />

      <h2>연습</h2>
      <ol>
        <ExerciseCard
          title={"아래 문제대로 함수를 선언해보세요!"}
          QuestionCode={lessonCode.exercise1}
          AnswerCode={lessonCode.exercise2}
        />
      </ol>
      <p>의도적인 연습은 기능 숙달에 많은 도움이 됩니다!!</p>
      <br />

      <h2>함수 호출</h2>
      <p>함수를 정의만 해서는 아무런 동작도 일어나지 않습니다.</p>
      <p>
        정의한 함수를 호출(실행)했을때 비로소 내가 만든 함수가 동작을 하기
        때문입니다.
      </p>
      <p>아래 코드를 볼까요?</p>
      <CodeBox code={lessonCode.functionExecute} />
      <p>해리는 제대로 인사를 했는데, 론은 인사를 하지 못했습니다.</p>
      <p>
        해리는 인사하는 기능을 제대로 <b>호출</b>한 데 반해, 론은 인사하는 함수
        자체를 <b>할당</b>했기 때문입니다.
      </p>
      <br></br>
      <p>
        함수 바디의 로직을 실행시키려면 함수를 <b>호출</b>해야 합니다.
      </p>
      <p></p>
      <p>함수는 함수명 뒤에 ()를 붙여서 호출하는데요.</p>
      <p>
        정의했던 함수의 <b>파라미터</b>에 <b>아규먼트</b>를 <b>대입하는 방식</b>
        으로 함수를 호출하시면 됩니다.
      </p>
      <p>
        sayHello의 <b>파라미터</b>는 인사할 친구(friend)였고, 해리가 함수를
        호출할 때 사용했던 <b>아규먼트</b>는 인사할 대상인 Ron 이었습니다.
      </p>

      <h2>리턴(Return)</h2>
      <p>return문의 역할을 잘 아는 것도 중요합니다.</p>
      <p>
        함수 몸체에 return 문이 없다면, 함수 몸체의 로직을 모두 수행하고
        undefined를 리턴합니다.
      </p>
      <p>sayHello 함수를 통해 리턴을 이해해봅시다.</p>
      <br />

      <CodeBox code={lessonCode.sayHelloNoReturn} />
      <p>
        위의 함수를 실행하면 console.log는 잘 나오는데 변수 helloLog에는
        undefined가 할당되어 있는 것을 보실 수 있습니다.
      </p>
      <p>
        함수 몸체에 return이 없다면 함수는 <b>undefined를 반환합니다.</b>
      </p>
      <br></br>

      <CodeBox code={lessonCode.sayHelloNoReturn2} />
      <p>
        함수 몸체에 return이 있다면, return문에 있는 데이터를 변수에 할당하고
        함수가 종료됩니다.
      </p>
      <p>함수가 종료되므로 return문 아래에 있는 코드들은 실행되지 않습니다.</p>
      <br />

      <h2>함수의 생명주기</h2>
      <p>함수의 생명주기는 함수가 호출 후 실행되고 소멸하는 과정입니다.</p>
      <p>
        함수를 호출하면 로직이 메모리로 불려와 실행됩니다. 이후 return문을 만나
        값을 반환하거나, 내부 로직이 전부 실행되면 호출한 함수의 로직이
        소멸합니다.
      </p>
      <p>
        이런 이유로 동일한 함수를 여러번 호출했을때도 호출된 각 함수들은
        독립적으로 작동합니다.
      </p>
      <br />

      <h2>연습</h2>
      <p>이번 연습 챕터에는 문제-해답 형식이 아닙니다.</p>
      <p>제시된 문제를 보고 왜 이런 답이 나올지 찬찬히 생각해봅시다!</p>
      <ol>
        <ExerciseCard
          QuestionCode={lessonCode.exercise3_Question}
          AnswerCode={lessonCode.exercise3_answer}
          title={"조건문과 return은 어떻게 동작하는 걸까요?"}
        />
        <ExerciseCard
          QuestionCode={lessonCode.exercise4_Question}
          AnswerCode={lessonCode.exercise4_Answer}
          title={
            "setTimeout은 첫번째 파라미터에는 함수를, 두번째 파라미터는 대기할 ms(밀리세컨드)를 인수로 받고, ms만큼 대기했다가 첫번째 파라미터로 받은 함수를 실행합니다. 함수의 반환값은 어떻게 나올지 생각해봅시다."
          }
        />
        <ExerciseCard
          QuestionCode={lessonCode.exersice5_Question}
          AnswerCode={lessonCode.exersice5_Answer}
          title={
            "비동기체험2 함수 자체는 바로 값이 리턴되고, setTimeout 내 함수는 2초 뒤 실행될 것입니다."
          }
        />
      </ol>
      <p>
        비동기 함수때문에 많이 당황하셨을 것 같습니다. 비동기는 챕터를 하나 더
        빼서라도 말씀드려야 할 중요한 개념입니다.
      </p>
      <p>
        자바스크립트와 비동기는 뗄레야 뗄 수 없는 관계이기 때문인데요. 이는
        다음에 더 자세한 내용으로 설명을 드리겠습니다.
      </p>
      <p>일단은 맛보기로 공유해드렸습니다!</p>
      <p>고생하셨습니다!</p>
    </div>
  );
}
