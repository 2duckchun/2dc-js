---
id: introduce
create_date: 2023-11-27 00:00
title: introduce
---

# 조건문(Conditional-statement)

<YouWillLearn>
- 조건문을 왜 써야하는지 이해한다.
- if문을 사용해본다.
- switch문의 존재 여부를 인지한다.
- 블록 스코프에 대해 이해한다.
</YouWillLearn>

<InlineToc>
  <TocData />
</InlineToc>


<h2 id="what-is-programming">우유와 달걀</h2>

아내가 남편에게 심부름을 맡겼습니다. **우유 하나 사와. 달걀 있으면 6개 사와.** 라고 부탁을 했네요. 남편은 알겠다고 한 후 마트에 다녀왔습니다. 그리고선 **우유만 6개 사왔습니다.**  마트에 달걀이 있었기 때문입니다. 남편은 부부싸움을 원하는 걸까요? 아마 그렇지는 않았을겁니다. 남편이 프로그래머였기 때문이죠. 뭔 소리냐구요? 이 말이 혼란스럽지 않으시다면 당신은 아마 조건문을 이해하고 있으실 겁니다.

저는 아직 햇병아리 개발자에 불과하므로 프로그래밍이라는 거대한 주제에 대해 왈가왈부하기에는 크게 모자랍니다만, 그럼에도 불구하고 감히 프로그래밍에 대해 자신있게 말씀드릴 수 있는 점은 **프로그래밍은 경우의 수를 컨트롤하는 것이다** 라는 것입니다. 프로그래밍은 곧 달걀 변수가 참이라면 우유가 6개가 되고, 아니라면 우유는 한개가 되는 것과 같습니다.

```js
let 우유;

if (달걀) {
  우유 = 6
} else {
  우유 = 1
}
```

아내의 명령을 코드로 옮기면 위와 같습니다.

아이스 브레이킹은 끝입니다. 이제부터 조건문에 대해 공부해봅시다.

<h2 id="conditional-statement">조건문</h2>

조건문을 사용하면 특정 조건에 따라 특정 코드를 실행시킬 수 있습니다. 특정 조건은 `condition`이라고 하며, `condition`에는 오로지 `truthy`와 `falsy`만 존재할 수 있습니다. 불리언값인 `true`, `false`와 비슷하다고 생각이 드셨을텐데, 오묘하게 다른 점이 있습니다.

조건문법을 배우기 전에 `truthy`와 `falsy`가 뭔지 알아봅시다.

<h3 id="truthy-and-falsy">truthy / falsy</h3>

 truthy, falsy는 정확히 뭘까요? 이전 챕터에서 우리는 데이터 타입에 대해 배웠습니다. 여기에 하나만 더 얹어봅시다. 모든 데이터들은 **truthy**하거나 **falsy**하다는 사실을요.

> 모든 데이터들은 **truthy**하거나 **falsy**합니다

자바스크립트에서 falsy한 값은 딱 6가지가 있습니다.

```js
// falsy한 값들
false
0
""
undefined
null
NaN
```

이 이외의 값들은 모두 **truthy**합니다.

```js
// truthy한 값들
true
-1
"true"
// etc...
```

`true`는 아니지만 `true`와 비슷한 역할을 한다는 점에서 `truthy`이고, `false`는 아니지만 `false`와 비슷한 역할을 한다는 점에서 `falsy`입니다. 이는 나중에 `nullish`와 같은 개념으로 확장될 수 있습니다. `nullish`는 특정 데이터가 `null`같냐? 라는 개념으로 접근할 수 있는데요. `nullish`를 지금 학습하시면 혼란스러울 수 있으니 여기에서는 생략하도록 하겠습니다. 조건문의 `condition`에는 모든 데이터를 넣을 수 있고, 그 데이터들은 `condition` 내에서 `truthy`와 `falsy`로 평가됩니다.

<h3 id="if">if</h3>

> **만약** 당신이 열심히 공부한다면, 당신은 개발자가 됩니다.

컴퓨터가 조건에 따라 뭔가를 수행하게 하려면 if문을 사용해야 합니다. if문의 기본 문법은 아래와 같습니다.

```js
if (*condition*) {
  // *condition*이 truthy일 때 실행될 코드 
}
```

if문이 하나라면 컨디션이 `truthy`냐 `falsy`냐에 따라 코드가 실행됩니다. 조건이 `truthy`라면 if문의 코드가 실행되고, `falsy`라면 아예 실행되지 않겠지요. 만일 `falsy`한 상황에서도 특정 코드를 실행시키고 싶다면 `else`문을 사용해야 합니다.

```js
if (*condition*) {
  // *condition*이 truthy일 때 실행될 코드 
} else {
  // *condition*이 falsy일 때 실행될 코드 
}
```

만약 여러개의 조건을 컨트롤해야 한다면 `else if`문을 통해 코드를 분기할 수도 있습니다.

```js
if (*condition* > 80) {
  // *condition*이 80 초과일 때 실행될 코드 
} else if (*condition* > 60) {
  // *condition*이 60 초과일 때 실행될 코드 
} else if (*condition* > 40) {
  // *condition*이 40 초과일 때 실행될 코드 
}
```

사실 문법의 경우에는 사용하다보면 익숙해지는 면이 많습니다. if문같이 간단한 문법들은 더욱이 그렇고요. if문에 대한 문제를 3개 정도 풀어보면서 if문과 친숙해지는 시간을 가져보도록 하겠습니다. 우유 시리즈로 시작해볼까요?

<QuestionCard title="우유는 몇 개가 될까요?">
<Wrapper wraptype="show">

```js
let 달걀 = 100
let 우유 = 1

if (달걀 % 2) {
  우유 = 6
}

우유 // 우유는 몇개일까요?
```

</Wrapper>
<Wrapper wraptype="hide">

```js
let 달걀 = 100
let 우유 = 1

// 100 % 2는 0입니다. 0은 falsy입니다.
if (달걀 % 2) {
  우유 = 6
}
// 괄호의 조건이 falsy이므로 조건문 내 코드가 이행되지 않습니다.

우유 // 따라서 우유는 1개입니다.
```

</Wrapper>
</QuestionCard>

else가 추가된 우유 시리즈를 하나 더 풀어보시죠.

<QuestionCard title="우유는 몇 개가 될까요?">
<Wrapper wraptype="show">

```js
let 달걀 = 100
let 우유 = 1

if (달걀 % 2) {
  우유 = 6
} else {
  우유 = 12
}

우유 // 우유는 몇개일까요?
```

</Wrapper>
<Wrapper wraptype="hide">

```js
let 달걀 = 100
let 우유 = 1

// 100 % 2는 0입니다. 0은 falsy입니다.
if (달걀 % 2) {
  우유 = 6
} else {
  우유 = 12
}
// 괄호의 조건이 falsy이므로 else의 코드가 이행됩니다.

우유 // 따라서 우유는 12개입니다.
```

</Wrapper>
</QuestionCard>

자 else if가 포함된 우유 시리즈입니다. 이 문제에는 약간의 함정이 도사리고 있을 수 있습니다.

<QuestionCard title="우유는 몇 개가 될까요?">
<Wrapper wraptype="show">

```js
let 달걀 = 30
let 우유 = 1

if (달걀 > 50) {
  우유 = 6
} else if (달걀 > 40) {
  우유 = 12
} else if (달걀 > 30) {
  우유 = 18
}

우유 // 우유는 몇개일까요?
```

</Wrapper>
<Wrapper wraptype="hide">

```js
let 달걀 = 30
let 우유 = 1

if (달걀 > 50) {
  우유 = 6
} else if (달걀 > 40) {
  우유 = 12
} else if (달걀 > 30) {
  우유 = 18
}
// 모든 조건을 만족하지 않으므로 어떤 코드도 실행되지 않습니다.

우유 // 따라서 우유는 1개입니다.
```

</Wrapper>
</QuestionCard>

<h3 id="ternary-operator">삼항 연산자</h3>

<h3 id="switch">switch</h3>

<h2 id="block">블록문</h2>

<h3 id="skip-block">블록문 생략</h3>

<PrevNext prev="연산자" next="반복문" />
