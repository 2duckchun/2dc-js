import styles from "@/styles/Chapter.module.scss";
import { chaptersInfo } from "../../JS_CHAPTER_INFO";
import RAM from "#/chap1/ram640427.jpg";
import VSC from "#/chap1/vsc.png";
import nodeExecute from "#/chap1/node.png";
import CustomImageWithCaption from "@/app/_component/_common/CustomImageWithCaption";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import ActNavigator from "@/app/_component/_curriculum/ActNavigator";
import CustomLink from "@/app/_component/_common/CustomLink";

const lessonCode = {
  onePlusOne: `1 + 2`,
  memory: `00000000
008AF7FC
FFFFFFFF`,
  variables: `let value; // value라는 변수명으로 메모리의 공간을 확보
value = 5; // 확보한 공간에 데이터를 할당
console.log(value); // 메모리 공간에 할당된 데이터를 사용`,
  var: `var obsolete`,
  identifier: `let identifier = 123`,
  reservedWord: `Identifier expected. 'let' is a reserved word in strict mode. Modules are automatically in strict mode.`,
  identifierPractice: `let 1ABC = 123 // 불가능
const $body = document.querySelector('body') // 가능
const _private = () => {} // 가능
const a123 = 456 // 가능`,
  varResign: `var mountain = 5; // var 키워드로 mountain라는 메모리의 공간을 확보
mountain = 10; // mountain 식별자에 새로운 값을 할당함.`,
  varReDeclaration: `var hound = 10
var hound = "wal"
console.log(hound) // "wal"`,
  letResign: `let arya = "stark"; // let 키워드로 arya라는 메모리의 공간을 확보
arya = "many face god"; // arya 식별자에 새로운 값을 할당함.`,
  letReDeclaration: `let sansa = "stark"
let sansa = "baratheon" // SyntaxError: Identifier 'sansa' has already been declared`,
  constResign: `const ned = "start";
ned = "baratheon"; // TypeError: Assignment to constant variable.`,
  constReDeclaration: `const ned = "start";
const ned = "eddard"; // SyntaxError: Identifier 'ned' has already been declared`,
  letvarPostAssign: `var direWolf1;
let direWolf2;
direWolf1 = "Robb";
direWolf2 = "bran"`,
  constPostAssign: `const ghost;
ghost = "john" // SyntaxError: Missing initializer in const declaration`,
  convention: `// 카멜 케이스
const camelCase = "낙타를 닮아서 카멜케이스";

// 스네이크 케이스
const first_name = "뱀같아서 스네이크 케이스";

// 파스칼 케이스
const PascalCase = "파스칼이라는 언어에서 유래된 컨벤션";
`,
};

export default function LessonPage() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum="js"
        highlightActNum={1}
        chapterInfo={chaptersInfo.chapter1}
      ></ActNavigator>
      <h1>변수(Variables)</h1>
      <h2>변수란 무엇인가?</h2>
      <p>
        우리가 컴퓨터로 어떤 작업을 하려면 컴퓨터에게 특정 데이터를 기억하게
        해야 합니다.
      </p>
      <p>예를 들어, 1 + 2를 연산하고 싶다고 가정해봅시다.</p>
      <CodeBox code={lessonCode.onePlusOne} />
      <p>
        사람은 직관적으로 1 + 2라는 질문에 답할 수 있습니다. 하지만 컴퓨터는
        기계이므로 그렇지 못합니다.
      </p>
      <p>
        컴퓨터는 1 + 2를 계산하기 위해 피연산자인 1과 2를 각각 메모리에 저장한
        후, CPU에서 연산자 +를 해석하여 연산을 수행하는데요.
      </p>
      <p>메모리는 어떻게 생겼길래 메모리에 저장한다고 하는 걸까요?</p>
      <p>메모리는 아래와 같이 생겼습니다.</p>
      <CustomImageWithCaption
        imageSrc={RAM}
        width={640}
        height={427}
        caption={"RAM: Random Access Memory"}
        alt={"RAM 사진"}
      />
      <p>
        메모리는 전자회로로 구성되어 있습니다. 전자회로는 전기가 있거나(On),
        또는 없거나(Off)로 0과 1을 표현합니다. 이를 비트(bit)라고 합니다.
      </p>
      <p>
        우리가 저장할 데이터는 비트로 변환되어 메모리의 특정 주소에 보관됩니다.
      </p>
      <p>
        이때 문제가 있습니다. 메모리의 주소는 우리가 읽기에 상당히 난잡하다는 것
        입니다.
      </p>
      <CodeBox code={lessonCode.memory} />
      <p>
        메모리에 할당된 값을 찾기 위해서는 메모리에 접근을 해야하는데, 주소를
        외우기가 쉽지 않아 보입니다.
      </p>
      <p>
        그리고 데이터를 할당하는 메모리의 주소는 작업을 수행할때마다 계속
        변합니다.. RAM의 풀네임에서 알 수 있듯, 데이터가 메모리에 무작위로
        할당됩니다.
      </p>
      <p>
        다행히 자바스크립트는 편리한 언어입니다. 메모리에 데이터를 할당하는
        것과, 사용하지 않는 데이터를 메모리에서 제거해주는 것은 자바스크립트
        엔진이 대신 수행해줍니다.
      </p>
      <p>
        우리가 할 것은 데이터를 할당할 메모리를 확보하고, 그 확보한 공간을
        필요할 때마다 호출하는 것입니다.
      </p>
      <p>
        그런데 우리가 16진법의 메모리 주소를 일일히 외울 수 없습니다. 프로그래밍
        언어는 사람이 메모리 주소를 더 편리하게 식별할 수 있도록{" "}
        <b>변수(variables)</b>
        방식을 제공합니다.
      </p>
      <p>
        즉,
        <b>
          변수는 데이터를 저장할 메모리 공간을 확보하고, 메모리 주소에 사람이
          식별할 수 있는 이름을 붙인 것이라고 정의할 수 있습니다.
        </b>
      </p>
      <CodeBox code={lessonCode.variables} />
      <h1>식별자(identifier)</h1>
      <p>식별자는 변수의 이름이라고 할 수 있습니다.</p>
      <p>우리가 변수를 호출할 때 사용하는 이름이 식별자입니다.</p>
      <CodeBox code={lessonCode.identifier} />
      <p>여기서 let은 변수를 선언하는 키워드이고,</p>
      <p>let 뒤에 오는 변수를 식별하는 이름이 식별자입니다.</p>
      <h2>식별자 네이밍 규칙</h2>
      <p>식별자는 변수의 이름을 식별하기 위한 도구입니다.</p>
      <p>하지만 아무 이름이나 식별자로 사용할 수는 없습니다.</p>
      <p>
        이미 자바스크립트가 사용하고 있는 키워드들은 식별자로 사용할 수
        없는데요.
      </p>
      <p>
        이것을 예약어라고 합니다. 자바스크립트가 이미 사용하고 있는 키워드들 인
        것이지요.
      </p>
      <p>예약어는 고유의 역할이 있기 때문에 식별자로 사용할 수 없습니다.</p>
      <p>
        식별자에 예약어를 사용하게 된다면 아래와 같은 에러 메세지를 확인하실 수
        있습니다.
      </p>
      <CodeBox code={lessonCode.reservedWord} />
      <p>
        예약어는 절대 절대 외우실 필요가 없습니다. 자바스크립트가 사용하는
        키워드가 예약어가 된다는 것만 알아두시고 넘어가셔도 좋습니다.
      </p>
      <p>그 외에도 몇가지 규칙이 있습니다.</p>
      <ol>
        <li>예약어는 식별자로 사용할 수 없다.(위에서 다룬 내용)</li>
        <li>특수문자는 $, _ 외에는 사용할 수 없다.</li>
        <li>숫자가 맨 앞에올 수 없다.</li>
      </ol>
      <CodeBox code={lessonCode.identifierPractice} />
      <p>이 정도만 알아가셔도 매우 성공적입니다!</p>

      <h1>변수 키워드</h1>
      <p>
        변수는 메모리의 공간을 확보하고, 메모리 주소를 식별하기 쉽게 만드는
        것이라고 정의했습니다.
      </p>
      <p>변수를 선언하는데는 몇가지 방법이 있습니다.</p>
      <p>
        아래 나올 var let const가 대표적인 방법입니다. 각 키워드들은 변수를
        선언한다는 맥락에서는 같은 역할을 하지만, 분명한 차이점이 존재합니다.
      </p>
      <p>var와 let과 const의 차이점에 대해 알아볼까요?</p>
      <p>잠시 강의를 멈추고, 코드 에디터를 설치할 시간입니다.</p>
      <p>
        <CustomLink href={{ pathname: "https://nodejs.org/en" }}>
          <b className={styles.link}>Node.js</b>
        </CustomLink>
        와{" "}
        <CustomLink href={{ pathname: "https://code.visualstudio.com/" }}>
          <b className={styles.link}>Visual Studio Code</b>
        </CustomLink>
        를 설치해주시면 됩니다.
      </p>
      <CustomImageWithCaption
        imageSrc={VSC}
        width={573}
        height={361}
        caption={
          "VSC와 node를 설치하시고 practice.js 파일을 만든 뒤 내부에 코드를 적어주세요."
        }
        alt={
          "VSC를 설치하고 practice.js 파일을 만든 뒤 내부에 var 키워드로 변수를 생성한 사진"
        }
      />
      <CustomImageWithCaption
        imageSrc={nodeExecute}
        width={573}
        height={361}
        caption={
          "터미널을 열고 node 파일명 을 타이핑하시고 엔터를 치시면 node 환경에서 js가 실행됩니다!"
        }
        alt={"practice.js를 node 화면에서 실행시킨 사진"}
      />
      <p>
        두 프로그램을 설치하시고, js 파일을 만들어 node 환경에서 실행시켜보세요!
      </p>
      <p>
        구글 크롬에서는 var, let, const의 차이를 인지하기 어렵지만, node
        환경에서는 var, let, const의 차이점을 명확히 판별할 수 있습니다.
      </p>

      <h2>var 키워드</h2>
      <p>var는 자바스크립트의 초기에 사용되던 변수 선언 방식입니다.</p>
      <p>
        현재는 사용하실 이유가 없는 변수 키워드이기도 합니다. 여러가지 단점이
        있기 때문입니다.
      </p>
      <p>var의 특징으로는</p>
      <ol>
        <li>재할당이 가능하다.</li>
        <li>재선언이 가능하다.</li>
        <li>함수 레벨의 스코프를 가진다.</li>
      </ol>
      <p>가 있습니다.</p>
      <p>
        3번이 var의 가장 치명적인 약점 중 하나입니다. 3번의 허용범위(스코프)가
        넓다의 경우에는 동 챕터의 Act3 스코프에서 다룰 내용입니다! 여기에서는
        재할당과 재선언에 대해서만 다뤄보겠습니다.
      </p>
      <h3>var 재할당</h3>
      <CodeBox code={lessonCode.varResign} />
      <p>이미 선언된 변수에 새로운 값을 할당할 수 있습니다.</p>

      <h3>var 재선언</h3>
      <CodeBox code={lessonCode.varReDeclaration} />
      <p>
        이미 선언된 식별자를 한번 더 선언할 수 있습니다. 덮어씌우기가
        가능합니다.
      </p>
      <p>
        var 키워드를 사용할 경우, 신경쓰지 않으면 변수 선언이 꼬일 가능성이
        있습니다. var는 위험한 키워드입니다!!
      </p>

      <h2>let 키워드</h2>
      <p>
        let과 const는 ES6(ECMAScript2015) 이후에 새롭게 등장한 변수
        키워드입니다.
      </p>
      <p>let의 특징으로는</p>
      <ol>
        <li>재할당이 가능하다.</li>
        <li>재선언은 불가능하다.</li>
        <li>블록 레벨의 스코프를 가진다.</li>
      </ol>
      <p>가 있겠습니다.</p>
      <h3>let 재할당</h3>
      <CodeBox code={lessonCode.letResign} />
      <p>이미 선언된 변수에 새로운 값을 할당할 수 있습니다.</p>

      <h3>let 재선언</h3>
      <CodeBox code={lessonCode.letReDeclaration} />
      <p>
        하지만 이미 선언된 식별자를 다시 선언할 수는 없습니다. 문법적으로
        불가능하므로 SyntaxError가 나게 됩니다.
      </p>
      <p>
        SyntaxError는 내가 사용한 문법에 어떤 이상이 있을 경우 발견됩니다.
        고마운 에러입니다!
      </p>
      <h2>const 키워드</h2>
      <p>
        const도 let과 마찬가지로 ES6(ECMAScript2015) 이후에 새롭게 등장한 변수
        키워드입니다.
      </p>
      <p>const의 특징으로는</p>
      <ol>
        <li>재할당이 불가능하다.</li>
        <li>재선언은 불가능하다.</li>
        <li>블록 레벨의 스코프를 가진다.</li>
      </ol>
      <p>가 있습니다.</p>
      <p>
        한번 선언하면 바꿀 수 없습니다. 숫자의 상수(constant)같이 고정된
        값이라고 생각할 수 있습니다. (배열이나 객체 등 참조형 자료들은 const로
        선언이 되었더라도 수정 가능합니다. 다만 const의 재할당이나 재선언
        방식으로 수정하는 것은 아닙니다.)
      </p>
      <h3>const 재할당</h3>
      <CodeBox code={lessonCode.constResign} />
      <p>
        이미 선언된 변수에 새로운 값을 재할당하려 하면 TypeError가 나옵니다.
        부적절한 방법으로 값을 사용하는 경우에는 TypeError가 나옵니다.
      </p>

      <h3>const 재선언</h3>
      <CodeBox code={lessonCode.constReDeclaration} />
      <p>
        이미 선언된 식별자명 그대로 다시 식별자를 선언할 수 없습니다. 문법적으로
        불가능하므로 SyntaxError가 나게 됩니다.
      </p>
      <h3>이 외에도...</h3>
      <p>
        변수에 값을 재할당할 수 있는 var와 let의 특성상 변수명을 미리 만들어둔
        뒤 나중에 할당을 할 수 있습니다.
      </p>
      <CodeBox code={lessonCode.letvarPostAssign} />
      <br></br>
      <p>하지만 const는 선언될 당시에 값을 할당하지 않으면 에러가 납니다.</p>
      <CodeBox code={lessonCode.constPostAssign} />
      <h2>네이밍 컨벤션</h2>
      <p>변수는 굉장히 중요합니다. 중요한만큼 이름도 잘 지어줘야 합니다.</p>
      <p>
        프로그래밍 언어에서는 변수의 가독성 향상을 위해 몇가지 컨벤션을
        따릅니다.
      </p>
      <CodeBox code={lessonCode.convention} />
      <p>
        자바스크립트에서는 일반적으로 변수나 함수 이름에는 카멜 케이스를
        사용하고, 클래스나 생성자 함수의 경우에는 파스칼 케이스를 사용합니다.
      </p>
      <p>하지만 팀별로, 회사별로 다르게 적용될 수는 있겠습니다.</p>
      <h3>고생하셨습니다!</h3>
      <p>
        이번 Act에서는 변수와 식별자, 변수를 선언하는 키워드와 각 키워드로
        선언된 변수의 차이점에 대해 배웠습니다. 약간의 코드 컨벤션도 배우게
        되었습니다.
      </p>
      <p>
        여기에서는 함수 레벨 스코프, 블록 레벨 스코프를 다루지 않았지만, 이번
        챕터의 Act3에서 스코프를 중점적으로 다루게 될 것입니다.
      </p>
      <p>그때 한번 다시 돌아오셔서 익히고 가셔도 좋을 듯 합니다.</p>
      <p>
        아무튼.... 여기서 다뤄진 코드들을 꼭 타이핑해서 익혀보세요! 정
        귀찮으시면 복사 붙여넣기도 좋습니다.
      </p>
      <p>오늘도 고생하셨습니다..!</p>
    </div>
  );
}
