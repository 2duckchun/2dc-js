import styles from "@/styles/Chapter.module.scss";
import { chaptersInfo } from "../../JS_CHAPTER_INFO";
import CustomImageWithCaption from "@/app/_component/_common/CustomImageWithCaption";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import ActNavigator from "@/app/_component/_curriculum/ActNavigator";
import globalcontext from "#/chap2/globalcontext.png";
import localcontext1 from "#/chap2/localcontext1.png";
import localcontext2 from "#/chap2/localcontext2.png";
import callstackout1 from "#/chap2/callstackout1.png";
import callstackout2 from "#/chap2/callstackout2.png";
import emptycallstack from "#/chap2/emptycallstack.png";
import CustomLink from "@/app/_component/_common/CustomLink";
import ExerciseCard from "@/app/_component/_curriculum/ExcerciseCard";

const lessonCode = {
  firstClassObject: `// 1. 변수에 할당 가능
const myFunction = function() {
  console.log("Hello, world!");
};

// 2. 함수의 매개변수로 전달 가능
function executeFunction(func) {
  func();
}
executeFunction(myFunction);

// 3. 함수의 반환값으로 사용 가능
function returnFunction() {
  return myFunction;
}
const returnedFunction = returnFunction();
returnedFunction(); // "Hello, world!" 출력`,

  context: `let global = 'global'

function localFn1(num) {
  let localVar1 = 'local1'
  
  function localFn2(num) {
    let localVar2 = 'local2'
    console.log(global, localVar1, localVar2, num)
    console.log("localFn2 코드 실행 종료")
  }
  
  let newNum = num + 50
  localFn2(newNum)
  console.log("localFn1 코드 실행 종료")
}
  
localFn1(50)

console.log("전역 코드 실행 종료")
`,

  localFn2: `function localFn2(num) {
  let localVar2 = 'local2'
  console.log(global, localVar1, localVar2, num)
  console.log("localFn2 코드 실행 종료")
}`,
  contextAnswer: `let global = 'global'

function localFn1(num) {
  let localVar1 = 'local1'
  
  function localFn2(num) {
    let localVar2 = 'local2'
    console.log(global, localVar1, localVar2, num)
    console.log("localFn2 코드 실행 종료")
  }
  
  let newNum = num + 50
  localFn2(newNum)
  console.log("localFn1 코드 실행 종료")
}
  
localFn1(50)

console.log("전역 코드 실행 종료")

// global local1 local2 100 (출력)
// localFn2 코드 실행 종료 (출력)
// localFn1 코드 실행 종료 (출력)
// 전역 코드 실행 종료 (출력)
`,
};

export default function Chap0Act1() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum='js'
        highlightActNum={2}
        chapterInfo={chaptersInfo.chapter2}
      ></ActNavigator>
      <h1>클로저(closure)</h1>
      <p>클로저를 익히면 자바스크립트의 숙련도가 확 오르는 것 같습니다.</p>
      <p>
        클로저를 익히기 위해서는 자바스크립트의 동작원리를 어느정도 알아야 하기
        때문인데요.
      </p>
      <p>클로저의 이해는 어렵습니다. 하지만 어렵기 때문에 가치가 있습니다.</p>
      <p>이 챕터에서는 클로저의 이해를 위한 빌드업 과정을 많이 거칩니다.</p>
      <p>
        먼저 <b>일급 객체</b>에 대해 설명을 드릴 것입니다.
      </p>
      <p>자바스크립트의 함수가 일급 객체이기 때문입니다.</p>
      <p>
        다음으로 <b>실행 컨텍스트</b>의 존재와, 간단한 동작 원리를 공부해볼 것
        입니다.
      </p>
      <p>실행 컨텍스트에 대한 간단한 이해를 마치신다면,</p>
      <p>
        내가 작성한 코드가 어떤 순서대로 실행이 되는지를 개념적으로 아실 수 있게
        됩니다.
      </p>
      <p>
        마지막 빌드업으로 실행 컨텍스트에 존재하는 <b>환경 레코드</b>와{" "}
        <b>렉시컬 환경</b>에 관한 내용을 다뤄봅니다.
      </p>
      <p>
        위에 나온 빌드업들을 개념적으로 이해하신다면, 클로저 현상은 쉽게
        이해하실 수 있을 겁니다.
      </p>
      <p>다소 긴 호흡이 되실 수 있습니다. 가시죠!</p>
      <br />
      <h2>일급 객체(first class Object)</h2>
      <p>일급 객체는 프로그래밍 언어 이론에서 사용되는 개념으로써,</p>
      <p>아래와 같은 조건을 만족하는 객체를 일급 객체라고 표현합니다.</p>
      <ol>
        <li>변수에 할당이 가능해야 한다.</li>
        <li>매개변수(parameter)에 전달이 가능해야 한다.</li>
        <li>함수의 반환값(return)으로 사용이 가능해야 한다.</li>
      </ol>
      <p>자바스크립트에서는 함수와 일반 객체를 모두 일급 객체로 취급합니다.</p>
      <CodeBox code={lessonCode.firstClassObject} />
      <ol>
        <li>함수를 표현식으로 변수에 할당할 수 있고,</li>
        <li>함수를 다른 함수의 파라미터로 넘길수도 있고,</li>
        <li>함수의 리턴값으로 함수를 사용할 수 있습니다.</li>
      </ol>
      <p>아무런 위화감이 없지요?</p>
      <p>자바스크립트의 함수가 일급 객체가 되므로써 얻는 장점으로는</p>
      <p>프로그래밍 패턴이 자유로워 진다는 것이 있습니다.</p>
      <p>그리고 자바스크립트의 함수가 일급 객체의 특성을 띈다는 것 때문에</p>
      <p>클로저 현상이 일어난다고도 볼 수 있습니다.</p>
      <p>
        일단은 <b>자바스크립트 함수 = 일급 객체</b> 라고 인지만 하셔도 될 것
        같습니다.
      </p>
      <br />
      <h2>실행 컨텍스트</h2>
      <p>
        실행 컨텍스트는 코드의 실행에 필요한 환경을 지닌 하나의 공간(Context)
        입니다.
      </p>
      <p>별이 탄생하려면 별이 있을 우주가 필요하듯이,</p>
      <p>코드가 별이라고 한다면 실행 컨텍스트는 우주라고 할 수 있겠습니다.</p>
      <p>즉, 실행 컨텍스트는 코드가 동작할 수 있는 환경 그 자체 입니다.</p>
      <br />
      <p>그럼 실행 컨텍스트가 언제 생기는지, 언제 사라지는지 알아야겠지요.</p>
      <p>
        실행 컨텍스트는 코드가 일단 실행될 때(글로벌), 함수가 실행되거나(로컬),
        블록문이 실행되었을 때(로컬) 생겨나고,
      </p>
      <p>해당 컨텍스트의 코드가 다 읽히면 제거됩니다.</p>
      <p>
        코드 실행 시 맨 처음 무조건적으로 생기는 컨텍스트를 글로벌 컨텍스트라고
        하고,
      </p>
      <p>
        글로벌 컨텍스트 내부의 코드 진행에 따라 생기는 별도의 컨텍스트를 로컬
        컨텍스트라고 합니다.
      </p>
      <br />
      <p>실행 컨텍스트는 여러가지 환경으로 구성이 되어 있는데요.</p>
      <p>중요하게 보실 것은 3가지 입니다.</p>
      <ol>
        <li>환경 레코드 : 컨텍스트 내부에 선언된 변수가 저장되는 공간</li>
        <li>렉시컬 환경 : 다른 컨텍스트 공간의 변수를 참조할 수 있는 환경</li>
        <li>
          콜 스택 : 컨텍스트의 생명주기에 관련된 자료구조. 컨텍스트가 생기면
          콜스택에 쌓이고, 코드가 다 읽히면 콜스택에서 제거됨.
        </li>
      </ol>
      <p>이제부터는 코드와 그림을 통해 알아보겠습니다.</p>
      <CodeBox code={lessonCode.context} />
      <p>한줄 한줄씩 읽어보면서 코드의 동작 원리를 이해해봅시다.</p>
      <br />
      <CustomImageWithCaption
        imageSrc={globalcontext}
        width={837}
        height={563}
        alt='전역 컨텍스트'
        caption='전역 컨텍스트의 생성 과정'
      />
      <p>코드를 실행시키면 제일 먼저 전역 컨텍스트가 생성됩니다.</p>
      <p>
        이 때, 코드를 실행해서 어떤 동작을 일으키기 전에, 코드의 변수들을 한번
        쓱 훑어보는 과정이 있습니다.
      </p>
      <p>그것을 평가 과정이라고 합니다.</p>
      <p>
        평가 과정에서, 변수는 실행 컨텍스트의 환경 레코드라는 부분에 기록이
        됩니다.
      </p>
      <p>( 우리가 변수를 참조하는 공간이 이 환경 레코드 부분이며,</p>
      <p>변수를 수정할때도 환경 레코드에 등록된 값들이 변경됩니다.) </p>
      <p>그리고 렉시컬 환경도 연결이 되는데요.</p>
      <p>
        전역 컨텍스트는 최상위 컨텍스트이므로 더이상 참조할 렉시컬 스코프가
        없습니다.
      </p>
      <p>따라서 전역 컨텍스트의 렉시컬 환경은 null이 참조됩니다.</p>
      <p>
        이렇게 생성된 실행 컨텍스트는 콜 스택이라는 자료구조에 올라가게 됩니다.
      </p>
      <p>이 후, 코드를 해석하며 실행하기 시작합니다.</p>
      <br />
      <CustomImageWithCaption
        imageSrc={localcontext1}
        width={837}
        height={563}
        alt='로컬 컨텍스트1'
        caption='로컬 컨텍스트의 생성 과정'
      />
      <p>코드가 실행되는 과정에서 localFn1 함수가 실행 되었습니다.</p>
      <p>앞서 말씀드렸듯, 함수의 실행은 실행 컨텍스트의 생성을 야기합니다.</p>
      <p>
        로컬 실행 컨텍스트도 전역 실행 컨텍스트와 동일한 생성 과정을 거칩니다.
      </p>
      <p>하지만 변수 등록 과정에서 하나의 차이가 있습니다.</p>
      <p>바로, 함수는 파라미터가 있다는 건데요.</p>
      <p>
        전역에서 localFn1 함수를 실행할 때 num 파라미터에 50을 할당했습니다.
      </p>
      <p>
        따라서, 해당 함수의 실행 컨텍스트의 환경 레코드에는 num = 50 이
        추가됩니다.
      </p>
      <p>
        이후에 함수 몸체에 있는 변수들과 함수들이 환경 레코드에 마저 등록이
        됩니다.
      </p>
      <p>실행 컨텍스트 생성 과정이 끝나면 다시 코드가 실행되는데요.</p>
      <p>
        자료 구조상 콜스택의 가장 상단에 있는 코드부터 처리가 되어야 하기 때문에
      </p>
      <p>콜스택의 최상단에 위치한 로컬 실행 컨텍스트의 코드가 실행 됩니다.</p>
      <br />
      <CustomImageWithCaption
        imageSrc={localcontext2}
        width={837}
        height={563}
        alt='로컬 컨텍스트2'
        caption='로컬 컨텍스트의 생성 과정'
      />
      <p>localFn1의 함수 몸체 내부에는 localFn2 함수가 선언 되어있습니다.</p>
      <p>그리고 코드 진행 과정에서 localFn2이 호출됩니다.</p>
      <p>
        어찌되었든 함수가 호출된 것이므로, 실행 컨텍스트가 하나 더 만들어집니다.
      </p>
      <p>여기서 중요한 점은 렉시컬 환경의 참조입니다.</p>
      <p>
        함수는 렉시컬 환경을 참조할 때, <b>자신이 선언된 곳의 렉시컬 환경</b>을
        참조합니다.
      </p>
      <p>
        따라서 localFn2는 자신이 선언된 localFn1의 렉시컬 환경을 참조하게
        됩니다.
      </p>
      <p>
        함수 호출 구조상 localFn2가 localFn1보다 오래 존재할 수 밖에 없기 때문에
        아무런 문제가 없습니다.
      </p>
      <p>
        (localFn2의 코드가 모두 실행되고 콜스택에서 치워져야만 localFn1의 코드가
        실행되므로)
      </p>
      <br />
      <CodeBox code={lessonCode.localFn2} />
      <p>상단의 코드에서 localFn2만 분리해서 가져온 것입니다.</p>
      <p>
        localFn2의 환경 레코드가 가지고 있는 변수는 localVar2와 num밖에 없지만,
      </p>
      <p>
        자기 자신의 환경 레코드에 없는 변수들은 렉시컬 환경에 의해 참조됩니다.
      </p>
      <p>
        따라서 global, localVar1, localVar2, num을 모두 출력할 수 있게 됩니다.
      </p>
      <p>
        모든 console.log가 실행되면 localFn2의 코드 진행이 끝나므로, 실행
        컨텍스트는 콜스택에서 빠지게 됩니다.
      </p>
      <br />
      <CustomImageWithCaption
        imageSrc={callstackout1}
        width={837}
        height={563}
        alt='콜스택에서 실행 컨텍스트가 제거됩니다.'
        caption='코드 진행이 끝나면 콜스택에서 제거됩니다.'
      />
      <p>localFn2이 콜스택에서 사라졌습니다.</p>
      <p>
        이것을 <b>함수의 생명주기가 끝났다</b> 라고도 표현할 수 있습니다.
      </p>
      <p>이제 다시 localFn1의 실행 컨텍스트로 돌아왔는데요.</p>
      <p>localFn1의 남은 코드도 console.log밖에 없습니다.</p>
      <p>
        따라서 console.log를 실행한 후 localFn1의 실행 컨텍스트도 콜스택에서
        제거됩니다.
      </p>
      <br />
      <CustomImageWithCaption
        imageSrc={callstackout2}
        width={837}
        height={563}
        alt='콜스택에서 실행 컨텍스트가 제거됩니다.'
        caption='코드 진행이 끝나면 콜스택에서 제거됩니다.'
      />
      <p>이제 전역 실행 컨텍스트만이 남았습니다.</p>
      <p>
        전역 컨텍스트도 마지막 console.log를 출력하면 콜스택에서 사라집니다.
      </p>
      <p>
        코드 실행이 모두 끝나면 콜스택에서 전역 컨텍스트도 사라지고, 모든 것들이
        종료됩니다.
      </p>
      <br />
      <CustomImageWithCaption
        imageSrc={emptycallstack}
        width={387}
        height={558}
        alt='콜스택에서 실행 컨텍스트가 제거됩니다.'
        caption='전역 실행 컨텍스트 생명주기의 종료는 코드 진행이 끝났음을 의미합니다.'
      />
      <CodeBox code={lessonCode.contextAnswer} />
      <p>한번에 이해되기에는 다소 어려울 수 있습니다.</p>
      <p>
        코드와 스크린샷을 다시 한번 대조해보시고, 이해하는 시간을 가지시는 것을
        추천합니다!
      </p>
      {/* <p>실행 컨텍스트는 코드가 실행되는 환경을 의미합니다.</p>
      <p>
        전역의 코드가 실행되거나, 함수가 실행될 경우에 각각의 실행 컨텍스트도
        같이 생성되는데요.
      </p>
      <p>이 컨텍스트에는 코드의 실행에 필요한 환경들이 갖추어져 있습니다.</p>
      <p>이것을 전부 이해하기는 어렵습니다.</p>
      <p>
        하지만 클로저 현상을 이해하기 위해서는 렉시컬 환경을 꼭 먼저 이해해야
        합니다.
      </p>
      <p>일단 코드를 통해 실행 컨텍스트와 렉시컬 환경을 이해해봅시다.</p>

      <p>코드가 들어감</p>
      <p>자바스크립트는 싱글 스레드 기반의 언어입니다.</p>
      <p>즉, 한번에 하나의 작업만을 처리할 수 있는데요.</p>
      <p>작업의 대기열을 스택이라는 자료구조로 처리를 합니다.</p>
      <p>(프링글스 통을 생각하시면 이해가 됩니다.)</p>
      <p>먼저 코드를 실행하면 전역 컨텍스트가 형성이 됩니다.</p>
      <p>
        코드를 진행하고 나니 함수가 호출이 되었네요. 함수의 실행 컨텍스트가
        생깁니다.
      </p>
      <p>이제 전역 컨텍스트 스택 위에 함수 실행 컨텍스트가 쌓입니다.</p>
      <p>코드는 이 함수 실행 컨텍스트의 코드를 읽습니다.</p>
      <p>
        읽다보니 함수 내부에 함수가 선언되어 있고, 그 함수를 호출하고 있네요?
      </p>
      <p>이 함수의 실행 컨텍스트도 컨텍스트 스택위에 쌓입니다.</p>
      <p>
        그리고 console.log를 출력과 동시에 ~함수의 모든 코드가 다 읽혔습니다.
      </p>
      <p>작업이 끝난 ~함수의 실행 컨텍스트는 사라집니다.</p>
      <p>이제 다음 작업을 준비해야겠지요. b함수의 나머지 코드가 읽힙니다.</p>
      <p>
        그리고 다시 전역 컨텍스트로 돌아와서, 마지막 console.log가 읽힙니다.
      </p>
      <p>이것이 자바스크립트가 코드를 처리하는 방식입니다.</p>
      <p>
        자바스크립트의 함수는 코드를 선언하고 관리할 수 있는 하나의 소우주와
        같습니다.
      </p>
      <p>
        그래서 함수를 실행할때마다 그 함수에 맞는 실행 컨텍스트도 같이 생기게
        됩니다.
      </p> */}
      <h2>함수와 일급객체</h2>
      <p>어떻게 함수가 함수를 리턴할 수 있는 걸까요?</p>
      <p>자바스크립트의 함수는 일급 객체라는 특성을 지니고 있는데요.</p>
      <p>일급 객체의 특성은 다음과 같습니다.</p>
      <p>블라블라</p>
      <p>이것을 외우실 필요는 없습니다.</p>
      <p>이러한 특징 덕분에 함수에 다양한 것을 시도할 수 있고,</p>
      <p>클로저 현상도 설명할 수가 있습니다.</p>
      <h2>렉시컬 스코프</h2>
      <p>
        함수가 선언될 때, 변수를 참조할 수 있는 스코프도 함께 생성이 됩니다.
      </p>
      <p>
        이 때 스코프의 형성은 함수의 호출이 아니라, 함수의 선언에 영향을 받게
        됩니다.
      </p>
      <p>코드를 통해 보겠습니다.</p>
      <p>전역에 선언</p>
      <p>함수 내부에 선언</p>
      <p>
        즉, 함수 내부에 함수가 선언된다면, 내부에 선언된 함수의 스코프는 본인이
        선언된 함수의 스코프를 참조합니다.
      </p>
      <h3>함수가 함수를 리턴한다면?</h3>
      <p>여기서, 함수가 함수를 리턴해버린다면 어떨까요?</p>
      <p>외부 함수는 함수를 리턴하면서 생명주기가 끝나버렸습니다.</p>
      <p>
        하지만 내부 함수는 생명주기가 끝나버린 함수의 변수를 참조하고 있는
        상황입니다.
      </p>
      <p>
        외부 함수의 생명주기가 끝났음에도 불구하고, 그것을 참조하는 함수가 있을
        경우,
      </p>
      <p>
        렉시컬 환경은 사라지지 않고 남아있는 현상을 클로저 현상이라고 합니다!
      </p>
      <h2>클로저의 장점</h2>
      <h2>클로저의 단점</h2>
    </div>
  );
}
