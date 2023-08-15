import styles from "@/styles/Chapter.module.scss";
import { chaptersInfo } from "../../JS_CHAPTER_INFO";
import recursiveCallStack from "#/chap2/recursiveCallStack.png";
import CustomImageWithCaption from "@/app/_component/_common/CustomImageWithCaption";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import ActNavigator from "@/app/_component/_curriculum/ActNavigator";
import CustomLink from "@/app/_component/_common/CustomLink";
import ExerciseCard from "@/app/_component/_curriculum/ExcerciseCard";

const lessonCode = {
  sum1toN: `// 1부터 n까지의 모든 숫자를 더하는 재귀함수입니다.
// 단, n이 음수라면 1을 바로 리턴합니다.

function sum1toN(n) {
  if (n <= 1) return 1
  return n + sum1toN(n - 1)
}

sum1toN(5) // 5 + 4 + 3 + 2 + 1 = 15
sum1toN(-10) // 1`,
  callstackExceeded: `function sum1toN(n) {
  // if (n <= 1) return 
  // 종료조건을 삭제했습니다.
return n + sum1toN(n - 1)
}

sum1toN(5) // 에러!! Uncaught RangeError: Maximum call stack size exceeded`,
  recursiveExplain: `function sum1toN(n) {

  if (n <= 1) return 1 // 재귀함수의 base (값을 리턴하는 부분)

  return n + sum1toN(n - 1) // 재귀 부분 (자기 자신을 파라미터만 바꿔 재호출)

}`,

  loopConsole: `function loopConsole(n) {
  for (let i = 1; i <= n; i++) {
      console.log(i)
  }
}

loopConsole(10)
// 1 ~ 10까지 console.log가 찍힙니다.`,

  recursiveConsole: `function recursiveConsole(n, i = 1) {
  if (n < i) return
  console.log(i)
  return recursiveConsole(n, i = i + 1)
}

recursiveConsole(10)
// 1 ~ 10까지 console.log가 찍힙니다.`,
  objectExample: `const filesystem = {
  name: "root",
  files: [
    {
      name: "file1.txt",
      type: "file"
    },
    {
      name: "dir1",
      type: "dir",
      files: [
        {
          name: "file2.txt",
          type: "file"
        },
        {
          name: "dir2",
          type: "dir",
          files: [
            {
              name: "file3.txt",
              type: "file"
            }
          ]
        }
      ]
    }
  ]
}`,
  recursiveObject: `function consoleFileName(dir) {
  console.log(dir.name)
  if (!dir.files) return
  for (let subdir of dir.files) {
      consoleFileName(subdir)
  }
}`,
  factorialQuestion: `function factorial(n) {
  // n의 팩토리얼을 구하는 재귀함수를 만들어보세요!
}`,
  factorialAnswer: `function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}`,
  fibonacciQuestion: `function fibonacci(n) {
  // 피보나치 수열의 n번째 값을 구하는 재귀함수를 만들어보세요!
  // 힌트) 1항과 2항은 1이고, 3항부터는 n = (n - 1) + (n - 2) 입니다.
}`,
  fibonacciAnswer: `function fibonacci(n) {
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}`,
  loopToRecursiveQuestion: `function Loop(n) {
  let number = 0
  for (let i = 1; i <= n; i++) {
    number = number + i
  }
  return number
}

// 아래 함수를 새로 만드세요!
function LoopInRecursive(n) {
  // Loop 함수 내부의 for문을 helper라는 이름을 가진 재귀함수로 바꿔보세요.
  // 우리는 지난 파트에서 함수 내부에 함수를 선언할 수 있다는 사실과, 
  // 함수 내부에서 함수를 호출할 수 있음을 배웠습니다!
}`,
  loopToRecursiveAnswer: `function LoopInRecursive(n) {
  let number = 0

  const helper = (n, i = 1) => {
	  if (n <= i) return n
	  return i + helper(n, i = i + 1)
  }

  number = helper(n)

  return number
}`,
};

export default function Chap0Act1() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum="js"
        highlightActNum={3}
        chapterInfo={chaptersInfo.chapter2}
      ></ActNavigator>
      <h1>재귀 (맛보기)</h1>
      <p>
        실행 컨텍스트와 클로저 현상을 이해하셨으니 재귀함수도 한번
        다뤄보겠습니다.
      </p>
      <p>일단 여기에서는 맛보기로써의 재귀함수만 다룰 예정입니다.</p>
      <p>
        새롭고 신비한 것을 배우신다는 느낌으로 이 챕터를 봐주셨으면 좋겠습니다.
      </p>

      <h2>재귀는 뭘까요?</h2>
      <p>우리는 함수 내부에서 함수를 호출할 수 있다는 것을 배웠습니다.</p>
      <p>이 때 함수가 자기 자신을 호출할 수도 있는데요.</p>
      <p>함수가 함수 내부에서 자기 자신을 호출하는 현상을 재귀라고 합니다.</p>
      <br />
      <p>
        아래는 숫자 n을 입력받아, 1부터 n까지의 모든 수를 더하는 재귀함수입니다.
      </p>
      <CodeBox code={lessonCode.sum1toN} />
      <p>n이 1이 보다 작거나 같을때까지 자기 자신을 계속 호출합니다.</p>
      <p>다음 자기 자신을 호출할때의 파라미터 n은 1씩 감소합니다.</p>
      <p>n이 1과 같거나 작아졌을 때는 1을 반환하지요.</p>
      <p>글과 코드로만 보면 이해가 잘 안가실 수도 있습니다.</p>
      <p>
        재귀 함수를 보다 쉽게 이해하시려면 함수의 실행과 콜스택의 상관관계를
        머릿속에 그리면서 접근해야 합니다.
      </p>
      <p>
        아래 그림은 sum1toN에 5를 인수로 넘겨줬을 때 생성될 최대 콜스택입니다.
      </p>
      <CustomImageWithCaption
        imageSrc={recursiveCallStack}
        width={811}
        height={564}
        alt="sum1toN이라는 재귀함수를 콜스택의 관점에서 보여주는 사진"
        caption="1부터 n까지 더하기 위해 n개만큼의 콜스택이 쌓입니다."
      />
      <p>
        함수 내부에서 함수가 호출되면, 호출된 함수의 실행 컨텍스트가 생성되어
        콜스택에 쌓입니다.
      </p>
      <p>
        함수의 리턴값은 n + sum1toN(n-1)인데, sum1toN(n-1)이 해결이 되어야만
        값을 낼 수 있습니다.
      </p>
      <p>따라서 재귀된 함수들은 콜스택에 계속 쌓입니다.</p>
      <p>
        n이 마침내 재귀가 아니라 1을 리턴하게 되었을 때, 콜스택이 정리되기
        시작합니다.
      </p>
      <p>
        각 실행 컨텍스트 내 코드들이 하나씩 리턴되면서 최종적으로는 15가 되는
        것이지요.
      </p>
      <p>
        콜스택은 5, 4, 3, 2, 1 순으로 표현이 되었지만, 실제적으로는 1, 2, 3, 4,
        5 순으로 덧셈이 이루어졌습니다.
      </p>
      <p>
        값의 실제 계산과 콜스택을 비교하여 이해하시는 것이 굉장히 중요합니다.
      </p>

      <h2>재귀함수의 필수조건</h2>
      <p>재귀함수는 재귀할때마다 콜스택을 하나씩 사용합니다.</p>
      <p>
        만약 함수가 어떤 값을 리턴하지 않고, 계속 재귀만 한다면 어떻게 될까요?
      </p>
      <p>
        콜 스택에 실행 컨텍스트가 너무 많이 쌓인 나머지, 콜스택이 터져버리는
        현상이 발생합니다.
      </p>
      <p>예를 들어, 아래의 재귀함수는 콜 스택 에러를 발생시킵니다.</p>
      <CodeBox code={lessonCode.callstackExceeded} />
      <br />
      <p>그래서 재귀함수를 구성할때는 두 가지가 반드시 필요합니다.</p>
      <ol>
        <li>
          <b>함수의 종료조건.</b> 어느 조건에서는 꼭 재귀가 아닌 값을 return
          해야 합니다.
        </li>
        <li>
          <b>재귀할 때의 파라미터 변화.</b> 똑같은 파라미터로 똑같이 호출하면
          콜스택은 무조건 터집니다.
        </li>
      </ol>
      <br />
      <p>
        재귀함수에서, 함수의 종료조건은 베이스(base)라고 하고, 재귀조건은 말
        그대로 재귀라고 명명합니다.
      </p>
      <CodeBox code={lessonCode.recursiveExplain} />
      <h2>반복문 vs 재귀함수</h2>
      <p>
        재귀함수는 반복문으로 나타낼 수 있고, 반복문은 재귀함수로 나타낼 수
        있습니다.
      </p>
      <p>
        1부터 n까지 console.log를 찍는 함수를 반복문과 재귀함수로 만들어
        보겠습니다.
      </p>

      <h3>반복문</h3>
      <CodeBox code={lessonCode.loopConsole} />

      <h3>재귀함수</h3>
      <CodeBox code={lessonCode.recursiveConsole} />
      <br />
      <p>
        위의 두 코드는 기능면에서는 동일하지만, 효율면에서는 약간의 차이가
        존재하는데요.
      </p>
      <p>반복문은 함수 실행 컨텍스트를 하나만 사용합니다.</p>
      <p>반면에 재귀함수는 실행 컨텍스트를 n개 만큼 사용합니다.</p>
      <p>그래서 대체로 반복문이 메모리 효율성이 좋습니다.</p>
      <p>따라서 간단한 코드는 단순 반복문을 이용해서 짜는게 이롭습니다.</p>
      <p>그렇다고 재귀 함수가 나쁜 것은 아닙니다.</p>
      <p>
        재귀는 동일한 작업을 반복하는 큰 작업 단위를 해결할 때 큰 효과를
        발휘합니다.
      </p>
      <br />
      <p>
        예를 들어 아래 코드에 명시된 객체 데이터에서 name 부분만 출력하고 싶다고
        가정해봅시다.
      </p>
      <CodeBox code={lessonCode.objectExample} />
      <p>깊이가 그리 깊지 않으므로, 반복문을 사용해도 풀 수는 있을 것입니다.</p>
      <p>하지만 음.. 어떻게 해야할까요? 생각이 잘 떠오르지 않습니다.</p>
      <br />
      <CodeBox code={lessonCode.recursiveObject} />
      <p>이 때 재귀함수를 쓰면 코드 몇줄로 문제가 쉽게 풀립니다.</p>
      <p>
        당장에는 감이 잘 오지 않으시겠지만, 계속 다뤄보고 공부하다보면 약간의
        직관이 생기실 것입니다.
      </p>
      <p>(저도 완벽한 직관이 생기지는 않았지만, 열심히 노력중입니다.)</p>
      <p>지금까지는 재귀 함수의 맛보기 단계 였습니다.</p>
      <p>
        더 심화된 재귀함수의 사용사례 및 실습은 다른 챕터에서 다룰 수 있다면 더
        다뤄보겠습니다.
      </p>
      <p>
        재귀를 사용하는 몇가지 간단한 문제들을 풀어보시고, 이번 단원을
        마무리하겠습니다.
      </p>

      <h2>Exercise</h2>
      <ol>
        <ExerciseCard
          title="n 팩토리얼을 구하는 재귀함수를 만들어보세요! 팩토리얼은 n부터 1까지 모든 양의 정수를 곱한 값을 의미합니다."
          QuestionCode={lessonCode.factorialQuestion}
          AnswerCode={lessonCode.factorialAnswer}
        />
        <ExerciseCard
          title="피보나치 수열의 n번째 수를 구하는 재귀함수를 만들어보세요! 피보나치 수열은 첫번째와 두번째 항이 각각 1로 시작하며, 세번째 항부터는 이전 두 항의 합으로 계산되는 수열입니다. 즉 세번째 항부터 n = (n - 1) + (n - 2) 입니다."
          QuestionCode={lessonCode.fibonacciQuestion}
          AnswerCode={lessonCode.fibonacciAnswer}
        />
        <ExerciseCard
          title="함수 내부에 있는 for 반복문을 helper 라는 이름을 가진 재귀함수로 바꿔보세요. 반복문은 재귀함수로 바꿀 수 있고, 재귀함수는 반복문으로 바꿀 수 있다는 것을 배우기 위함입니다."
          QuestionCode={lessonCode.loopToRecursiveQuestion}
          AnswerCode={lessonCode.loopToRecursiveAnswer}
        />
      </ol>
    </div>
  );
}
