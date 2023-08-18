import styles from "@/styles/Chapter.module.scss";
import { chaptersInfo } from "../../JS_CHAPTER_INFO";
import CustomImageWithCaption from "@/app/_component/_common/CustomImageWithCaption";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import primitive1 from "#/chap3/primitive-1.png";
import primitive2 from "#/chap3/primitive-2.png";
import primitive3 from "#/chap3/primitive-3.png";
import primitive4 from "#/chap3/primitive-4.png";
import primitive5 from "#/chap3/primitive-5.png";
import ActNavigator from "@/app/_component/_curriculum/ActNavigator";
import CustomLink from "@/app/_component/_common/CustomLink";
import ExerciseCard from "@/app/_component/_curriculum/ExcerciseCard";

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
  primitiveAndReference: `let a = 5
let b = 5
if (a === 5) {
  console.log("a와 b가 일치합니다!") // 찍힐까요?
}

let c = []
let d = []
if (c === d) {
  console.log("c와 d가 일치합니다!") // 찍힐까요?
}`,
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
        위의 말을 간단히 하면,{" "}
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
      <p>아래 코드는 true일까요? false일까요?</p>
      <p>참입니다.</p>
      <p>그렇다면 이 코드들은 true일까요? false일까요?</p>
      <p>놀랍게도 이들은 false입니다.</p>
      <p>데이터가 똑같은데 왜 false인지 궁금하실 수 있는데요.</p>
      <p>이런 현상을 이해하기 위해서 원시 타입과 참조 타입을 알아야합니다.</p>
      <h3>원시 타입</h3>
      <p>
        원시 타입은 <b>변수에 실제 값이 할당된다는 것</b>과,{" "}
        <b>저장된 값은 변경되지 않는다(불변성을 지닌다)</b>는 특징을 가진 데이터
        타입들입니다.
      </p>
      <p>실제 값이 할당되고, 불변성을 지닌다는 것은 무슨 의미일까요?</p>
      <p>코드와 그림을 통해 살펴보겠습니다.</p>
      <CodeBox code={lessonCode.primitiveDeclarationA} />
      <p>변수 a가 선언되었습니다. a에는 숫자 25가 할당되어 있습니다.</p>
      <p>
        숫자 25가 메모리에 기록되고 식별자가 메모리 주소를 참조하는 것을
        대략적으로 그려보았습니다.
      </p>
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
      <CustomImageWithCaption
        imageSrc={primitive2}
        width={347}
        height={450}
        alt='변수 B에 a가 할당'
        caption='변수 b에 a가 할당되었지만, 25는 원시 타입이기 때문에 b는 a를 참조하지 않고 값만 복제해옵니다.'
      />
      <br />
      <p>이제 변수 a에 다른 값을 재할당 해보겠습니다.</p>
      <CodeBox code={lessonCode.primitiveRedeclarationA} />
      <p>a에 30을 재할당 했습니다.</p>
      <p>그렇다면 이전에 변수 a에 저장되어 있던 25는 어디로 가게 될까요?</p>
      <p>정답은 25는 그대로 거기 있습니다.</p>
      <p>
        자바스크립트의 원시 타입은 불변성이기 때문에 메모리에 저장된 값이 바뀌지
        않습니다.
      </p>
      <p>
        그 대신 메모리의 다른 부분에 30이 저장되고, 변수 a는 30이 저장된
        메모리의 주소를 다시 참조합니다.
      </p>
      <p>그림으로 표시하면 아래와 같습니다.</p>
      <CustomImageWithCaption
        imageSrc={primitive3}
        width={347}
        height={450}
        alt='변수 a에 30이 재할당'
        caption='변수 a에 30을 재할당 했습니다. a는 30이 저장된 메모리 주소를 참조합니다.'
      />
      <p>이제 변수 a는 30이 담긴 메모리의 주소를 참조합니다.</p>
      <p>
        그렇다면 데이터가 있긴 하지만, 더이상 참조되지 메모리 주소는 어떻게
        될까요?
      </p>
      <p>
        어떤 변수에도 참조되지 않는 메모리는 <b>가비지 컬렉터</b>라는 것에 의해
        회수될 것 입니다.
      </p>
      <p>
        25는 더이상 참조되지 않습니다. 따라서 가비지 컬렉터에 의해 메모리가
        회수됩니다.
      </p>
      <p>
        다만, 가비지 컬렉터는 언어 차원의 내부적 동작에 의해 실행되므로,
        메모리의 회수 시기는 우리가 알 수 없습니다.
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
      <p>
        25 + 30 이라는 표현식이 계산되어 메모리의 다른 부분에 새롭게 쓰여집니다.
      </p>
      <p>그리고 변수 b는 표현식이 저장된 메모리의 주소를 참조하게 됩니다.</p>
      <p>이로써</p>
      <ul>
        <li>
          <b>원시 타입 데이터를 가진 변수에는 새로운 값이 할당된다는 것</b>
        </li>
        <li>
          <b>원시 타입 데이터는 불변성을 가짐</b>
        </li>
      </ul>
      <p>을 설명할 수 있습니다.</p>
      <br />
      <p>원시 타입의 선언을 실행 컨텍스트의 관점에서 한번 이해해볼까요?</p>
      <p>
        변수 선언은 실행 컨텍스트와 연관이 깊다라는 것을 이전에 배웠었습니다.
      </p>
      <p>
        함수가 실행되면 실행 컨텍스트가 생성되고, 변수들이 환경 레코드에
        등록되지요.
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
      <p>참조 타입은 원시 타입과는 근본적인 구조가 약간 다릅니다.</p>
      <p>글로 설명하기 전에 코드로 퀴즈를 하나 내보겠습니다.</p>
      <p>아래의 console.log가 출력이 될까요? 되지 않을까요?</p>
      <CodeBox code={lessonCode.primitiveAndReference} />
      {/* a와 b는 일치하다고 하고 c와 d는 일치하지 않는다고 할 것이다 참조 타입의
      데이터는 메모리의 힙 이라는 부분에 별도로 생성됨 변수는 그 메모리 힙
      부분에 선언된 참조 타입 데이터의 메모리 주소를 참조함 c와 d는 빈 배열임은
      같지만, 힙에 선언된 각자 다른 배열임 그래서 c와 d는 다른 배열임 그림으로
      보면 아래와 같음 순환배열 실행 컨텍스트 원시 타입과 참조 타입 종류 */}
      <p>ㄹㄹ</p>
      <h3>Exercise</h3>
      <p>순환 참조 문제1</p>
      <p>순환 참조 문제2</p>
      <h2>배열의 구성요소</h2>
      <h3>엘리먼트</h3>
      <h3>인덱스</h3>
      <h2>Exercise</h2>
      <p>배열의 length, 배열의 최대 인덱스</p>
      <p>배열 내 모든 데이터 console.log</p>
    </div>
  );
}
