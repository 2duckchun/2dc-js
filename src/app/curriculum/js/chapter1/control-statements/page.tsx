import styles from "@/styles/Chapter.module.scss";
import { chaptersInfo } from "../../JS_CHAPTER_INFO";
import ActNavigator from "@/app/_component/_curriculum/ActNavigator";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import ExerciseCard from "@/app/_component/_curriculum/ExcerciseCard";

const lessonCode = {
  block: `{
  let isInblock = true
  let hasItScope = true
}`,
  blockScope: `let duck = 5
{
  let duck = 20
  console.log(duck)
}
console.log(duck)`,
  varScope: `var duck = 5
{
  var duck = 20
  console.log(duck)
}
console.log(duck)`,
  dataType: `let number = 123 // 숫자형 (숫자를 표현)
let string = "string" // 문자형 (문자를 표현)
let boolean = true // 불리언값 (참, 거짓을 표현)
let undef = undefined // 정의되지 않았거나 값이 없음을 표현하는 값
let isEmpty = null // 의도적으로 비어있음을 표현하기 위한 값`,
  conditionStatement: `if (condition) {
  // code
} else if (condition) {
  // code
} else if (condition) {
  // code
} else {
  // code
}
`,
  ifExercise: `let a = 10

if (a % 2) { // a % 2 = 0이므로, if 문이 실행되지 않습니다.
  a = a + 5 
}

let b = a + 5 // a는 그대로 10이므로, b는 15가 됩니다.
`,
  forStatement: `for (변수 선언 및 할당; 조건절; 증감식) {
  조건식이 참일 경우 실행되는 코드 블록
}`,
  forStatementConsole: `for (let i = 0; i < 10; i++) {
  console.log(i)
  // 0 (출력 이후 i가 1 증가. 1 < 10은 참이므로 다음 블록 실행)
  // 1 (출력 이후 i가 1 증가. 2 < 10은 참이므로 다음 블록 실행)
  // 2 (출력 이후 i가 1 증가. 3 < 10은 참이므로 다음 블록 실행)
  // 3 (출력 이후 i가 1 증가. 4 < 10은 참이므로 다음 블록 실행)
  // 4 (출력 이후 i가 1 증가. 5 < 10은 참이므로 다음 블록 실행)
  // 5 (출력 이후 i가 1 증가. 6 < 10은 참이므로 다음 블록 실행)
  // 6 (출력 이후 i가 1 증가. 7 < 10은 참이므로 다음 블록 실행)
  // 7 (출력 이후 i가 1 증가. 8 < 10은 참이므로 다음 블록 실행)
  // 8 (출력 이후 i가 1 증가. 9 < 10은 참이므로 다음 블록 실행)
  // 9 (출력 이후 i가 1 증가. 10 < 10은 거짓이므로 for문 탈출)
}`,
  forStatementIternal: `for (let i = 0; true; i++) {
  console.log(i)
} // 이건 각오하고 실행하세요!! 계속 동작할 것입니다.`,
  forStatementExercise: `for (let i = 0; i < 10; i++) {
  i++
  console.log(i)
}`,
  forStatementIf: `for (let i = 50; i >= 0; i--) {
  if (i % 2) console.log(i) // 한줄짜리 문장은 블록을 생략할 수 있습니다.
} // 어떻게 출력될까요? 머릿속으로 사고 해봅시다.`,
  whileStatement: `let count = 0;

while(count < 10) {
  console.log("count up", \`\${count}\`)
  count++
}`,
  whileAlgorithm: `let num = 46484;
let answer = 0;

while(num > 0 ) {
  answer += num % 10
  num = Math.floor(num / 10) // Math.floor는 소수점을 내리는 함수입니다.
}

console.log(answer) // 26`,
  forBreak: `for (let i = 0; true; i++) {
  if (i % 2) console.log(i)
  if (i === 20) break;
} // 에디터에 직접 타이핑하셔서 동작을 확인해보세요!`,
  whileBreak: `let count = 0
while(true) {
  if (count % 2) console.log(count)
  count++
  if (count === 20) break
} // 에디터에 직접 타이핑하셔서 동작을 확인해보세요!`,
  forContinue: `for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) continue
  console.log(i)
} // 에디터에 직접 타이핑하셔서 동작을 확인해보세요!`,
  whileContinue: `let count = 0

while(count < 20) {
  if (count % 2) {
    console.log(count)
    count++
    continue;
  }
  count++
} // 에디터에 직접 타이핑하셔서 동작을 확인해보세요!`,
  nullExerciseQuestion: `let a = null
if (a === null) {
  console.log("파이팅")
}
console.log("입니다.")`,
  nullExerciseAnswer: `파이팅
입니다.

/** 
 * a가 null과 같다면? 파이팅이 출력됩니다.
 * a는 null이므로 if문이 동작합니다.
*/`,
  forExerciseQuestion: `let i = 5;
for (i; i < 20; i++) {
  if (i % 2) console.log("홀수", i)
  if (i % 5 === 0) console.log("5의 배수", i)
}
console.log(i)`,
  forExerciseAnswer: `홀수 5
5의 배수 5
홀수 7
홀수 9
5의 배수 10
홀수 11
홀수 13
홀수 15
5의 배수 15
홀수 17
홀수 19
20 // for문 탈출 후에 동작한 console.log입니다. i는 최종적으로 20이 됩니다.

/** 
 * for문의 i가 외부에 선언된 케이스입니다.
 * for문은 스코프 체이닝을 통해 블록 외부의 i를 참조 및 변경하고 있습니다.
 * 올바른 방식은 아니지만, 이런 것이 가능하다는 것을 알려드리고 싶었어요!
 * */`,
  whileExerciceQuestion: `let count = 123456789876
let result = 0;
while (// code) {
  //code
}
console.log(result)`,
  whileExerciceAnswer: `let count = 123456789876
let result = 0;
while (count > 0) {
  result += count % 10
  count = Math.floor(count/10)
}
console.log(result)

/**
 * 반복문을 설계할때는 종료조건을 먼저 만드는게 정신건강에 이롭습니다!
 * 풀다가 답지를 보셨더라도 괘념치 마세요!
 * 종이에 한글자 한글자 꾹꾹 써가며 이해해보시면 됩니다.
*/
`,
};

export default function Lecture() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum="js"
        highlightActNum={2}
        chapterInfo={chaptersInfo.chapter1}
      ></ActNavigator>
      <h1>제어문(control-statements)</h1>
      <p>
        코드는 보통 위에서 아래 방향으로, 왼쪽에서 오른쪽 순으로 읽히게 됩니다.
      </p>
      <p>
        하지만 코드가 정해진 방향과 순서대로만 동작하게 된다면 기능 구현이
        굉장히 굉장히 어렵겠죠.
      </p>
      <p>
        프로그래밍 언어에서는 제어문을 제공함으로써 코드 흐름의 설계나 특정
        코드의 반복 등을 컨트롤할 수 있게 해줍니다.
      </p>
      <p>제어문은 굉장히 중요한 개념이므로 반드시 익히고 넘어가셔야 합니다!</p>
      <h2>제어문의 기초 토대</h2>
      <p>
        저는 처음 자바스크립트를 배울 때,{" "}
        <b>&ldquo;이건 if문이고 이건 for문이다. 이렇게 사용한다.&ldquo;</b> 와
        같이 주입식으로 공부를 했던 것 같습니다.
      </p>
      <p>
        그래서 <b>블록</b>의 개념이나 <b>truthy</b>, <b>falsy</b>의 개념에 대해
        나중에 알게 되었었습니다.
      </p>
      <p>
        제어문을 배우기 전에 <b>블록</b>의 개념과 <b>truthy, falsy</b>의 개념에
        대해 먼저 배우고 넘어가시면 앞으로의 학습에 상당히 유리할 것입니다.
      </p>
      <p>일단 제어문의 기초 토대인 블록부터 먼저 배워보시죠!</p>
      <br />
      <h3>블록(block)</h3>

      <CodeBox code={lessonCode.block} />
      <p>
        블록은 한 줄 이상의 코드를 <b>중괄호 {"{}"}</b> 로 묶은 것을 의미합니다.
      </p>
      <p>
        코드 블록은 코드를 묶는 것 외에
        <b> 스코프(scope) </b>라는 것을 생성하는 역할도 합니다.
      </p>
      <p>스코프는 범위라는 뜻을 가지고 있습니다.</p>
      <p>
        자세한 이야기는 다음 챕터인 스코프에서 다룰 예정이지만, 여기서도 간단히
        다루고 넘어가보도록 하겠습니다.
      </p>
      <br />
      <CodeBox code={lessonCode.blockScope} />
      <p>
        위의 코드를 구글 크롬의 콘솔이나 코드 에디터에 직접 타이핑해보시고
        실행해보시기 바랍니다.
      </p>
      <p>
        20이 먼저 출력된 뒤 5가 출력될 것입니다. 왜 이렇게 출력되는 것 일까요?
      </p>
      <p>
        <b>
          let이라는 변수 선언 키워드가 블록 레벨 스코프를 가지기 때문입니다.
        </b>
      </p>
      <p>
        블록 레벨 스코프는 각 블록 레벨에서 유일한 식별자를 가질 수 있습니다.
      </p>
      <p>
        <b>
          블록문 내부에 있는 duck과 블록문 바깥에 있는 duck은 서로의 스코프가
          다르기 때문에 위와 같은 결과가 나온 것입니다.
        </b>
      </p>
      <br></br>
      <p>
        함수 레벨 스코프를 가지는 <b>var</b>로도 한번 실험해볼까요?
      </p>
      <CodeBox code={lessonCode.varScope} />
      <p>이 경우, 둘 다 20이 출력됩니다.</p>
      <p>
        var는 함수 레벨의 스코프를 가지므로, 함수 스코프 내에 선언된 var만
        유일할 수 있습니다.
      </p>
      <p>
        위의 경우에는 var가 블록 스코프 내부에서 재선언되었고, 블록 바깥에 있는
        var가 영향을 받았습니다.
      </p>
      <p>
        블록에서 기억해야 할 것은 <b>두가지</b> 입니다.
      </p>
      <ol>
        <li>코드를 중괄호로 묶으면 코드 블록이 된다.</li>
        <li>블록이 생성될때 블록 레벨의 스코프도 함께 생성된다.</li>
      </ol>

      <h2>truthy, falsy</h2>
      <p>
        프로그래밍 언어에는 <b>데이터 타입</b>이 있습니다.
      </p>
      <p>
        아래 코드는 이번 학습에 필요한 자바스크립트의 데이터 타입 목록을
        간추려놓은 것입니다.
      </p>
      <CodeBox code={lessonCode.dataType} />
      <p>
        특정 데이터가 <b>조건절</b>에 할당되면{" "}
        <b>
          자바스크립트 엔진은 조건절에 할당된 값이 truthy인지 falsy인지 자동으로
          평가
        </b>
        합니다.
      </p>
      <p>
        즉 조건절의 분기는 true, false에 의해 나뉘는 것이 아니라 truthy, falsy에
        의해 나뉘게 됩니다.
      </p>
      <p>데이터 타입의 값마다 truthy, falsy를 평가하는 기준이 약간 다른데요.</p>
      <p>
        이것도 외울 필요는 없습니다. 공부하다보면 자연스레 익히게 되는 부분이며,
      </p>
      <p>사실 falsy 부분 외에는 모두 truthy로 해석해도 무리가 없습니다.</p>
      <p>아래 표를 참고해주세요!</p>
      <table
        width="100%"
        style={{
          textAlign: "center",
          borderCollapse: "separate",
          borderSpacing: "20px",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th scope="col">데이터 타입</th>
            <th scope="col">Falsy</th>
            <th scope="col">Truthy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width={50}>숫자형</td>
            <td>0, NaN(Not a Number)</td>
            <td>그 외 전부 (-1, 0.01, 134934 ...)</td>
          </tr>
          <tr>
            <td>문자열</td>
            <td>&#34;&#34;(빈 문자열)</td>
            <td>그 외 전부 (&#34;0&#34;, &#34;2DC&#34;. ...)</td>
          </tr>
          <tr>
            <td>불리언</td>
            <td>false</td>
            <td>true</td>
          </tr>
          <tr>
            <td>그 외</td>
            <td>undefined, null</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <br />
      <h2>조건문</h2>
      <h3>if</h3>
      <p>
        if문을 이용하면 특정 조건에만 코드를 실행시킬 수 있습니다. 정말 많이
        사용하는 문법입니다.
      </p>
      <CodeBox code={lessonCode.conditionStatement} />
      <p>만약 조건절이 truthy하다면 if의 코드 블록이 실행됩니다.</p>
      <p>추가로 다른 조건들을 걸고 싶다면 else if를 사용할 수 있습니다.</p>
      <p>
        이때 else if는 한 조건문에 여러개가 있을 수 있지만, if문과 else문은
        하나만 있어야 합니다.
      </p>
      <p>만약 모든 조건들이 falsy 하다면 else의 코드 블록이 실행됩니다.</p>
      <CodeBox code={lessonCode.ifExercise} />
      <p>팁을 드리자면 if문에 꼭 else를 붙일 필요는 없습니다.</p>
      <p>if만 사용할 일이 더 많을 수 있습니다.</p>
      <h2>반복문</h2>
      <h3>for</h3>
      <p>
        for문은 코드 블록을 반복 실행하는 문법으로, 내부 조건절이 참이라면 코드
        블록을 반복적으로 실행합니다.
      </p>
      <CodeBox code={lessonCode.forStatement} />
      <p>조건절이 참일 경우 코드 블록이 반복 실행된다는 것에 유의하세요!</p>
      <p>예를 들어 아래와 같은 for문은 평생 실행될 것입니다!</p>
      <CodeBox code={lessonCode.forStatementIternal} />
      <p>
        위의 코드는 위험한 코드입니다. CPU와 메모리를 계속 점유한 상태로 for문이
        무한정으로 돌아갈 것이기 때문입니다.
      </p>
      <p>저것보다는 더 안정적인 코드로 for문의 원리를 파헤쳐봅시다.</p>
      <CodeBox code={lessonCode.forStatementConsole} />
      <p>
        원리는 생각보다 단순하지만 처음 배우실때는 이해가 잘 안될수도 있습니다.
      </p>
      <p>의도적인 연습과 분석이 필수입니다.</p>

      <br />
      <p>그럼 아래 코드를 함께 분석해볼까요?</p>
      <CodeBox code={lessonCode.forStatementExercise} />
      <p>이 코드의 console.log는 1, 3, 5, 7, 9 순으로 찍히게 됩니다.</p>
      <p>
        코드 블록에서 i를 증가시키고, console.log가 찍힌 뒤 증감문에서 i를 또
        증가시키기 때문입니다.
      </p>
      <p>
        이런 의도적인 연습을 많이 하시면 for문을 익히는데 도움이 될 수 있습니다.
      </p>
      <br></br>
      <CodeBox code={lessonCode.forStatementIf} />
      <br></br>
      <h3>while</h3>
      <p>while문도 for문과 비슷한 반복문입니다.</p>
      <p>조건식이 참이라면 코드 블록이 반복적으로 실행되는데요.</p>
      <p>
        for문과의 차이점은 while문의 구조에 있습니다. while문의 구조를
        살펴봅시다.
      </p>
      <p>
        while문은 for문과는 달리 조건식만 가지고 있습니다. 증감식이 없고, 변수를
        선언할 자리도 없습니다.
      </p>
      <p>
        따라서 외부 변수를 참조해서 조건절을 이루고, 반복문 내부에서 증감식을
        구성하여 반복을 끝낼 수 있는 환경을 만들어주어야 합니다.
      </p>
      <CodeBox code={lessonCode.whileStatement} />

      <br />
      <p>while문은 반복횟수가 불명확할때 사용하면 좋습니다.</p>
      <p>
        특정 숫자의 각 자릿수를 모두 더하는 알고리즘을 짠다고 가정해보겠습니다.
      </p>
      <p>
        각 자릿수를 모두 더하는 알고리즘의 경우, 어떤 수를 몇번 나눠야하는지
        미리 알기가 힘듭니다.
      </p>
      <p>따라서 while문을 사용하기에는 너무나도 좋습니다.</p>
      <CodeBox code={lessonCode.whileAlgorithm} />
      <p>
        이해가 잘 안가신다면 코드를 하나하나 되짚어가며 사고해보시기 바랍니다!
      </p>
      <br />
      <h3>반복문 탈출</h3>
      <p>다음은 반복문을 탈출하는 키워드에 대해 배워봅시다.</p>
      <p>
        반복문 탈출 키워드는 break, countinue가 있는데, 이 둘은 비슷하지만
        완전히 다른 역할을 합니다.
      </p>
      <h4>break</h4>
      <p>break문은 반복문 블록을 완전히 탈출하는 키워드입니다.</p>
      <p>
        반복문 내부의 코드 진행에서 break 키워드가 실행되면 코드 진행은 반복문을
        깨고(break) 나옵니다.
      </p>
      <CodeBox code={lessonCode.forBreak} />
      <p>
        위 코드는 조건식이 true로 되어 있어서 별도의 처리가 없는 한 평생
        동작합니다.
      </p>
      <p>다행히 내부에 break문이 있네요.</p>
      <p>위 반복문은 0부터 19까지의 홀수를 console.log로 찍어낸 뒤,</p>
      <p>i가 20에 도달할 때 break문이 작동해서 반복문이 중지됩니다.</p>
      <br></br>
      <p>while문에도 break를 적용할 수 있습니다.</p>
      <CodeBox code={lessonCode.whileBreak} />
      <p>위의 while문은 for문과 똑같은 동작을 합니다.</p>
      <p>
        구글 크롬이나 VSC에 코드를 직접 작동해보시고 동작 원리를 파악해보세요!
      </p>
      <br />
      <h4>continue</h4>
      <p>
        break가 반복문을 깨버리는 역할을 했다면, continue는 일단 반복문은
        진행하되, 한 블록만 스킵하는 역할을 합니다.
      </p>
      <p>코드를 통해 배워보겠습니다.</p>
      <CodeBox code={lessonCode.forContinue} />
      <p>
        위 코드에서는 i가 짝수일 때 continue를 통해 그 반복문 코드진행을{" "}
        <b>통과</b>합니다.
      </p>
      <p>따라서 console.log는 홀수에서만 찍히게 됩니다.</p>
      <br></br>
      <p>이는 while문에서도 마찬가지입니다.</p>
      <CodeBox code={lessonCode.whileContinue} />
      <p>위의 while문은 for문과 똑같은 동작을 합니다.</p>
      <p>
        직관적으로 이해가 가지 않으시더라도 실습을 몇번 하시다보면 동작을
        이해하실 수 있을 겁니다!
      </p>
      <h2>Exercise</h2>
      <ol>
        <ExerciseCard
          title="if 문이 동작할까요??!"
          QuestionCode={lessonCode.nullExerciseQuestion}
          AnswerCode={lessonCode.nullExerciseAnswer}
        />
        <ExerciseCard
          title="다소 특이하게 생긴 for문의 로직을 추적해봅시다. 어떤 것들이 출력될까요?"
          QuestionCode={lessonCode.forExerciseQuestion}
          AnswerCode={lessonCode.forExerciseAnswer}
        />
        <ExerciseCard
          title="while문을 이용해서 숫자의 각 자릿수를 더하는 알고리즘을 만들어 봅시다!"
          QuestionCode={lessonCode.whileExerciceQuestion}
          AnswerCode={lessonCode.whileExerciceAnswer}
        />
      </ol>
    </div>
  );
}
