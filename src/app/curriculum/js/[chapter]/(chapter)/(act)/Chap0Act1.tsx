import Image from "next/image";
import AboutBlank from "#/chap0/aboutblank.png";
import DeveloperTool from "#/chap0/developertool.png";
import DocumentObject from "#/chap0/dirdocument.png";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import SelfIntroduceDocument from "#/chap0/self-introduce.png";
import YourNickName from "#/chap0/yourNickName.png";
import Boom from "#/chap0/boom.png";
import styles from "./Act.module.scss";

export default function Chap0Act1() {
  return (
    <div className={styles.act_container}>
      <h2>환영합니다!</h2>
      <p>
        안녕하세요. 어떻게 하면 자바스크립트를 재미있고 효율적으로 배울 수
        있을지 고민하는 2DC입니다.
      </p>
      <p>
        자바스크립트는 참 매력적인 언어입니다. 다른 프로그래밍 언어 대비
        접근성이 굉장히 좋을 뿐만 아니라, 언어 하나로 커버할 수 있는 분야가 많기
        때문인데요.
      </p>
      <p>
        우리가 보고있는 브라우저 화면부터 화면 너머에서 동작하는 서버까지
        프로그래밍을 할 수 있습니다.
      </p>
      <p>
        나아가서는 블록체인이나 인공지능까지도 자바스크립트로 컨트롤 할 수
        있다고 합니다.
      </p>
      <h2>왜 필요한지 알고 배우기</h2>
      <p>
        저는 22년 6~7월 경부터 자바스크립트를 본격적으로 배우기 시작했는데요.
      </p>
      <p>
        당시를 회고해보면 굉장히 비효율적으로 언어 공부를 했던 것
        같습니다.(머리가 그다지 좋지 않은 것도 한몫 했습니다. 하하)
      </p>
      <p>
        이해하지도 못할 벽돌같은 책을 사서 꾸역꾸역 읽으면서 이해했다고 착각하며
        정작 뭔가를 만들어 내는건 힘들어 했어요.
      </p>
      <p>
        그런 시간이 쌓이다보니 <b>왜 필요한지 알고 배우면 좋았겠다</b> 라는
        생각이 조금씩 들기 시작했습니다.
      </p>
      <p>
        그래서 이곳에서는 여러분들께 자바스크립트의 기초 문법이 왜 필요한지에
        대해 하나씩 짚어가면서 제 생각을 공유드리고자 합니다.
      </p>
      <p>
        알려드려야 하는 만큼, 저 역시 빡세게 공부하면서 앞으로의 글들을
        이어나가겠습니다.
      </p>
      <h2>만들면서 배우기</h2>
      <p>
        이 챕터에서는 구글 크롬과 자바스크립트를 이용해서 간단한 자기소개
        페이지를 만들어보려고 합니다. 준비물은 구글 크롬입니다.
      </p>
      <p>
        (구글 크롬 브라우저는 그 자체로 훌륭한 코드 에디터가 될 수 있습니다.)
      </p>
      <p>
        이 파트에서 배우시는 것들은 하나하나 외울 필요가 없습니다. 단순히
        "이런것들을 사용하는 군!"하고 넘어가셔도 좋습니다.
      </p>
      <h3>구글 크롬 설치</h3>
      <p>
        구글 크롬을 설치하고 브라우저를 열어주세요. 여기까지는 잘 해내실거라
        믿습니다!
      </p>
      <h3>URL에 about:blank로 접속</h3>
      <Image
        src={AboutBlank}
        width={360}
        height={120}
        alt={"구글 크롬 about:blank"}
      />
      <p>
        about:blank는 브라우저가 아무것도 보여줄 게 없을 때 표시하는 빈
        페이지입니다. 새하얀 도화지와 같습니다.
      </p>
      <p>이 도화지에 우리의 자기소개 페이지를 그려보도록 하겠습니다.</p>
      <p>F12를 눌러 구글 크롬 개발자 도구를 열여볼까요?</p>
      <Image
        src={DeveloperTool}
        width={360}
        height={196}
        alt={"구글 크롬 개발자 도구"}
      />
      <p>이런 화면이 나오셨다면 성공입니다.</p>
      <p>
        요소 탭을 잘 보시면 &lt;html&gt; ... &lt;/html&gt; 내부에 &lt;head&gt;와
        &lt;body&gt;가 둘러 쌓인 것을 볼 수가 있습니다.
      </p>
      <p>
        우리는 이것들 전체를 <b>웹 문서</b>라고 하며, 웹 브라우저(구글 크롬~)는
        브라우저 화면 전체를 문서의 의미에서 <b>document</b> 라고 부릅니다.
      </p>
      <p>
        document가 뭔지 확인해보기 위해 <b>콘솔 탭</b>을 열어 아래 코드를
        입력해봅시다.
      </p>
      <CodeBox code={"console.dir(document)"} />
      <p>그럼 아래와 같은 명세가 쫙 나열된 것을 보실 수 있습니다.</p>
      <Image
        src={DocumentObject}
        width={360}
        height={571}
        alt={"document 객체"}
      />
      <p>
        문서가 객체라는 데이터 형식으로 쭈루룩 나열되어 있습니다. 이름을 그대로
        따서 document 객체라고 하며, 이 객체는 사실상 웹 그 자체입니다.
      </p>
      <p>
        이렇게 웹을 document 객체로 표현한 모델을 <b>DOM</b>이라고 합니다.
        <b> DOM은 굉장히 중요합니다.</b> 웹 개발자가 자바스크립트를 배우는
        이유가 이 DOM을 컨트롤하기 위해서라고 해도 과언이 아니기 때문입니다.
      </p>
      <p>그럼 간단한 자바스크립트 문법을 이용해서 DOM을 조작해볼까요?</p>
      <br></br>
      <p>우리가 DOM을 조작해서 만들어볼 간단한 결과물입니다.</p>
      <Image
        src={SelfIntroduceDocument}
        width={360}
        height={571}
        alt={"document 객체"}
      />

      <h2>자기소개 만들기</h2>
      <p>이제 자바스크립트를 이용하여 DOM을 컨트롤 해봅시다. 들어가보시죠!!</p>
      <p>
        거북이 사진은 나중에 넣겠습니다. 먼저 이름(닉네임)부터 넣어봅시다.
        <br></br>
        구글 콘솔에 아래의 코드를 입력해주세요.
      </p>
      <CodeBox
        code={`const body = document.querySelector("body")
const myNickName = document.createElement('h1')
myNickName.textContent = "yourNickName"
body.appendChild(myNickName)`}
      />
      <p>yourNickName은 여러분의 닉네임으로 바꾸셔도 좋습니다.</p>
      <p>
        각 명령어에 대한 장황한 설명은 잠시 생략하겠습니다. 이 챕터에서는 일단
        자바스크립트를 사용해보는게 주요 목표니까요. 흐름만 알고 넘어갑시다.
      </p>
      <p>
        <br></br>위 코드의 흐름은 다음과 같습니다.
      </p>
      <ol>
        <li>document 문서에서 body를 선택한다.</li>
        <li>
          h1 이라는 엘리먼트를 만들어 myNickName이라는 이름으로 메모리에
          할당(저장)한다.
        </li>
        <li>
          myNickName (h1 엘리먼트) 의 textContent를 "yourNickName"으로 할당한다.
        </li>
        <li>body의 자식요소에 myNickName을 추가한다.</li>
      </ol>
      <p>이제 닉네임 밑에 수평선을 그어봅시다.</p>
      <CodeBox
        code={`const hr = document.createElement('hr')
body.appendChild(hr)`}
      />
      <p>여기까지 코드를 입력하셨다면 아래와 같은 모습이 나와야 합니다.</p>
      <Image
        src={YourNickName}
        width={360}
        height={155}
        alt={"document 객체"}
      />
      <p>쭉 가보겠습니다.</p>
      <p>이번에는 내가 좋아하는 음식 목록을 나열해보겠습니다.</p>
      <p>아래 코드를 입력해보시기 바랍니다.</p>
      <CodeBox
        code={`const myFavoriteFood = document.createElement('h2')
myFavoriteFood.textContent = "내가 좋아하는 음식 목록"
body.appendChild(myFavoriteFood)
`}
      />
      <CodeBox
        code={`const myFavoriteFoodList = ['짜파게티', '굴비', '삼겹살', '고등어', '제로콜라']
const listContainer = document.createElement('ul')
for (let i = 0; i < myFavoriteFoodList.length; i++) {
  const list = document.createElement('li')
  list.textContent = myFavoriteFoodList[i]
  listContainer.appendChild(list)
}
body.appendChild(listContainer)
`}
      />
      <p>코드의 흐름을 한번 읽어보시기 바랍니다.</p>
      <p>여기서 새롭게 등장한 것은 myFavoriteFoodList와 for 키워드 입니다.</p>
      <p>
        myFavoriteFoodList = ['something', 'something', 'something',
        'something']는 배열이라고 합니다. <br></br>여러가지 데이터를 특정 순서로
        정렬하는 역할을 합니다.
      </p>
      <p>
        for 키워드는 특정 조건이 참(true)이라면 코드를 반복하겠다는 의미입니다.
        <br></br>기본적으로 컴퓨터는 자의식이 없기 때문에 어떤 것을 반복하겠다는
        것도, 반복이 끝날 시점도 전부 조건 형식으로 지정해주어야 합니다.{" "}
        <br></br>(다음 섹션에서 깊게 다뤄볼 주제입니다.)
      </p>
      <p>위 코드의 흐름입니다.</p>
      <ol>
        <li>소제목(h2)을 만들어 body에 추가한다.</li>
        <li>음식 목록을 만들고, 목록 리스트를 담을 ul 엘리먼트를 만든다.</li>
        <li>반복문을 통해 음식 리스트의 각 요소들을 ul 엘리먼트에 추가한다.</li>
        <li>ul 엘리먼트를 body에 추가한다.</li>
      </ol>
      <p>이제 거북이 사진을 넣어볼까요?</p>
      <CodeBox
        code={`const image = document.createElement('img')
image.src = "https://cdn.pixabay.com/photo/2017/04/04/14/24/turtle-2201433_1280.jpg"
image.width = "360"
image.height = "250"
image.alt = "새끼거북이"
body.insertBefore(image, body.firstChild)
`}
      />
      <p>다소 반복작업이 되고 있음이 느껴지시죠?</p>
      <p>
        여기에서는 img 엘리먼트를 만들어 그림 주소, 그림 넓이, 그림 높이, 그림
        대체 문자를 삽입했습니다.
      </p>
      <p>그리고 appendChild가 아닌 insertBefore를 사용했습니다.</p>
      <p>
        저 기능은 이름 그대로 어떤 요소를 다른 요소의 before로 추가하겠다는
        의미인데요. (before - current - after)
      </p>
      <p>
        여기에서는 image를 body의 첫번째 자식요소 앞에다가 추가하겠다는 의미로
        사용되었습니다.
      </p>
      <p>
        여기까지 오셨다면 짜잔~ 자바스크립트를 이용한 간단한 실습이
        완성되었습니다.
      </p>
      <Image
        src={SelfIntroduceDocument}
        width={360}
        height={571}
        alt={"document 객체"}
      />
      <h2>한걸음 더</h2>
      <h3>애니메이션 with DOM</h3>
      <p>
        여기서 멈추기는 아깝습니다. 약간의 어거지를 더 해서 몇가지 기능을
        추가해보도록 합시다.
      </p>
      <p>일단 거북이 사진이 뱅글뱅글 돌게 만들어 보겠습니다.</p>
      <p>위의 완성된 코드에 아래의 코드를 복사 + 붙여넣기 해주세요!</p>
      <CodeBox
        code={`const style = document.createElement('style')

style.innerHTML = \`
@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotating-element {
  animation: rotateAnimation 4s linear infinite;
}
\`

document.head.appendChild(style)

image.classList.add('rotating-element')
`}
      />
      <p>그림이 뱅글뱅글 돌고 계신가요? 그렇다면 성공입니다!</p>
      <p>
        CSS라는 stylesheet를 이용해 더 효율적인 스타일링과 애니메이션 기능을
        추가할 수 있지만
      </p>
      <p>DOM을 통해서도 가능하다는 것을 보여드리고 싶었습니다.</p>
      <h3>폭파 with 이벤트리스너</h3>
      <p>
        이제 모든 것을 없애는 버튼을 만들겠습니다. 버튼을 클릭하면 우리가 만든
        모든 것이 사라집니다.
      </p>
      <CodeBox
        code={`const button = document.createElement('button')
button.textContent = "누르면 모든 것이 사라집니다."
body.appendChild(button)

const callbackFn = () => {
  body.replaceChildren()
} // 함수입니다.

button.addEventListener('click', callbackFn) 
// 클릭을 하면 함수를 부릅니다. 
// 이런 형태의 함수를 콜백함수라고 부릅니다. (함수 내부에서 나중에 호출되는 함수)
`}
      />
      <Image src={Boom} width={360} height={608} alt={"document 객체"} />
      <p>
        위에 작성한 모든 코드들을 입력하면 아래와 같은 모양이 나올 것입니다.
      </p>
      <p>버튼을 누르면 이번 레슨이 종료됩니다!</p>
      <h2>무엇을 배워야 할까요?</h2>
      <p>지금까지 자바스크립트를 이용해서 DOM을 조작해보았습니다.</p>
      <p>그리고 우리는 다양한 자바스크립트의 문법을 사용해보았습니다.</p>
      <ol>
        <li>DOM 객체를 사용했고, 객체 접근법을 사용했다.</li>
        <li>특정 데이터를 메모리에 할당하기 위해 변수와 연산자를 사용했다.</li>
        <li>
          여러 데이터를 함께 보관하기 위해 배열을 사용했고, 반복문을 이용해 배열
          내 데이터를 화면에 표시했다.
        </li>
        <li>HTML의 메타태그인 style을 이용해 특정 애니메이션을 주입했다.</li>
        <li>
          함수를 선언했고, 사용자와 상호작용(클릭 등)을 하는 이벤트 리스너를
          달았으며, 콜백함수를 이용했다.
        </li>
      </ol>
      <p>
        다음 챕터부터는 더욱 세밀한 프로그래밍을 위해
        <b> 문법의 특성과 동작원리에 대한 비밀을 공부해 볼 것입니다.</b>
      </p>
      <p>우리가 아는 만큼 더 많은 기회가 열릴 것이기 때문입니다!</p>
      <h2>Reference</h2>
      <p>https://developer.mozilla.org/ko/docs/Glossary/URL</p>
    </div>
  );
}
