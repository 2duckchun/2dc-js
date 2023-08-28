import CustomImageWithCaption from '@/components/_common/CustomImageWithCaption';
import ActNavigator from '@/components/curriculum/ActNavigator';
import CodeBox from '@/components/curriculum/CodeBox';
import ExerciseCard from '@/components/curriculum/ExcerciseCard';
import { chaptersInfo } from '@/constants/js_curriculum/js_chapters_info';
import styles from '@/styles/curriculum/Lecture.module.scss';

// images
import scopeChaining from '#/images/lectures/js/chap1/scopechain.png';

const lessonCode = {
  blockScope: `let a = 10
{
  let a = 5
  console.log("로컬(블록) 스코프", a)
}
console.log("글로벌(전역) 스코프", a)

// 5 출력
// 10 출력
`,
  blockScopeChaining: `let a = 10
{
  console.log("스코프 체이닝!", a)
}
console.log("글로벌(전역) 스코프", a)

// 10 출력
// 10 출력
`,
  scopeChainingError: `{
    console.log(b)
} // Uncaught ReferenceError: b is not defined`,
  globalScope: `let a = 10
let b = 10
{
  let a = 5
  let b = 5
  console.log("로컬(블록) 스코프", a)
  console.log("로컬(블록) 스코프", b)
}
console.log("글로벌(전역) 스코프", a)
console.log("글로벌(전역) 스코프", b)`,
  scopeChaining: `let a = 10
{
  let b = 20
  console.log(a)
  {
    let c = 30
    console.log(b)
    console.log(c)
  }
}
// 10
// 20
// 30`,
  scopeChaining2: `let a = 10 // 전역 스코프
{ // 블록 스코프 1
  let a = 100000
  let b = 20
  { // 블록 스코프 2
    let c = 30
    console.log(a)
    console.log(b)
    console.log(c)
  }
}
// 100000
// 20
// 30`,
  functionLevelScope: `var i = 0
for(var i = 0; i < 10; i++) {
  // do nothing
}

console.log(i) // 10`,
  blockLevelScope: `let i = 0
for(let i = 0; i < 10; i++) {
  // do nothing
}

console.log(i) // 0`,
  functionLevelScopeWithFunction: `var i = 0
function varHater() {
  var i = 100
  return i
}
const answer = varHater() // 100
console.log(i) // 0`,
  globalVariable: `let globalVariable = "나는 앱이 꺼질때까지 계속 참조할 수 있다."
console.log(globalVariable) // "나는 앱이 꺼질때까지 계속 참조할 수 있다."
console.log(globalVariable) // "나는 앱이 꺼질때까지 계속 참조할 수 있다."
console.log(globalVariable) // "나는 앱이 꺼질때까지 계속 참조할 수 있다."
// ...`,
  localVariable: `{
  let localVariable = "나는 블록 내부에서만 살아있다."
  console.log(localVariable) // "나는 블록 내부에서만 살아있다."
}
console.log(localVariable) // Uncaught ReferenceError: localVariable is not defined`,

  forStarExerciseQuestion: `let floor = 5
    *
   ***
  *****
 *******
*********

// 힌트 : 층수와 별은 어떤 패턴이 존재합니다.`,
  forStarExerciseAnswer: `let floor = 5
for (let i = 0; i < floor; i++) {
    let answer = ""
    for (let j = 0; j < floor - 1 - i; j++) {
        answer += " "
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        answer += "*"
    }
    console.log(answer)
}
// 별 찍기에 대한 답은 무수히 많습니다.
// 이 문제는 for문과 스코프에 대한 이해와 약간의 수학적인 규칙이 필요합니다.
// 이해가 잘 가지 않으신다면 노트에다가 하나씩 그려보시는 것을 추천합니다!`,
};

export default function Lecture() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum='js'
        highlightActNum={3}
        chapterInfo={chaptersInfo.chapter1}
      ></ActNavigator>
      <h1>스코프(scope)</h1>
      <p>스코프까지 오신 여러분들을 환영합니다.</p>
      <p>스코프는 프로그래밍 언어에서 굉장히 중요한 개념입니다.</p>
      <p>
        코드 내에서 변수를 어떻게 참조할 것인지, 식별자를 어떤 식으로 분리할
        것인지를 스코프라는 개념을 통해 나누기 때문인데요.
      </p>
      <p>앞서 변수 파트와 제어문 파트에서 var와 let으로 약간 맛을 보셨지요.</p>
      <p>
        스코프의 존재를 아는 것은 굉장히 중요합니다. 여기서 다양한 개념이 파생이
        되기 때문입니다.
      </p>
      <p>일단은 스코프의 개념을 확실히 알아가도록 합시다.</p>
      <h2>스코프란 무엇인가?</h2>
      <p>
        스코프를 직역하면 범위입니다. 자바스크립트에서 스코프는{' '}
        <b>변수를 참조할 수 있는 유효 범위</b>를 말합니다.
      </p>
      <p>
        우리는 앞서 배운 제어문 파트에서 스코프를 간접적으로 체험해보았습니다.
      </p>
      <CodeBox code={lessonCode.blockScope} />
      <p>
        우리는 let에 대해서 재할당은 가능하지만 재선언은 불가능한 변수 선언
        키워드라고 배웠습니다.
      </p>
      <p>하지만 여기서는 무슨 이유인지 식별자 a가 2개 선언이 되어 있지요?</p>
      <p>let이 블록 레벨 스코프를 가지기 때문에 가능한 일입니다.</p>
      <p>
        블록 레벨 스코프라 함은 블록 레벨에서 하나씩 개별적으로 존재할 수 있음을
        의미합니다.
      </p>
      <p>
        스코프를 이용하면 이미 사용했던 변수명이더라도 재활용을 할 수 있게 되는
        것입니다.
      </p>
      <br />
      <CodeBox code={lessonCode.blockScopeChaining} />
      <p>
        반면 위의 코드에서는 console.log에서 a를 참조하고 있지만 블록 내부에
        선언된 변수 a가 없습니다.
      </p>
      <p>
        이 경우, 스코프의 상위 스코프에 선언된 식별자가 있는지 찾게 되는데요.
      </p>
      <p>
        이러한 현상을 <b>스코프 체이닝</b>이라고 합니다.
      </p>
      <br />

      <CodeBox code={lessonCode.scopeChainingError} />
      <p>
        스코프 체이닝이 일어날 때, 최상단 스코프(글로벌 스코프)에도 참조할
        변수가 없다면
      </p>
      <p>위와 같은 참조 에러가 나게 됩니다.</p>
      <p>
        참조할 변수가 상위 스코프 어디에도 존재하지 않으므로 b가 정의되지
        않았다는 에러메세지를 송출하는 것이죠.
      </p>
      <br></br>
      <p>
        그렇다면, 앞서 말했던 나온 <b>글로벌 스코프</b>, <b>로컬 스코프</b>,
        <b>스코프 체이닝</b>, <b>블록 스코프</b> 등등은 뭘까요?
      </p>
      <p>하나씩 차근차근 살펴보도록 합시다!</p>

      <h2>글로벌(전역) 스코프와 로컬(지역) 스코프</h2>
      <p>
        글로벌 스코프는 최상위 스코프로써 아무 블록에도 해당하지 않는 공간을
        뜻합니다.
      </p>
      <p>로컬 스코프는 최상위 스코프에 속해있는 또 다른 스코프를 의미합니다.</p>
      <CodeBox code={lessonCode.globalScope} />
      <p>
        블록이 아닌 글로벌 공간(전역)에 선언된 a, b는 글로벌 스코프를 가지고,
      </p>
      <p>블록 내부에 선언된 a와 b는 로컬(지역) 스코프를 가집니다.</p>

      <h2>스코프 체이닝</h2>
      <p>스코프는 식별자의 유효 범위라고 앞서 말씀드린 바 있습니다.</p>
      <p>
        만약 하위 스코프에서 어떤 변수를 참조했는데, 일치하는 식별자가 없을
        경우에는 어떻게 할까요?
      </p>
      <p>자신의 상위 스코프에 선언된 식별자가 있는지 확인을 합니다.</p>
      <p>아래 코드로 예시를 들어볼까요??</p>
      <CodeBox code={lessonCode.scopeChaining} />
      <p>
        각 블록에 변수가 하나씩 존재하지만, 이상없이 값이 출력되는 것을 볼 수
        있습니다.
      </p>
      <CustomImageWithCaption
        imageSrc={scopeChaining}
        width={360}
        height={300}
        alt={'스코프 체이닝'}
        caption={
          '하위 스코프가 상위 스코프를 참조하는 모습이 마치 체인처럼 연결된 것 같아서 스코프 체이닝이라고 합니다.'
        }
      />
      <p>이는 스코프 체이닝 덕분에 가능한 일입니다.</p>
      <p>
        하위 스코프에서 어떤 변수를 참조하고 있지만 본인이 속한 스코프 내부에
        선언된 변수가 없다면
      </p>
      <p>하위 스코프는 상위 스코프에서 참조할 변수를 찾습니다.</p>
      <br></br>
      <CodeBox code={lessonCode.scopeChaining2} />
      <p>
        만약 상위 스코프에 동일한 변수 식별자가 많을 경우, 하위 스코프는 자신과
        가장 가까운 스코프의 식별자를 사용합니다.
      </p>
      <p>
        위의 경우에는 블록 스코프 2의 상위 스코프 2개 모두에 a 식별자가 선언되어
        있습니다.
      </p>
      <p>
        이 경우에는 식별자를 참조한 블록의 바로 상위 스코프에 선언된 식별자를
        참조하게 됩니다.
      </p>
      <p>따라서 블록 스코프 2가 참조하는 a는 100000이 됩니다.</p>
      <p>
        감이 잘 안잡히신다면 구글 크롬을 켜고 스코프 체이닝 상황을 만들어보시기
        바랍니다!
      </p>

      <h2>함수 레벨 스코프와 블록 레벨 스코프</h2>
      <p>함수 레벨 스코프와 블록 레벨 스코프는 뭘까요?</p>
      <p>
        C 기반 언어들은 대부분의 코드 블럭(if, for, while 등)에서 블록 레벨
        스코프를 가집니다.
      </p>
      <p>
        C 기반 언어에는 C언어, 자바, 자바스크립트 등이 있지요. 자바스크립트도
        if, for, while문에 블록 레벨 스코프를 가집니다.
      </p>
      <p>
        하지만 var라는 키워드는 함수 블록을 제외한 모든 블록 스코프를 깨부수는
        힘을 가지고 있습니다.
      </p>
      <p>
        즉, var를 사용한다는 것은 if, for, while문을 안전하게 사용할 수 없다는
        것을 의미합니다.
      </p>
      <p>코드를 통해 이해하는 시간을 가져보겠습니다.</p>
      <br />
      <CodeBox code={lessonCode.functionLevelScope} />
      <p>
        for문에 선언된 var는 사실 전역에 선언된 var를 덮어 쓴 것이나 다름
        없습니다.
      </p>
      <p>var 키워드 자체가 함수 레벨 스코프만 허용하기 때문입니다.</p>
      <p>
        var로 선언된 변수들은 언제 어디서든 변경될 수 있는 위험성을 내포하고
        있습니다.
      </p>
      <br></br>
      <CodeBox code={lessonCode.blockLevelScope} />
      <p>위는 블록 레벨 스코프를 가진 let을 사용한 for문입니다.</p>
      <p>
        블록 레벨 스코프이므로 블록 레벨에 선언된 i는 해당 블록 레벨에서만
        유효합니다.
      </p>
      <p>
        <b>따라서 for문에 선언된 let i는 해당 for문에서만 유효합니다!</b>
      </p>
      <br></br>

      <CodeBox code={lessonCode.functionLevelScopeWithFunction} />
      <p>varHater라는 함수 내에서만 var의 식별자가 유효하게 존재합니다.</p>
      <p>위 코드는 그것을 시뮬레이션한 것입니다.</p>
      <p>
        사실 var를 쓸 일은 많이 없으실 것입니다. 그래도 왜 쓰지 말아야하는지
        아는 것은 중요하다고 생각합니다.
      </p>

      <h2>(심화) 전역 변수를 사용하면 안되는 이유</h2>
      <p>글로벌 스코프에 선언된 변수를 전역 변수라고 하는데요.</p>
      <p>사실 전역에 변수를 선언하는 것은 그다지 좋은 방법이 아닙니다.</p>
      <p>변수 파트에서 변수 선언은 곧 메모리의 점유라고 말씀을 드렸었는데요.</p>
      <p>전역 변수는 프로그램이 종료되기 전까지 메모리를 점유하게 됩니다.</p>
      <CodeBox code={lessonCode.globalVariable} />
      <br></br>
      <p>
        반면, 스코프 내에 선언된 변수들은 해당 스코프가 종료되면 더 이상 참조할
        수 없습니다.
      </p>
      <CodeBox code={lessonCode.localVariable} />
      <p>
        참조가 끊긴 변수는 가비지 컬렉터에 의해 메모리에서 자동적으로
        회수됩니다.
      </p>
      <p>
        (함수의 경우에는 <b>클로저</b>라는 약간 특이한 현상이 있습니다. 함수
        파트에서 깊게 다뤄볼 주제입니다!)
      </p>
      <br></br>
      <p>
        따라서, 변수는 생명 주기(글로벌 스코프처럼 불멸이 아닌)를 가진 함수
        내부에 선언하거나, 블록문 내부에 선언하는 것이 권장됩니다.
      </p>
      <p>
        다음 파트에서는 자바스크립트의 핵심인 <b>함수</b>를 배워보겠습니다.
      </p>
      <h2>Exercise</h2>
      <ol>
        <ExerciseCard
          title={
            '별 찍기를 해봅시다! scope의 개념과 이중 for문이 필요합니다! 총 층수는 5층이에요!'
          }
          QuestionCode={lessonCode.forStarExerciseQuestion}
          AnswerCode={lessonCode.forStarExerciseAnswer}
        />
      </ol>
    </div>
  );
}
