---
id: introduce
create_date: 2023-11-27 00:00
title: introduce
---

# 변수(Variables)

<YouWillLearn>
- 자바스크립트의 변수 let과 const의 존재를 알게 된다.
- 변수를 왜 사용하는 것인지 알게 된다.
- 변수 예약어와 식별자의 차이가 무엇인지 배운다.
</YouWillLearn>

<InlineToc>
  <TocData />
</InlineToc>

```js
f(x) = x + 1
```

수학에서의 변수는 **값이 고정되어 있지 않은 수** 를 의미합니다.
x는 4가 될 수도, 100이 될 수도, 10,000이 될 수도 있죠. 자바스크립트의 변수도 수학의 변수와 성질이 비슷합니다.
어떤 값이 담길 지 정해지지 않았기 때문에 **변수** 라고 합니다.

하지만 프로그래밍 언어는 컴퓨터라는 실체 위에서 구동된다는 점에서 단순 수학과는 차이점이 있습니다. 프로그래밍 언어는 컴퓨터를 제어하기 위해 사용되고, 변수 역시 컴퓨터를 제어하기 위해 사용됩니다. 변수를 선언하면 컴퓨터의 **메모리(Memory)** 에 어떤 값이 들어갈 수 있도록 **_메모리 공간을 확보_** 할 수 있는데요. 여기서 말한 메모리는 우리가 숱하게 봐온 그 메모리입니다. 컴퓨터 뚜껑을 따보신 경험이 있으시다면 몇번 보셨을지도 모릅니다.

<center>
  <img
    src="https://cdn.pixabay.com/photo/2014/08/22/22/14/ram-424813_1280.jpg"
    width="250"
    height="300"
    alt="RAM"
  />
  <em>RAM(Random Access Memory)</em>
</center>

일단 **_변수를 사용한다는 것은 메모리를 사용하는 것과 같다._** 라고만 이해하셔도 좋습니다. 그럼 자바스크립트에서 변수를 선언해볼까요?

<h2 id="variables-reserved">변수와 예약어(let, const)</h2>

프로그래밍 언어에는 **예약어** 라는게 있습니다. 프로그래밍 언어 자체에서 사용하기 위해 사전에 등록된 몇몇 단어를 **예약어** 라고 하는데요. 예약어는 **_이 예약어 뒤에는 특정 역할을 수행하는 코드가 올거야!_** 라는 의미를 가집니다. 하나의 약속인 것이지요. let과 const는 변수에 관한 예약어이며, let과 const 뒤에는 변수를 식별할 단어가 와야합니다. 입력된 단어는 변수의 `식별자(identifier)`가 됩니다.

```js
let 오십 = 50;
const 백 = 100;
```

위의 `let`과 `const`는 **변수 예약어** 이고, 그 뒤에오는 `오십`과 `백`은 **식별자** 라고 합니다. 식별자는 왜 필요할까요? 개발자인 우리가 메모리 주소를 일일히 다 외울 수 있다면 식별자는 필요없을지도 모릅니다. 하지만 메모리 주소는 정말 외우기 어렵게 생겨먹었습니다. 아래 사진과 같이요.

<center>
  <img
    src="https://github.com/2duckchun/2duckchun/assets/92588154/18fd401b-638b-40f0-be42-015d767d3fc6"
    width="250"
    height="300"
    alt="C언어 메모리 주소"
  />
  <em>C언어에서 본 메모리 주소</em>
</center>

위 주소를 외우면서 프로그래밍을 하기란 쉽지 않겠죠.
그래서 우리는 식별자를 통해 메모리를 사용합니다. 오십이라는 식별자에 접근하면 50이라는 값이 저장된 메모리를 참조할 수 있고, 백이라는 식별자에 접근하면 100이 저장된 메모리를 참조할 수 있는 형식이지요.

```js
let 오십 = 50;
const 백 = 100;
const 백오십 = 오십 + 백; // 150
```

위처럼 두 값을 더할 수도 있습니다.

<Important>
let과 const은 다른 변수 선언 방식입니다.

```js
let arya = 1;
arya = 5; // 가능

const ned = 5;
ned = 5; // 불가능
```

이에 대해서는 나중에 **변수와 호이스팅** 과정에서 더 상세히 다루겠습니다.
let과 const는 다르다라는 것만 인지해두시기 바랍니다!

</Important>

<h2 id="summary">요약</h2>

<Recap>
- 변수는 메모리의 특정 공간을 확보하는 수단이다.
- let, const는 변수를 선언하기 위한 **예약어** 이며, 예약어 뒤에는 **식별자(identifier)** 가 온다.
- 식별자에 접근하면 메모리에 저장된 값을 사용할 수 있다. 
</Recap>

<PrevNext prev="" next="연산자" />
