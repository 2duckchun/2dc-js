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

      <h2>메모리?</h2>
      <p>변수에 대해 공부하기 전에 메모리가 뭔지부터 간단하게 톺아봅시다.</p>
      <p>
        메모리는 컴퓨터의 <b>주 기억장치</b> 로써 컴퓨터가 데이터를 잠시
        보관(기억)하는 공간입니다.
      </p>
      <br />
      <p>
        우리가 어떤 것을 생각해내고 작업하려면 어떤 생각들을 머릿속에 기억을
        해야하지요?
      </p>
      <p>
        컴퓨터도 마찬가지입니다. 연산을 하기 위해서는 연산할 데이터들을
        기억해둬야 합니다.
      </p>
      <p>컴퓨터로 1 + 2 연산을 해본다고 가정해볼까요.</p>
      <CodeBox code={lessonCode.onePlusOne} />
      <p>
        사람은 직관적으로 1 + 2라는 질문에 답할 수 있습니다. 하지만 컴퓨터는
        기계이므로 그렇지 못합니다.
      </p>
      <p>
        컴퓨터는 1 + 2를 계산하기 위해 피연산자인 1과 2를 각각 메모리에 저장한
        후, CPU에서 연산자 +를 해석하여 연산을 수행합니다.
      </p>
      <br />
      <p>그렇다면 메모리는 어떻게 생겼길래 데이터를 저장할 수 있는 걸까요?</p>
      <p>메모리는 아래와 같이 생겼습니다. 많이들 보셨을 것 같습니다.</p>
      <CustomImageWithCaption
        imageSrc={RAM}
        width={640}
        height={427}
        caption={"RAM: Random Access Memory"}
        alt={"RAM 사진"}
      />
      <p>메모리는 대표적인 반도체입니다.</p>
      <p>
        반도체라 함은 특정 상황에서는 전기가 통하고, 특정 상황에서는 전기가
        통하지 않죠.
      </p>
      <p>
        메모리는 그러한 상황을 전기가 통하거나(On), 또는 통하지 않거나(Off)로
        0과 1을 표현합니다.
      </p>
      <p>
        이를 <b>비트(bit)</b>라고 합니다. 비트는 데이터를 0과 1로 표현하는
        방식입니다.
      </p>
      <br />
      <p>
        메모리에 보관될 데이터는 컴파일러를 거쳐 비트 단위로 변환되어 메모리의
        특정 주소에 차곡차곡 보관됩니다.
      </p>
      <p>
        그런데 문제가 있습니다. 메모리의 주소가 생각보다 많이 복잡하다는 건데요.
      </p>
      <p>메모리 주소는 아래와 같이 생겼습니다.</p>
      <CodeBox code={lessonCode.memory} />
      <br />
      <p>
        다행히도... 자바스크립트는 메모리를 언어 차원에서 직접 관리해줍니다.
      </p>
      <p>
        메모리를 직접 제어할 수 없다는 단점은 있지만 개발은 훨씬 편리해진
        셈이죠.
      </p>
      <p>문제는 우리가 메모리에 어떻게 접근하느냐가 되겠습니다.</p>
      <p>
        메모리에 할당된 값을 찾기 위해서는 메모리 주소를 통해 데이터에 접근을
        해야하는데, 주소를 외우기가 쉽지 않아 보입니다.
      </p>
      <p>게다가 데이터가 할당되는 메모리의 주소가 늘 일정하지도 않습니다.</p>
      <p>
        RAM의 풀네임 Random Access Memory에서 알 수 있듯이, 데이터가 메모리에
        무작위로 할당되기 때문입니다.
      </p>
      <p>
        그래서 우리는 메모리 주소에 사람이 식별하기 쉬운 이름을 붙여주는데요.
      </p>
      <p>
        메모리 주소에 이름을 붙여준 것을 <b>변수(Variables)</b>
        라고 합니다.
      </p>
      <p>
        즉, <b>변수의 선언은 데이터를 보관할 메모리의 확보와 같은 것</b> 이지요!
      </p>
      <CodeBox code={lessonCode.variables} />

      <h2>식별자(identifier)</h2>
      <p>식별자를 영어로 하면 identifier 라고 합니다.</p>
      <p>identifier를 줄이면 id이죠?</p>
      <p>그렇습니다. 식별자는 변수의 id입니다.</p>
      <p>식별자를 변수의 고유한 이름이라고 해석하셔도 무방합니다.</p>
      <p>즉, 우리가 변수를 호출할 때 사용하는 이름이 식별자입니다.</p>
      <CodeBox code={lessonCode.identifier} />
      <p>
        <code className={styles.code_tag}>let identifier</code>가 변수라고
        한다면
      </p>
      <p>
        <code className={styles.code_tag}>let</code>은 변수를 선언하는{" "}
        <b>키워드</b>이고,
      </p>
      <p>
        <code className={styles.code_tag}>let</code> 뒤에 오는 이름이{" "}
        <b>식별자</b>입니다.
      </p>

      <h2>식별자 네이밍 규칙</h2>
      <p>식별자는 변수의 이름을 식별하기 위한 도구입니다.</p>
      <p>하지만 아무 이름이나 식별자로 사용할 수는 없습니다.</p>
      <p>
        이미 자바스크립트가 사용하고 있는 키워드들은 식별자로 사용할 수
        없는데요.
      </p>
      <p>
        이것을 <b>예약어</b>라고 합니다. 자바스크립트가 이미 사용 예약을
        해두었기 때문에 우리가 이용할 수 없습니다.
      </p>
      <p>
        식별자에 예약어를 사용하게 된다면 아래와 같은 에러 메세지를 확인하실 수
        있습니다.
      </p>
      <CodeBox code={lessonCode.reservedWord} />
      <br />
      <p>
        예약어는 절대 절대 외우실 필요가 없습니다. 자바스크립트가 사용하는
        키워드가 예약어가 된다는 것만 알아두시고 넘어가셔야 합니다.
      </p>
      <br />
      <p>
        식별자 네이밍 규칙에는 예약어 사용 금지 외에도 몇가지 규칙이 있는데요.
      </p>
      <ol>
        <li>예약어는 식별자로 사용할 수 없다.(위에서 다룬 내용)</li>
        <li>특수문자는 $, _ 외에는 사용할 수 없다.</li>
        <li>숫자가 맨 앞에올 수 없다.</li>
      </ol>
      <CodeBox code={lessonCode.identifierPractice} />
      <p>
        자세히는 모르지만 컴퓨터 내부 원리 동작 때문에 금지가 되지 않았을까
        생각합니다.
      </p>
      <p>
        식별자 네이밍 규칙은 굳이 외우실 필요는 없습니다. 자동적으로 익혀지는
        부분입니다.
      </p>
      <p>
        <b>이런게 있구나~</b> 정도만 알아가주시기 바랍니다.
      </p>

      <h2>변수 키워드</h2>
      <p>
        변수는 메모리의 공간을 확보하고, 메모리 주소를 식별하기 쉽게 만드는
        것입니다.
      </p>
      <p>그럼 변수를 선언하는 방법도 알아야 겠지요.</p>
      <p>자바스크립트에서는 var let const로 변수를 선언할 수 있습니다.</p>
      <p>
        세 키워드는 변수를 선언한다는 맥락에서 같은 역할을 하지만, 동작 방식은
        약간 다릅니다.
      </p>
      <p>var와 let과 const의 차이점에 대해 알아볼까요?</p>
      <p>
        잠시 강의를 멈추고, <b>코드 에디터</b>를 설치할 시간입니다.
      </p>
      <p>
        <CustomLink href={{ pathname: "https://nodejs.org/en" }} isBlank={true}>
          <b className={styles.link}>Node.js</b>
        </CustomLink>
        와{" "}
        <CustomLink
          href={{ pathname: "https://code.visualstudio.com/" }}
          isBlank={true}
        >
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
        현재는 거의 사용할 일이 없는 방식이기도 합니다. 여러가지 단점이 있기
        때문입니다.
      </p>
      <p>var의 특징으로는</p>
      <ol>
        <li>재할당이 가능하다.</li>
        <li>재선언이 가능하다.</li>
        <li>함수 레벨의 스코프를 가진다.</li>
      </ol>
      <p>가 있습니다.</p>
      <br />
      <p>제 생각엔 3번이 var의 가장 치명저긴 약점이 아닐까 합니다.</p>
      <p>
        스코프란 허용범위라고도 할 수 있는데, var는 함수 레벨의 스코프만
        가집니다.
      </p>
      <p>
        즉, 함수 블록을 제외하면 다른 모든 곳에 의도치 않은 영향을 끼칠 수
        있다는 말이 됩니다.
      </p>
      <p>(스코프에 관해서는 다음 챕터에서 좀 더 자세히 다룰 것입니다.)</p>

      <h3>var 재할당</h3>
      <CodeBox code={lessonCode.varResign} />
      <p>이미 선언된 변수에 새로운 값을 할당할 수 있습니다.</p>
      <p>var로 선언한 mountain에 다시 10을 할당한 모습입니다.</p>

      <h3>var 재선언</h3>
      <CodeBox code={lessonCode.varReDeclaration} />
      <p>그렇다면 재선언은 뭘까요?</p>
      <p>재할당은 기존의 변수에 새로운 값을 주는 것입니다.</p>
      <p>재선언은 변수 자체를 다시 선언하는 것입니다.</p>
      <p>
        따라서 var 키워드를 잘못 사용하시면 미리 선언했던 변수들이 의도치않게
        다시 선언될 수 있습니다.
      </p>
      <p>
        <b>var는 안정성이 많이 떨어진다.</b> 라는 점을 기억해주시면 될 것
        같습니다.
      </p>

      <h2>let 키워드</h2>
      <p>let과 const는 var의 단점을 극복하고자</p>
      <p>
        <b>ES6(ECMAScript2015)</b> 이후에 새롭게 등장한 변수 선언 키워드입니다.
      </p>
      <p>let부터 알아보실까요!</p>
      <p>아래는 let의 특징입니다.</p>
      <ol>
        <li>재할당이 가능하다.</li>
        <li>재선언은 불가능하다.</li>
        <li>블록 레벨의 스코프를 가진다.</li>
      </ol>
      <h3>let 재할당</h3>
      <CodeBox code={lessonCode.letResign} />
      <p>이미 선언된 변수에 새로운 값을 할당할 수 있습니다.</p>

      <h3>let 재선언</h3>
      <CodeBox code={lessonCode.letReDeclaration} />
      <p>
        let은 하나의 블록에서 동일한 식별자를 가진 let이 1개 이상 선언될 수
        없도록 설계되어 있습니다.
      </p>
      <p>
        위의 상황은 문법적으로 불가능하므로 <b>SyntaxError</b>가 나게 됩니다.
      </p>
      <p>SyntaxError는 내가 사용한 문법에 어떤 이상이 있을 경우 발견됩니다.</p>

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
      <p>const로 한번 선언한 변수는 다시 할당하거나 선언할 수 없습니다.</p>
      <p>그래서 constants(상수)의 준말인 const로 사용이 됩니다.</p>
      <p>
        나중에 배우시겠지만, 배열이나 객체와 같은 참조형 자료들은 const로 선언이
        되었더라도 수정이 가능합니다.
      </p>
      <p>다만 const 자체를 재할당하거나 재선언하여 수정하는 것은 아닙니다.</p>
      <p>
        헷갈리시겠지만, 일단 const로 선언된 것 자체는 수정, 재선언이
        불가능하다는 것만 인지하시면 됩니다.
      </p>

      <h3>const 재할당</h3>
      <CodeBox code={lessonCode.constResign} />
      <p>
        const로 선언된 변수에 새로운 값을 재할당하려 하면 TypeError가 나옵니다.
      </p>

      <h3>const 재선언</h3>
      <CodeBox code={lessonCode.constReDeclaration} />
      <p>
        이미 선언된 식별자명 그대로 다시 식별자를 선언할 수 없습니다. 문법적으로
        불가능하므로 SyntaxError가 나게 됩니다.
      </p>
      <br />

      <h3>이 외에도...</h3>

      <CodeBox code={lessonCode.letvarPostAssign} />
      <p>
        변수에 값을 재할당할 수 있는 var와 let의 특성상 변수명을 미리 만들어둔
        뒤 나중에 할당을 할 수 있습니다.
      </p>
      <br />

      <CodeBox code={lessonCode.constPostAssign} />
      <p>하지만 const는 선언될 당시에 값을 할당하지 않으면 에러가 납니다.</p>
      <p>
        const는 값의 재할당이 불가능하므로 위와 같은 제약사항을 걸어둔 것
        같네요!
      </p>

      <h2>네이밍 컨벤션</h2>
      <p>변수명은 굉장히 중요합니다.</p>
      <p>
        메모리의 주소를 쉽게 식별하고, 협업을 쉽게하기 위해 변수명을 만드는
        것인데
      </p>
      <p>변수명을 어렵게 짠다면 자승자박을 하는 꼴이 되겠습니다.</p>
      <p>
        프로그래밍 언어에서는 변수의 가독성 향상을 위해 몇가지 컨벤션을
        따릅니다.
      </p>
      <CodeBox code={lessonCode.convention} />
      <p>
        자바스크립트에서는 일반적으로 변수나 함수 이름에는 카멜 케이스를
        사용하고, 클래스나 생성자 함수의 경우에는 파스칼 케이스를 사용합니다.
      </p>
      <p>하지만 팀별로, 회사별로 다르게 적용될 수 있습니다.</p>
      <p>
        자바스크립트 생태계에서는 카멜케이스를 일단 많이 사용한다는 점을
        인지해주셨으면 좋겠습니다.
      </p>
      <br />
      <h3>고생하셨습니다!</h3>
      <p>
        이번 Act에서는 변수와 식별자, 변수를 선언하는 키워드와 각 키워드로
        선언된 변수의 차이점에 대해 배웠습니다. 약간의 코드 컨벤션도 배우게
        되었습니다.
      </p>
      <p>다다음 챕터에서는 스코프에 대해 집중적으로 다뤄볼 예정입니다.</p>
      <p>
        다뤄진 코드들을 꼭 타이핑해보세요! 귀찮으시다면 복사 붙여넣기도
        좋습니다.
      </p>
      <p>무언가 직접 손으로 쳐보고 익히는게 정말 귀찮고 어려운 일이지만</p>
      <p>그렇게 했을 때 기억에 잘 남는 것 같습니다.</p>
      <p>오늘도 고생하셨습니다..!</p>
    </div>
  );
}
