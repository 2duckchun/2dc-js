import styles from "@/styles/Chapter.module.scss";
import { chaptersInfo } from "../../JS_CHAPTER_INFO";
import functionMachine from "#/chap2/functionmachine.png";
import CustomImageWithCaption from "@/app/_component/_common/CustomImageWithCaption";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import ActNavigator from "@/app/_component/_curriculum/ActNavigator";
import CustomLink from "@/app/_component/_common/CustomLink";

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
};

export default function Chap0Act1() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum='js'
        highlightActNum={1}
        chapterInfo={chaptersInfo.chapter2}
      ></ActNavigator>
      <h1>함수의 기본</h1>
      <p>
        이 챕터에서는 함수가 무엇인지부터 시작하여 자바스크립트 엔진 내부에서의
        동작 방식까지 배우게 될 것입니다.
      </p>
      <p>함수의 생태계는 매우 방대합니다.</p>
      <p>
        함수를 이해하기 위해선 다양한 내용들을 다루어야 하기 때문에, 자료를
        만들면서 정말 많은 압박을 받았습니다. 하지만 이 자료를 준비하는 과정에서
        저 또한 많은 공부를 하게 되었습니다.
      </p>
      <p>
        만약 강의 자료가 너무 어렵게 느껴지거나 혼란스럽게 보인다면 언제든
        코멘트를 남겨주세요!
      </p>
      <p>의견을 주시는 것은 제게 큰 영광입니다.</p>
      <br></br>
      <p>
        이 챕터가 여러분의 자바스크립트 여행에 큰 도움이 되었으면 하는
        바람입니다.
      </p>
      <p>그럼 시작해봅시다!!</p>
      <br></br>
      <CustomImageWithCaption
        imageSrc={functionMachine}
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
        함수는 쉽지 않은 개념이지만, 자바스크립트 함수 자체의 정의를 내리는 것은
        어렵지 않습니다.
      </p>
      <p>
        함수는 어떤 코드 실행 단위를 묶어서 나중에 호출할 수 있게 만들어 놓은
        도구라고 정의할 수 있습니다.
      </p>
      <p>물론 이 도구에는 인풋과 아웃풋이 존재합니다.</p>
      <p>
        코드를 실행 단위로 만들어서 나중에 호출할 수 있다는 것은 프로그래밍에
        있어서 크나 큰 장점인데요!
      </p>
      <p>함수를 이용했을때의 장점은 아래와 같습니다.</p>
      <h2>적절한 함수 사용의 장점</h2>
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
      <h3>유지보수성</h3>
      <p>Date 객체의 연, 월, 일을 구하는 로직을 가진 함수를 만들었습니다.</p>
      <p>이 함수는 yyyy-mm-dd 형식의 날짜를 제공합니다.</p>
      <CodeBox code={lessonCode.maintainability1} />
      <p>그런데 나중에 날짜 제공 포맷이 dd-mm-yyyy로 바뀌게 되었습니다!</p>
      <p>이 경우엔 어떻게 해야할까요.</p>
      <p>아시다시피 함수의 내부 로직만 변경해주면 됩니다.</p>
      <CodeBox code={lessonCode.maintainability2} />
      <p>
        formatDate를 사용하는 곳이 얼마나 많던 간에, 함수의 로직만 수정해주면 이
        함수를 사용하는 모든 곳의 로직은 변경됩니다.
      </p>
      <p>
        함수는 유지보수하기 굉장히 편리합니다! (함수 하나에 여러가지 기능이
        들어가지 않은 한 말입니다!)
      </p>
      <h3>가독성</h3>
      <p>
        함수 이름이 잘 지어져있으면 함수의 이름만으로도 내부의 로직과 기능을
        유추할 수 있습니다.
      </p>
      <p>
        로직을 코드와 분리하는 것도 함수의 역할 중 하나입니다. 복잡한 로직이
        코드에 있는 것 보다 추상화된 이름이 코드에 있는 편이 좀 더 읽기
        편하겠죠!
      </p>
      <CodeBox code={lessonCode.readability} />
      <p>
        (이게 올바른 예제인지는 모르겠네요. 아무튼 결국에는 재사용성,
        유지보수성, 가독성 모든 요소를 잡았습니다.)
      </p>
      <p></p>
      <h2>함수 선언</h2>
      <h3>함수 구성요소</h3>
      <p>
        함수를 선언하는 방법은 여러가지이지만, 함수를 구성하는 요소는
        정해져있습니다.
      </p>
      <h3>선언식</h3>
      <h3>표현식</h3>
      <h3>화살표 함수</h3>
      <h2>함수 호출</h2>
      <p>함수를 처음 공부할 때 함수의 호출이 너무 헷갈렸습니다.</p>
      <p>return의 존재를 확실하게 깨우치지 못했기 때문입니다.</p>
      <p>함수에서는 return이 제일 중요한 개념입니다.</p>
      <p>어쩌구 저쩌구 문제...</p>
      <h2>함수의 생명주기</h2>
      <h2>실행 컨텍스트</h2>
      <p>
        저번에 스코프에 대해 배웠다. 실행 컨텍스트는 아마 스코프의 상위
        개념이다.
      </p>
      <p>컨텍스트의 뜻 = 문맥. 프로그래밍이 실행되는 단위?</p>
      <p>함수는 그냥 실행되는게 아니라 컨텍스트에 의해 호출된다...</p>
      <p>함수도 사라진다. 언제?</p>
      <h2>연습</h2>
      <p>함수 선언</p>
      <p>함수 실행과 실행하지 않음</p>
      <p>리턴값이 있고 없고</p>
      <p>스코프 생각해보세요</p>
    </div>
  );
}
