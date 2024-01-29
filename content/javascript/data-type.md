# 데이터 타입(Data type)

<YouWillLearn>
- 데이터 타입이 왜 필요한지 개념적으로 이해한다.
- 원시 타입의 동작 원리에 대해 이해한다.
- 참조 타입의 동작 원리에 대해 이해한다.
- 자바스크립트가 왜 약타입 언어인지 이해한다.
</YouWillLearn>

<InlineToc>
  <TocData />
</InlineToc>

<h2 id="data-type">데이터 타입</h2>

앞서 연산자 파트에서 typeof 연산자로 데이터 타입을 확인하는 방법에 대해 공부해보았습니다. 그렇다면 데이터 타입이 무엇인지 알아야겠지요.

데이터 타입은 **사람을 위해 필요한 것이라고 정의** 할 수 있습니다.
컴퓨터의 데이터 저장 체계는 0과 1로만 이루어져 있습니다. 메모리에 전기가 들어오면 1, 전기가 없으면 0이죠. (그래서 메모리를 **반도체** 라 부릅니다.) 즉, 컴퓨터는 0과 1로만 이루어진 데이터인 **비트** 체계로 의사소통을 합니다. 하지만 사람이라면 전자 두뇌를 가지지 않는 이상 비트만으로는 의사소통이 불가능 하겠지요. 예시로 **"안녕하세요"** 라는 문자열을 비트로 바꿔보겠습니다.

```js
"안녕하세요" // "문자열"

11000101 01001000 10110001 01010101 11011001 10001000 11000100 10011000 11000110 10010100 // "2진수"
```

위의 코드 블럭을 보시면 왜 데이터 타입이 사람을 위해 필요한 것인지 이해가 가실겁니다. 데이터 타입... 반드시 배우셔야겠지요?

먼저 모든 데이터 타입들을 나열해본 뒤 중요한 것들 위주로 깊게 공부해보겠습니다. 자바스크립트는 기본적으로 7가지 **원시(primitive) 타입** 을 제공합니다. 

(필수적으로 인지하셔야하는 데이터 타입들은 **볼드체**로 표기했습니다.)

<BoxWithTitle title="원시(primitive) 타입">

- **Number** : 매우 큰 정수를 제외한 모든 숫자값에 사용됩니다.
- **String** : 텍스트를 저장하는 데 사용됩니다.
- **Boolean** : true 및 false, 일반적으로 조건 논리에 사용됩니다.
- **Undefined** : 변수에 값이 할당되지 않았음을 나타냅니다.
- **Null** : 의도적으로 값이 없음을 나타냅니다.
- BigInt : 임의의 큰 정수에 사용됩니다.
- Symbol : 충돌하지 않는 고유 식별자를 만드는 데 사용됩니다.

</BoxWithTitle>

그리고 원시형 데이터 타입을 제외한 모든 타입은 **참조(Reference)** 타입으로 부릅니다.

<BoxWithTitle title="참조(Reference) 타입">

- **Object** 
- **Function**
- **Array**
- Date
- RegExp
- Error

</BoxWithTitle>

참고로 **참조 타입** 은 모두 **객체(Object)** 입니다. 애초에 자바스크립트 언어가 그렇게 설계가 되어있기 때문인데요. 아직 객체를 배우시지 않았으니 객체의 존재만 인지하시고 넘어갑시다. 

자. 일단 모든 데이터 타입을 나열해봤습니다. 원시 타입과 참조 타입이 있었는데요. 먼저 원시타입부터 공부를 해보도록 하겠습니다.

<h3 id="primitive-type">원시 타입</h3>

원시 타입이라고 하면 석기시대 생각이 나시는 분들이 계실겁니다. 스타크래프트2 원시 저그가 생각나기도 하고요. 저는 그랬습니다. 하여간 친숙한 단어는 아닙니다.

앞으로는 원시 타입하면 아래 영영 사전 정의를 떠올려봅시다.

<center>
  <img
    src="https://github.com/2duckchun/2duckchun/assets/92588154/33aa3b19-2b4c-4a60-94fc-80be0d373b03"
    width="300"
    height="350"
    alt="primitive"
  />
  <em>not derived: original, primary</em>
</center>

**not derived: original, primary** 

**파생되지 않은 고유한 값**이라는 의미로 받아들일 수 있겠습니다. 이건 무슨 소리일까요? 원시 타입의 특징이 무엇인지 아래 코드를 보면서 이해해봅시다.

```js
let number1 = 10 // 10은 숫자형(원시) 데이터입니다.
let number2 = number1

number1 = 30
number2 = 50

console.log(number1) // 30
console.log(number2) // 50
```

- 변수 number1을 선언한 후 숫자 10 할당
- 변수 number2을 선언한 후 number1 할당
- 변수 number1에 30을 재할당
- 변수 number2에 50을 재할당

코드 몇줄이지만 자바스크립트 엔진 내부적으로는 재미있는 일이 일어납니다. 글로만 설명하면 어려우니 아래 그림을 함께 보시겠습니다.

<center>
  <img
    src="https://github.com/2duckchun/2duckchun/assets/92588154/f02da79b-360f-43c6-8f0f-3d033579a92c"
    width="600"
    height="600"
    alt="primitive"
  />
  <em>number2는 number1의 값이 바뀌더라도 고유의 값을 유지합니다.</em>
</center>

위 그림을 보시면 변수에 **다른 숫자를 재할당해도 메모리에 저장된 값이 바뀌지 않습니다.** 새로운 값이 메모리의 다른 부분에 저장될 뿐이며 식별자는 새롭게 할당된 값을 가진 메모리 주소를 다시 참조합니다. (참조가 끊긴 메모리는 **가비지 컬렉터** 라는 것에 의해 메모리 회수가 일어납니다.)

<Important>
**원시 타입은 처음에 메모리에 저장될 시점의 값을 그대로 보존합니다.**
</Important>

이해가 잘 가시지 않는다면 위의 예제 코드와 그림을 한번 그려보시는 것도 추천을 드립니다. 이해가 되셨다면 아래의 퀴즈 몇개를 풀어보며 원시 타입과 좀 더 친해지는 시간을 가져봅시다.

<QuestionCard title="변수 string2의 최종적인 값은 무엇일까요?">
<Wrapper wraptype="show">

```js
let string1 = "string은"
let string2 = "문자열이라는 뜻입니다."

string2 = undefined
```

</Wrapper>

<Wrapper wraptype="hide">

string2에는 undefined가 할당됩니다.

문제에 답이 있었지요?

</Wrapper>
</QuestionCard>

<QuestionCard title="변수 boolean3의 최종적인 값은 무엇일까요?">
<Wrapper wraptype="show">

```js
let boolean1 = "boolean은"
let boolean2 = "논리값이라는 뜻입니다."
let boolean3 = "true와 false. 2가지 값만 표현이 가능하죠."

boolean3 = !false
```

</Wrapper>

<Wrapper wraptype="hide">

boolean3에는 false의 부정인 true가 할당됩니다!

연산자 파트에서 배운 논리연산자의 부정연산자를 기억하시기 바랍니다!

```js
boolean3 = !false // true
```

</Wrapper>
</QuestionCard>

<QuestionCard title="아래 코드블록의 질문에 답해보세요!">
<Wrapper wraptype="show">

```js
let data = null
let isNull = data ? false : true
let Question = isNull

data = 'javascript'
isNull = data === null ? true : false

data // data에 할당된 값은?
isNull // isNull에 할당된 값은?
Question // Question에 할당된 값은?
```

</Wrapper>

<Wrapper wraptype="hide">

약간 챌린지하실 수 있는데요. 코드를 한줄씩 절차적으로 풀어가보시면 쉽게 답을 유추하실 수 있습니다!

```js
data // 'javascript'
isNull // false
Question // true
```

</Wrapper>
</QuestionCard>

여기서 다룬 boolean, string, number외 나머지 4개 원시값들도 위와 동일한 원리로 동작하니 알아두시기 바랍니다!

원시타입에 대해 감이 조금 잡히셨을까요? 잡히지 않으셨더라도 괜찮습니다. 또 공부하면 되니까요. 원시 타입의 디테일한 학습을 원하시면 mdn 공식문서를 훑어보시는 것도 좋은 선택입니다.

[MDN 원시값 공식문서(한글)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures#%EC%9B%90%EC%8B%9C_%EA%B0%92primitive_values)


<h3 id="reference-type">참조 타입</h3>

원시 타입에 이어 참조 타입도 학습해볼까요? 참조 타입은 **원시 타입을 제외한 모든 타입** 이라고 할 수 있습니다.

먼저, 아래 코드 블록을 통해 참조 타입에 어떤 데이터 타입이 속해있는지 한번 볼까요?

```js
const object = {
  key: "객체입니다"
} // 객체

const func = function () {
  return "i am 함수에요."
} // 함수

const array = ['배', '열', '입', '니', '다'] // 배열

const date = new Date() // Date 객체

const error = new Error() // Error 객체

// 정규표현식
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = "example@example.com";
const isValidEmail = emailRegex.test(email); // 정규표현식 자체가 객체이므로 .test(변수)와 같은 호출이 가능합니다.
```

종류가 생각보다 많아보입니다만 겁 먹으실 필요는 없습니다. 이 파트에서는 각 요소의 개별 주제보다는 참조 타입이 무엇인지에 대해 초점이 맞추어져 있습니다. 

참조 타입은 왜 참조 타입일까요? 참조 타입은 변수 식별자가 메모리를 참조하는 방식이 원시 타입과 약간은 다른면이 있는데요. 뭐가 어떻게 다를까요? 예시로 아래 코드를 보겠습니다.

```js
const pri1 = "원시값"
const pri2 = "원시값"
pri1 === pri2 // true입니다. 값이 같기 때문이죠.

const ref1 = {}
const ref2 = {}
ref1 === ref2 // false입니다. 잉? 왜그럴까요?
```

위 예시에 있는 원시값들과 참조값들을 각각 **동등 일치 비교(===)** 했을 때의 차이입니다. *원시값을 비교하면 **true** 가 되고, 참조값은 **false*** 가 됩니다. 왜 이런 차이가 생기는 걸까요? 원시값은 변수가 참조하는 메모리에 값 자체를 저장하고, 참조값은 변수가 참조하는 메모리에 특정 메모리 주소를 저장한다는 차이점 때문에 위와 같은 현상이 벌어집니다. 보다 나은 이해를 위해 그림으로 설명하겠습니다.

<center>
  <img
    src="https://github.com/2duckchun/2duckchun/assets/92588154/848824b9-63f6-4448-ba87-39d80754dba7"
    width="700"
    height="600"
    alt="reference"
  />
  <em>자바스크립트 엔진을 일부 표현한 그림입니다.</em>
</center>

<Important>
참조 타입을 보다 근원적으로 이해하기 위해서는 자바스크립트 엔진의 구조를 일부 아실 필요가 있습니다. 그림을 보시면 자바스크립트 엔진 내부에 **콜스택(CallStack)** 과 **메모리 힙(Memory Heap)** 이 보이실 것입니다. 콜 스택은 자바스크립트 코드의 실행 순서를 보장하고, 코드 실행에 필요한 환경을 제공해주는 **실행 컨텍스트(Execution Context)** 가 쌓이는 곳입니다. 메모리 힙은 가변적인 데이터를 저장하고 관리하는 메모리의 특수한 부분입니다.

내용이 다소 복잡하고 어려워졌죠. 실제로 실행 컨텍스트는 자바스크립트의 동작원리를 이해하기 위해 반드시 알아야하는 중요한 부분이므로 나중에 실행 컨텍스트 파트를 따로 분리해 상세하게 다룰 예정입니다. 일단 실행 컨텍스트라는 중요한 것이 있다는 것만 기억해주시고, **지금은 변수 저장이 특수한 환경과 연관이 있다는 것만 알아두시기 바랍니다.**
</Important>

사진을 보시면 원시 타입 값의 경우에는 콜 스택 내부에 값이 그대로 저장이 되어있습니다. 즉, pri1의 값과 pri2의 값이 같습니다. 따라서 두 변수에 동등일치비교 연산을 했을 때 `true` 가 나오게 되는 것이죠.

반면에 ref1과 ref2가 콜스택 내부에서 갖는 값은 서로 다릅니다. 참조 타입 데이터는 먼저 메모리 힙에 생성이 된 후, 변수에 메모리 힙 주소를 넘겨주기 때문입니다. 따라서 둘은 빈 객체라 하더라도 같은 객체는 아닙니다.

왜 이렇게 값을 관리하는걸까요? 참조 타입 데이터는 **런타임** 에도 변경될 수 있기 때문입니다. 

> **런타임** 은 프로그램이 실행되고 있는 때를 의미합니다.

```js
const ref1 = {}
const ref2 = {}

ref1.type = "ref1 타입"
ref2.type = "ref2 타입"

console.log(ref1) // { type: "ref1 타입" }
console.log(ref2) // { type: "ref2 타입" }
```

위의 코드 블록을 보시면 두 객체는 다른 객체일 수밖에 없음을 이해하실 수 있습니다.

참조 타입의 주소값을 넘겨준다는 특성을 통해 재미있는 현상을 관찰할 수 있습니다. 문제로 만들어볼테니 한번 풀어보시죠!



<QuestionCard title="아래 코드블록의 질문에 답해보세요!">
<Wrapper wraptype="show">

```js
const tomHardy = {}
const venom = tomHardy

tomHardy.isMutant = true
venom.color = "black"

console.log(tomHardy) // 뭘까요?
console.log(venom) // 뭘까요?
console.log(tomHardy === venom) // true일까요? false일까요?
```

</Wrapper>

<Wrapper wraptype="hide">

**톰 하디와 베놈은 하나가 되었습니다.**

```js
console.log(tomHardy) // {isMutant: true, color: 'black'}
console.log(venom) // {isMutant: true, color: 'black'}
console.log(tomHardy === venom) // true
```

최초에 tomHardy 변수에 빈 객체에 대한 메모리 힙 주소가 할당이 되어있습니다. venom 변수는 tomHardy 객체의 주소를 그대로 할당받았고요.
따라서 둘은 같은 객체를 공유하게 되었습니다. 콜스택 내에서도 값(메모리 주소)이 같으니 둘을 동등 비교해도 true가 됩니다.

</Wrapper>
</QuestionCard>

<h3 id="immutability">원시와 참조를 나누는 키워드 : 불변성</h3>

원시 타입과 참조 타입을 이대로 끝내기에는 약간 아쉽습니다. 원시와 참조를 나누는 가장 확실한 키워드인 **불변성**에 대해 이야기를 하지 않았기 때문이죠.

여러분! 배열은 참조 타입이고 문자열은 원시 타입인것을 방금의 학습을 통해 알게 되셨을 겁니다.
그런데 문자열이 사실은 배열로 만들어졌다는 사실. 알고 계셨나요?

```js
const arr = ['문', '자', '열']; // 배열

const str = '문자열' // 문자(배)열

// ??
```

문자열은 문자가 여러개 나열된 배열입니다. 그래서 둘은 어느정도 같은 특성을 공유합니다. 아직 배열을 배우지는 않았지만 배열의 인덱스라는 것에 접근을 해서 글자 하나만 읽어보도록 하겠습니다.

```js
const arr = ['문', '자', '열']; // 배열
const str = '문자열' // 문자(배)열

arr[0] // '문'
str[0] // '문'

// 배열에는 배열 내에 있는 데이터에 접근할 수 있는 인덱스라는 것이 있고, 0부터 시작합니다.
```

문자열도 배열의 특성을 공유한다는 것을 확인해보셨습니다. 그런데 **왜 배열은 참조 타입이고 문자열은 원시 타입일까요?** 잠깐 생각할 시간을 가져본 뒤 답을 확인해보겠습니다.

<QuestionCard title="">
<Wrapper wraptype="show">
**왜 배열은 참조 타입이고 문자열은 원시 타입일까요?**

```js
const arr = ["나","는","참","조"] // 저는 왜 참조 타입인가요?
const str = "나는원시" // 저는 왜 원시 타입인가요?
```
</Wrapper>

<Wrapper wraptype="hide">

**배열은 런타임에 값 변경이 가능하지만 문자열은 값 변경이 불가능하기 때문입니다.**

```js
const arr = ["나","는","참","조"]
const str = "나는원시"

arr[3] = "치"
str[3] = "숭"

arr // ["나","는","참","치"] (참치가 됩니다.)
str // "나는원시" (값이 변하지 않습니다.)
```
</Wrapper>
</QuestionCard>

> 런타임에 값이 바뀌지 않는 것을 불변성이라고 합니다.

위 퀴즈의 답과 같은 차이로 인해 배열은 참조 타입이고 문자열은 원시 타입입니다. **즉 원시타입은 불변성을 가지고 있습니다.**

<BoxWithTitle title="유사배열객체">
문자열은 배열로 이루어져있다고 했죠. 하지만 배열의 기능을 100% 수행할 수는 없습니다. 따라서 문자열 같은 친구를 **유사 배열 객체** 라고 표현합니다. 
</BoxWithTitle>

자바스크립트를 졸업하신 후 *리액트*와 같은 라이브러리를 배우실 때 **"배열이나 객체에도 불변성을 유지해야 한다."** 라는 말을 보게되실 겁니다. 그 때 여기서 배우신 것을 활용하시면 될 것 같습니다.

<h2 id="dynamic">약타입 언어</h2>

자바스크립트는 변수를 선언할 때 let과 const만 사용합니다.

```js
let hi = "hi"
const hello = "hello"
```

반면, 근본(?) C언어의 경우에는 변수를 선언할 때 **데이터 타입**을 명시적으로 선언합니다.

```c
int main(void) {
  int nHi = 0; // int는 숫자형 데이터 입니다.
  char str[7] = "STRING" // 문자 데이터인 char를 배열로 만들어 문자열을 표현합니다.

  return 0;
}
```

즉, 자바스크립트는 변수에 데이터 타입을 명시적으로 선언하지 않고도 값을 할당할 수 있습니다.
따라서 자바스크립트의 변수에는 어떤 종류의 데이터든지 할당할 수 있으며, 같은 변수에 다른 데이터 타입의 값을 할당할 수도 있습니다. 이는 자바스크립트의 특징 중 하나입니다. 자바스크립트가 **약타입 언어**이기 때문에 가능한 일이죠. 강타입 언어에서는 이게 불가능합니다.

```js
let number = 11
number = "이제부터 숫자가 아니다"
number = false
```

이러한 특징은 자바스크립트에 약이 되기도 독이 되기도 합니다.

<h3 id="what-the">심할 정도의 자유분방함</h3>

<Important>
외울 필요는 없습니다.
</Important>

```js
"" + 1 // "1"

[] + 1 // "1"

[] - 1 // -1

"5" + "5" // "55"

"5" + "5" - "5" // 50

true + "ㅎㅎ" // "trueㅎㅎ"

true + true + true // 3

{} + [] - true / false // -infinity

NaN === NaN // false
```

자바스크립트는 왠만하면 데이터 타입에 대해서는 에러를 잘 내지 않습니다. 어떻게든 계산을 해내려고 합니다. 정말 충직하죠.

다만 이 충직함이 간혹가다 여러분들을 골탕먹일 수 있음만 알아두시면 됩니다.