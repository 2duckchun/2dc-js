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
  closure1: `function outerFn() {
  let num = 0;

  function innerFn() {
    return ++num
  }

  return innerFn
}

const test1 = outerFn() // test1은 innerFn이 됩니다.
const test2 = outerFn() // test1은 innerFn이 됩니다.

test1()
test1()
const test1Number = test1() // 3

test2()
const test2Number = test2() // 2`,
  closureQuestion1: `function mimi() {
  let count = 5;

  return () => {
    count++
    return count
  }
}

function yujin() {
  let num = 3;

  return () => {
    num = num * 2
    return num
  }
}

const youngji = mimi()
const eunji = yujin()

mimi()
mimi()

const 지 = youngji() + eunji() // 지는 뭘까요?
const 구 = youngji() + eunji() // 구는 뭘까요?
const 오 = youngji() + eunji() // 오는 뭘까요?
const 락 = youngji() + eunji() // 락은 뭘까요?
youngji()
eunji()
const 실 = youngji() + eunji() // 실은 뭘까요?
`,
  closureAnswer1: `function mimi() {
  let count = 5;

  return () => { // 화살표 함수가 리턴됩니다. 함수는 재사용이 가능합니다.
    count++ // count는 mimi의 렉시컬 환경을 참조하고 있습니다.
    return count
  }
}

function yujin() {
  let num = 3;

  return () => { // 화살표 함수가 리턴됩니다. 함수는 재사용이 가능합니다.
    num = num * 2 // num은 yujin의 렉시컬 환경을 참조하고 있습니다.
    return num
  }
}

const youngji = mimi() // count = 6
const eunji = yujin() // num = 6

mimi() // 함정입니다! 클로저는 생기지 않습니다.
mimi() // 함정입니다! 클로저는 생기지 않습니다.

const 지 = youngji() + eunji() // count = 7, num = 12
const 구 = youngji() + eunji() // count = 8, num = 24
const 오 = youngji() + eunji() // count = 9, num = 48
const 락 = youngji() + eunji() // count = 10, num = 96
youngji() // count = 11
eunji() // num = 192
const 실 = youngji() + eunji() // count = 12, num = 384
`,
  closureWork: `
function closureWork() {
  const task1 = 0
  const task2 = 0 

  const TASK_1_Action = () => {
    task1 += 1
  }

  const TASK_2_Action = () => {
    task2 += 1
  }

  return () => {
    task1 = null
    task2 = null
    TASK_1_Action = null
    TASK_2_Action = null
  }
}`,

  closureUsecase1: `// 이벤트 핸들러 함수 (버튼에 클릭 이벤트를 달아줍니다.)
function addClickHandler(element) {
  element.addEventListener('click', function() {
    console.log('Element clicked:', element.id)
  })
}

// DOM API를 이용해 button1을 만듬
const button1 = document.createElement('button')
button1.textContent = 'Button 1'
button1.id = 'button1'

// DOM API를 이용해 button2를 만듬
const button2 = document.createElement('button')
button2.textContent = 'Button 2'
button2.id = 'button2'

// 각 버튼을 웹 문서에 장착
document.body.appendChild(button1)
document.body.appendChild(button2)

// 각 버튼에 이벤트 핸들러를 장착
addClickHandler(button1)
addClickHandler(button2)`,
  closureUsecase2: `const Counter = (function() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
})()

Counter.getCount() // 0
Counter.increment()
Counter.increment()
Counter.getCount() // 2
Counter.count // undefined`,

  eventListener: `// 특정 이벤트가 일어났을 때, 콜백 함수를 실행하는 이벤트 리스너를 추가하는 기능
element.addEventListener('특정이벤트', 콜백함수)

// 특정 이벤트 리스너를 제거해주는 기능
element.removeEventListener('특정이벤트', 콜백함수)
  `,

  cleanUp1: `function addClickHandler(element) {
  function clickHandler() {
    console.log('Element clicked:', element.id);
  }

  element.addEventListener('click', clickHandler);

  // 클린업 함수 반환
  return () => {
    element.removeEventListener('click', clickHandler);
    console.log('Event listener removed for:', element.id);
  };
}
  
const button1 = document.createElement('button');
button1.textContent = 'Button 1';
button1.id = 'button1';

const button2 = document.createElement('button');
button2.textContent = 'Button 2';
button2.id = 'button2';

document.body.appendChild(button1);
document.body.appendChild(button2);
  
const cleanUpButton1 = addClickHandler(button1); // 클린업 함수 받아옴
const cleanUpButton2 = addClickHandler(button2); // 클린업 함수 받아옴
  
setTimeout(() => {
  cleanUpButton1(); // 실행되면 클로저 환경의 이벤트 리스너가 제거됨
  cleanUpButton2(); // 실행되면 클로저 환경의 이벤트 리스너가 제거됨
}, 5000); // 5초 후에 클린업 함수 호출`,
  useEffect: `import { useEffect } from 'react'

useEffect(() => {
  // 어떤 기능들..
  // 어떤 기능들..
  // 어떤 기능들..
  document.addEventListener('scroll', 콜백)

  // clean up
  return () => {
    document.removeEventListener('scroll', 콜백)
  }
}, [])`,
};

export default function Chap0Act1() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum="js"
        highlightActNum={2}
        chapterInfo={chaptersInfo.chapter2}
      ></ActNavigator>
      <h1>클로저(closure)</h1>
      <p>
        클로저를 익히면 자바스크립트에 대한 이해도가 대폭 증가한다고 생각합니다.
      </p>
      <p>
        언어의 동작원리를 어느정도 알아야지만 클로저를 제대로 이해할 수 있기
        때문인데요.
      </p>
      <p>그래서 바로 클로저 현상부터 설명을 드리는 것 보다는</p>
      <p>
        클로저를 야기하는 몇가지 자바스크립트의 기초 토대부터 설명을 드리려고
        합니다.
      </p>
      <br />
      <p>
        먼저 <b>일급 객체</b>에 대해 다뤄보겠습니다.
      </p>
      <p>자바스크립트의 들과 함수는 모두 일급 객체인데요.</p>
      <p>
        일급 객체는 몇가지 특징이 있습니다. 그것들을 잠시 톺아보고 가겠습니다.
      </p>
      <br />
      <p>
        다음으로 <b>실행 컨텍스트</b>에 대해 다뤄볼 것입니다.
      </p>
      <p>
        실행 컨텍스트는 코드 블록이 실행될때 코드 내부적으로 구동되는 환경이라고
        할 수 있습니다.
      </p>
      <p>실행 컨텍스트의 동작 원리를 이해를 하시게 되면</p>
      <p>
        내가 사용하는 코드들이 어떻게 동작하겠구나를 개념적으로 아실 수 있게
        됩니다.
      </p>
      <br />
      <p>
        실행 컨텍스트에서는 실행 컨텍스트를 이루는 구성 요소인{" "}
        <b>환경 레코드</b>와 <b>렉시컬 환경</b>에 대해 다뤄볼 것입니다.
      </p>
      <p>
        <b>환경 레코드</b>는 변수가 저장되는 환경이고,
      </p>
      <p>
        <b>렉시컬 환경</b>은 상위 컨텍스트의 변수를 참조하는 환경입니다.
      </p>
      <p>글로만 보면 어렵지만, 그림과 코드를 보면 나름 이해하기 쉽습니다.</p>
      <br />
      <p>한번 가보시죠!</p>
      <br />

      <h2>일급 객체(first class Object)</h2>
      <p>일급 객체는 프로그래밍 언어 이론에서 사용되는 개념입니다.</p>
      <p>
        1960년대, 영국의 어떤 학자가 논문 발표회에서 특정 조건을 만족하지 못하는
        코드 블록을 이급 시민같다고 표현한 적이 있는데요.
      </p>
      <p>그 이후로 일급 객체와 이급 객체가 나뉘게 되었다고 합니다.</p>
      <p>(어려운 개념이 아니라는 것을 말씀드리고 싶었습니다.)</p>
      <br />
      <p>아래와 같은 조건을 만족하는 객체를 일급 객체라고 표현합니다.</p>
      <ol>
        <li>변수에 할당이 가능해야 한다.</li>
        <li>매개변수(parameter)에 전달이 가능해야 한다.</li>
        <li>함수의 반환값(return)으로 사용이 가능해야 한다.</li>
      </ol>
      <br />
      <CodeBox code={lessonCode.firstClassObject} />
      <ol>
        <li>함수를 표현식으로 변수에 할당할 수 있고,</li>
        <li>함수를 다른 함수의 파라미터로 넘길수도 있고,</li>
        <li>함수의 리턴값으로 함수를 사용할 수 있습니다.</li>
      </ol>
      <p>아무런 위화감이 없지요?</p>
      <p>자바스크립트의 함수가 일급 객체가 되므로써 얻는 장점으로는</p>
      <p>프로그래밍 패턴이 자유로워 진다는 것이 있습니다.</p>
      <br />
      <p>
        그리고 객체가 객체를 반환값으로 사용할 수 있는 일급 객체의 특징 때문에
      </p>
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
      <p>
        별이 존재하려면 우주가 필요합니다. 우주는 별이 존재할 수 있는
        환경이지요.
      </p>
      <p>코드가 별이라고 한다면 실행 컨텍스트는 우주라고 할 수 있겠습니다.</p>
      <p>즉, 실행 컨텍스트는 코드가 동작할 수 있는 환경 그 자체 입니다.</p>
      <br />
      <p>
        실행 컨텍스트는 코드가 일단 실행될 때, 함수가 실행될 때, 블록문이
        실행되었을 때 생성되고
      </p>
      <p>해당 컨텍스트의 코드가 다 읽히면 제거됩니다.</p>
      <p>
        코드 실행 시 맨 처음에 무조건적으로 생기는 컨텍스트를 글로벌
        컨텍스트라고 하고,
      </p>
      <p>
        글로벌 컨텍스트 내부의 코드 진행에 따라 생기는 별도의 컨텍스트를 로컬
        컨텍스트라고 합니다.
      </p>
      <br />
      <p>실행 컨텍스트는 여러가지 환경으로 구성이 되어 있는데요.</p>
      <p>중요하게 보실 것은 3가지 입니다.</p>
      <ol>
        <li>
          <b>환경 레코드</b> : 변수가 저장되는 공간
        </li>
        <li>
          <b>렉시컬 환경</b> : 다른 컨텍스트 공간의 변수를 참조할 수 있는 환경
        </li>
        <li>
          <b>콜 스택</b> : 엄밀히 말하면 컨텍스트의 구성요소는 아니지만,
          컨텍스트의 생명주기에 관련된 자료구조.
          <p>
            컨텍스트가 생성되면 콜스택에 쌓이고, 코드가 다 읽히면 콜스택에서
            제거됨.
          </p>
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
        alt="전역 컨텍스트"
        caption="전역 컨텍스트의 생성 과정"
      />
      <p>프로그램을 실행시키면 제일 먼저 전역 컨텍스트가 생성됩니다.</p>
      <p>
        이 때, 코드가 실질적인 동작을 일으키기 전에 코드의 변수들을 한번 쓱
        훑어보는 과정이 있습니다.
      </p>
      <p>그것을 코드 평가 과정이라고 합니다.</p>
      <p>
        평가 과정에서, 변수는 실행 컨텍스트의 <b>환경 레코드</b>라는 부분에
        기록이 됩니다.
      </p>
      <p>( 우리가 변수를 참조하는 공간이 이 환경 레코드 부분이며,</p>
      <p>변수를 수정할때도 환경 레코드에 등록된 값들이 변경됩니다.) </p>
      <p>
        그리고 <b>렉시컬 환경</b>도 연결이 되는데요.
      </p>
      <p>
        전역 컨텍스트는 최상위 컨텍스트이므로 참조할 상위 렉시컬 환경이
        없습니다.
      </p>
      <p>따라서 전역 컨텍스트의 렉시컬 환경은 null이 참조됩니다.</p>
      <p>
        이렇게 생성된 실행 컨텍스트는 콜 스택이라는 자료구조에 올라가게 됩니다.
      </p>
      <p>이 후, 본격적으로 코드가 실행됩니다.</p>
      <br />
      <CustomImageWithCaption
        imageSrc={localcontext1}
        width={837}
        height={563}
        alt="로컬 컨텍스트1"
        caption="로컬 컨텍스트의 생성 과정"
      />
      <p>코드가 실행되는 과정에서 localFn1 함수가 실행됩니다.</p>
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
        이후에 함수 몸체에 있는 변수들과 함수들이 환경 레코드에 등록이 됩니다.
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
        alt="로컬 컨텍스트2"
        caption="로컬 컨텍스트의 생성 과정"
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
        alt="콜스택에서 실행 컨텍스트가 제거됩니다."
        caption="코드 진행이 끝나면 콜스택에서 제거됩니다."
      />
      <p>localFn2이 콜스택에서 사라졌습니다.</p>
      <p>
        이것을 <b>코드의 생명주기가 끝났다</b> 라고도 표현할 수 있습니다.
      </p>
      <p>이제 다시 localFn1의 실행 컨텍스트로 돌아왔는데요.</p>
      <p>localFn1의 남은 코드도 console.log밖에 없습니다.</p>
      <p>
        따라서 console.log를 실행한 후, localFn1의 실행 컨텍스트도 콜스택에서
        제거됩니다.
      </p>
      <br />
      <CustomImageWithCaption
        imageSrc={callstackout2}
        width={837}
        height={563}
        alt="콜스택에서 실행 컨텍스트가 제거됩니다."
        caption="코드 진행이 끝나면 콜스택에서 제거됩니다."
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
        alt="콜스택에서 실행 컨텍스트가 제거됩니다."
        caption="전역 실행 컨텍스트 생명주기의 종료는 코드 진행이 끝났음을 의미합니다."
      />
      <CodeBox code={lessonCode.contextAnswer} />
      <p>한번에 이해하기는 어려울 수 있습니다.</p>
      <p>
        코드와 스크린샷을 다시 한번 대조해보시고, 이해하는 시간을 가지시는 것을
        추천합니다!
      </p>
      <p>그림을 그려보시는 것도 추천합니다!</p>

      <h2>클로저</h2>
      <p>앞서 코드의 생명주기, 환경 레코드, 렉시컬 환경에 대해 배웠습니다.</p>
      <p>그리고 함수가 일급 객체라는 것도 알게 되었습니다.</p>
      <p>즉, 함수가 함수를 리턴할 수 있다는 것을 알게되었습니다.</p>
      <p>
        그렇다면 아래와 같은 코드도 문법상 허용이 된다는 것을 알 수 있습니다.
      </p>
      <br />
      <CodeBox code={lessonCode.closure1} />
      <p>위 코드의 동작 원리를 살펴봅시다.</p>
      <p>
        함수가 return을 하게되면 그 함수의 모든 동작은 종료되므로, 함수의 실행
        컨텍스트는 콜스택에서 제거됩니다.
      </p>
      <p>
        test1과 test2에 innerFn이 할당되는 순간, outerFn은 콜스택에 더이상
        남아있지 않습니다.
      </p>
      <br />
      <p>그런데 innerFn이 선언된 곳은 outerFn입니다.</p>
      <p>즉, innerFn의 렉시컬 환경은 outerFn을 바라보고 있지요.</p>
      <p>innerFn이 outerFn의 렉시컬 환경을 참조하고 있기 때문에</p>
      <p>
        innerFn의 실행 컨텍스트가 사라져도, 렉시컬 환경의 참조 주소는 남아 있게
        됩니다.
      </p>
      <br />
      <p>
        <b>
          블록의 생명주기가 다했음에도 불구하고, 생명주기가 다한 블록의 렉시컬
          환경을 참조할 수 있는 현상.
        </b>
      </p>
      <p>
        이러한 현상을 <b>클로저</b>라고 합니다.
      </p>
      <p>
        이 때, 동일한 함수를 여러번 호출했을때도 각 함수들은 독립적으로
        동작하므로
      </p>
      <p>outerFn 하나로 여러개의 클로저 환경을 만들 수 있습니다.</p>
      <p>outerFn을 세번 호출하더라도, 세 개의 실행컨텍스트는 다 다릅니다.</p>
      <p>즉, test1과 test2가 각각 별개의 렉시컬 환경을 참조하고 있습니다.</p>
      <br />
      <h3>Exercise</h3>
      <ul>
        <ExerciseCard
          title="지, 구, 오, 락, 실에는 무슨 숫자가 할당될까요?"
          QuestionCode={lessonCode.closureQuestion1}
          AnswerCode={lessonCode.closureAnswer1}
        />
      </ul>

      <h2>클로저의 비의도적 사용 사례</h2>
      <p>
        우리는 개발을 하면서 클로저 환경을 의도적으로, 또는 비의도적으로
        사용하는 경우가 있습니다.
      </p>
      <p>
        의도적으로 사용하기는 쉽지만, 비의도적으로 사용되는 것을 파악하기는
        어렵습니다.
      </p>
      <p>먼저, 비의도적인 사용사례부터 알아보겠습니다.</p>
      <br />
      <p>옛날에 제가 고민했었던 클로저의 비의도적 사용사례 입니다.</p>
      <p>아래 코드를 구글 크롬의 about:blank에 그대로 입력해보시기 바랍니다.</p>
      <CodeBox code={lessonCode.closureUsecase1} />
      <p>
        웹 페이지에 버튼 2개가 생성됩니다. 각 버튼을 클릭하면 이벤트 핸들러에
        의해 버튼의 id가 console.log로 찍힙니다.
      </p>
      <p>이것이 왜 클로저와 연관이 있을까요?</p>
      <p>
        <b>addClickHandler 함수의 생명주기가 끝났음에도,</b>
      </p>
      <p>
        <b>
          addClickHandler의 환경 레코드에 있는 element를 계속 참조할 수 있기
          때문에 클로저라고 할 수 있습니다.
        </b>
      </p>
      <p>
        다만 컨텍스트가 사라졌으므로, 우리가 의도적으로 저 렉시컬 환경을 다시
        참조할 방법은 없습니다.
      </p>
      <p>
        <b>
          따라서 저 클릭 이벤트 핸들러는 웹을 끌때까지 영원히 메모리를
          점유합니다.
        </b>
      </p>
      <p>
        비의도적인 클로저의 사용을 늘리게 되면 웹의 속도나 성능이 저하될 수
        있습니다.
      </p>
      <br />

      <h2>클로저의 의도적 사용 사례</h2>
      <p>더하기, 빼기 기능이 있는 Counter를 만들고 싶다고 가정하겠습니다.</p>
      <p>그리고 보안을 위해서 Counter의 외부 접근과 수정을 막고 싶습니다.</p>
      <p>
        이를 <b>모듈(Module)화</b>라고 합니다.
      </p>
      <p>
        내부의 정보를 외부에서 쉽게 참조하거나 수정할 수 없게 하는 것이지요.
      </p>
      <p>정확히 클로저의 기능과 맞아떨어집니다.</p>
      <CodeBox code={lessonCode.closureUsecase2} />
      <p>함수를 괄호로 감싼 뒤 호출하면 즉시 함수가 호출됩니다.</p>
      <p>
        이를 즉시 실행 함수라고 하는데요. 여기서 간단히 소개를 드릴까 했습니다.
      </p>
      <p>
        위의 Counter 모듈은 오로지 increment, decrement, getCount를 통해서만
      </p>
      <p>
        count 변수에 접근할 수 있습니다. 그 외의 방법으로는 접근이 불가능합니다.
      </p>
      <p>이렇게 의도적으로 클로저 환경을 사용할 수 있습니다.</p>
      <br />

      <h2>클로저의 문제 : 메모리 점유</h2>
      <p>
        클로저 환경은 외부에서 접근할 수 없다는 보안적 이점과 기능을 함수별로
        모듈화 할 수 있다는 장점이 있습니다.
      </p>
      <p>하지만 클로저가 남발될 경우 메모리가 낭비될 가능성이 있습니다.</p>
      <p>
        클로저 환경은 외부에서 직접 접근이 불가능하므로, 애초에 클로저를 설계할
        때 메모리를 회수할 수 있는 방법을 강구해야 합니다.
      </p>
      <p>
        클로저 환경에서 메모리를 회수하는 기능을 <b>클린업(cleanup)</b>이라고
        하는데요.
      </p>
      <p>
        클로저 환경을 영원 불멸로 메모리에 남겨둘 것이 아니라면 클린업을 반드시
        구현하는 것이 좋습니다.
      </p>
      <br />
      <h3>클린업 함수</h3>
      <p>
        클로저의 메모리 점유를 막기 위해{" "}
        <b>함수는 함수를 리턴할 수 있다는 법칙</b>을 이용해보겠습니다.
      </p>
      <p>
        클로저 환경이 생기려면 렉시컬 환경을 넘겨줄 함수가 동작한 후, 렉시컬
        환경을 넘겨주고 소멸해야 합니다.
      </p>
      <p>
        <b>
          이때 return 값에 렉시컬 환경에 선언된 변수를 초기화하거나, 기능을 없앨
          수 있는 함수를 넘겨줄 수 있습니다.
        </b>
      </p>
      <br />
      <p>
        비의도적 사용 사례에서 사용한 코드를 재활용해서 클린업 함수를
        구현해보겠습니다.
      </p>
      <p>
        먼저 클린업에 활용할 이벤트 리스너 추가 기능과 이벤트 리스너 제거
        기능부터 알아보겠습니다.
      </p>
      <CodeBox code={lessonCode.eventListener} />
      <p>
        <b>EventListener</b>는 특정 이벤트를 감지하면서, 이벤트가 감지되면
        콜백함수를 실행시키는 역할을 합니다.
      </p>
      <p>
        <b>addEventListner</b>는 말 그대로 이벤트 리스너를 달아주는 기능을
        합니다.
      </p>
      <p>
        <b>removeEventListener</b>는 이벤트 리스너를 제거하는 기능을 합니다.
      </p>
      <br />

      <p>아래 코드에서는 클로저를 이용해 버튼에 eventListener를 달아준 뒤,</p>
      <p>5초 뒤 버튼에 달린 이벤트 리스너를 제거합니다.</p>
      <CodeBox code={lessonCode.cleanUp1} />
      <p>
        (setTimeout은 비동기 함수입니다. 비동기와 관련된 내용은 나중에 다뤄볼
        예정입니다.)
      </p>
      <p>
        클린업을 함수 내부에서 미리 설계를 해놓고 나중에 호출할 수 있게 하면,
      </p>
      <p>언제든지 클로저 환경에 접근하여 원하는 기능을 이끌어낼 수 있습니다.</p>
      <p>
        <b>
          클로저 환경을 구성할때에는 클린업 함수도 미리 설계가 되어야 한다는
          점을 기억하시면 될 것 같습니다.
        </b>
      </p>
      <br />
      <h3>보너스 트랙</h3>
      <p>나중에 리액트라는 라이브러리를 거의 반드시 배우시게 될 것인데요.</p>
      <CodeBox code={lessonCode.useEffect} />
      <p>직접 라이브러리를 사용하시다 보면</p>
      <p>클린업 함수의 존재 여부를 알게 되실 것입니다!</p>
      <br />
      <h2>마치며...</h2>
      <p>갑자기 많은 내용을 다룬 것 같네요.</p>
      <p>사실 모든 내용이 한번에 받아들여질 수는 없습니다.</p>
      <p>이해가 잘 가지 않으시면 일단은 넘어가셔도 좋습니다.</p>
      <p>어짜피 기초에 대한 공부는 계속 해야하기 때문입니다.</p>
      <p>일단은 이런게 있다는 키워드만 챙기셔도 성공일 것 같고,</p>
      <p>
        나중에 다시 돌아오시거나, 다른 책, 다른 글로써 공부를 해보셔도 좋습니다.
      </p>
      <p>최대한 이해를 시켜드리기 위해 상세하게 풀어서 설명을 드렸는데요.</p>
      <p>어려운 내용이 있으시다면 꼭 코멘트를 달아주시면 감사하겠습니다.</p>
      <p>학습 고생하셨습니다! 이번 연습문제는 없습니다!</p>
      <p>치킨 한마리 드시면서 편히 쉬시기 바랍니다!</p>
    </div>
  );
}
