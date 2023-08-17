import styles from "@/styles/Chapter.module.scss";
import { chaptersInfo } from "../../JS_CHAPTER_INFO";
import recursiveCallStack from "#/chap2/recursiveCallStack.png";
import CustomImageWithCaption from "@/app/_component/_common/CustomImageWithCaption";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import ActNavigator from "@/app/_component/_curriculum/ActNavigator";
import CustomLink from "@/app/_component/_common/CustomLink";
import ExerciseCard from "@/app/_component/_curriculum/ExcerciseCard";

const lessonCode = {};

export default function Lecture() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum="js"
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
      <p>변수 a가 선언되었습니다. a에는 숫자 25가 할당되어 있습니다.</p>
      <p>
        사실 a는 변수의 식별자입니다. 즉 a는 25가 담긴 메모리의 어느 주소를
        참조하고 있습니다.
      </p>
      <p>이 후 변수 b가 선언됩니다. b에는 a가 할당되어 있습니다.</p>
      <p>
        이 때 b가 a를 참조했으나, 원시 타입이기 때문에 메모리 주소가 아닌 값만
        복제해온 후 별도의 메모리에 저장합니다.
      </p>
      <p>즉, a와 b는 각자 다른 메모리 주소에 별도의 값을 가지고 있습니다.</p>
      <p>다음으로는 a의 값을 바꿔보겠습니다.</p>
      <p>
        변수에 할당된 데이터를 수정할 때에도 메모리 상 데이터가 수정되는 것이
        아니라, 새로운 메모리 주소에 데이터가 할당됩니다.
      </p>
      <p>원시 타입의 데이터는 불변성이기 때문입니다.</p>
      <p>b에 b와 a를 더한 값을 할당해보겠습니다.</p>
      <p>
        기존에 b가 참조하고 있던 메모리 주소의 값이 바뀌는 것이 아니라, 55가
        새롭게 계산되어 다른 메모리 주소에 할당됩니다.
      </p>
      <p>그리고 b 식별자가 참조하는 메모리의 주소가 변경됩니다.</p>
      <p>
        기존에 b가 참조하고 있던 메모리 주소는 참조가 사라졌으므로, 나중에
        가비지 컬렉터에 의해 데이터가 메모리에서 제거됩니다.
      </p>
      <p>
        원시 타입 데이터의 저장을 실행 컨텍스트의 관점에서 보면 아래 그림과 같이
        구성되어 있을 것입니다.
      </p>
      <p>
        함수가 실행되고 실행 컨텍스트가 생성되어 코드가 평가될 때, 변수들도 함께
        평가되어 스택에 저장됩니다.
      </p>

      <h3>참조 타입</h3>
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
