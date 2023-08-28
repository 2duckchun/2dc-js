import CustomImageWithCaption from '@/components/_common/CustomImageWithCaption';
import CustomLink from '@/components/_common/CustomLink';
import ActNavigator from '@/components/curriculum/ActNavigator';
import CodeBox from '@/components/curriculum/CodeBox';
import { chaptersInfo } from '@/constants/js_curriculum/js_chapters_info';
import styles from '@/styles/curriculum/Lecture.module.scss';

import AboutBlank from '#/images/lectures/js/chap0/about-blank.png';
import Boom from '#/images/lectures/js/chap0/boom.png';
import DeveloperTool from '#/images/lectures/js/chap0/developer-tool.png';
import DocumentObject from '#/images/lectures/js/chap0/document-object.png';
import mosaic from '#/images/lectures/js/chap0/mosaic.png';
import SelfIntroduceDocument from '#/images/lectures/js/chap0/self-introduce.png';
import YourNickName from '#/images/lectures/js/chap0/your-nick-name.png';

const lessonCode = {
  consoleDir: 'console.dir(document)',
  addingNickname: `const body = document.querySelector("body")
const myNickName = document.createElement('h1')
myNickName.textContent = "yourNickName"
body.appendChild(myNickName)`,
  addingHrTag: `const hr = document.createElement('hr')
body.appendChild(hr)`,
  addingFavoriteFoodList: `const myFavoriteFood = document.createElement('h2')
myFavoriteFood.textContent = "내가 좋아하는 음식 목록"
body.appendChild(myFavoriteFood)`,
  iterateFoodList: `const myFavoriteFoodList = ['짜파게티', '굴비', '삼겹살', '고등어', '제로콜라']
const listContainer = document.createElement('ul')
for (let i = 0; i < myFavoriteFoodList.length; i++) {
  const list = document.createElement('li')
  list.textContent = myFavoriteFoodList[i]
  listContainer.appendChild(list)
}
body.appendChild(listContainer)`,
  addingImage: `const image = document.createElement('img')
image.src = "https://cdn.pixabay.com/photo/2017/04/04/14/24/turtle-2201433_1280.jpg"
image.width = "360"
image.height = "250"
image.alt = "새끼거북이"
body.insertBefore(image, body.firstChild)`,
  addingStyleTagWithKeyFrame: `const style = document.createElement('style')

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
  
image.classList.add('rotating-element')`,
  addingBoomButton: `const button = document.createElement('button')
button.textContent = "누르면 모든 것이 사라집니다."
body.appendChild(button)
  
const callbackFn = () => {
  body.replaceChildren()
} // 함수입니다.
  
button.addEventListener('click', callbackFn) 
// 클릭을 하면 함수를 부릅니다. 
// 이런 형태의 함수를 콜백함수라고 부릅니다. (함수 내부에서 나중에 호출되는 함수)`,
};

export default function Lecture() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum='js'
        highlightActNum={1}
        chapterInfo={chaptersInfo.chapter0}
      ></ActNavigator>

      <h1>환영합니다!</h1>
      <p>
        안녕하세요! 꾸준히 성장하며, 아웃풋을 내려고 노력하는 개발자 2DC입니다.
      </p>
      <p>
        저는 지식을 공유하는 활동에 관심이 많습니다. 어려서부터 그랬던 것
        같아요.
      </p>
      <p>
        타인에게 내가 알고있는 것들을 알려줄 수 있는 것만큼 즐거운 것은 없다고
        생각합니다.
      </p>
      <p>
        그래서 이 사이트를 준비했습니다. (타인을 알려주기 위해 공부하는 것이
        가장 효과적인 공부법이라고 하더라구요.)
      </p>
      <br />
      <p>이 커리큘럼은 자바스크립트를 처음 다루시는 분들을 대상으로 합니다.</p>
      <p>
        한번 쓱 훑어보시되, 기초적인 지식들을 습득하기 좋도록 커리큘럼을
        고민했습니다.
      </p>
      <p>
        커리큘럼의 목적은 여러분들께 (제가 생각하는) 자바스크립트의 기초적인
        부분을 재빠르게 알려드리는 것입니다.
      </p>
      <p>간단하게, 지식의 마중물이라고 하면 좋을 것 같습니다.</p>

      <h2>왜 필요한지 알고 배우기</h2>
      <p>
        저는 22년 6~7월에 본격적으로 자바스크립트를 본격적으로 공부를 했습니다.
      </p>
      <p>당시를 회고해보면 너무 무식하고 비효율적으로 공부를 했던 것 같아요.</p>
      <p>
        이해하지도 못할 벽돌같은 책들을 주렁주렁 사서 읽다가 이해가 안가서
        포기하기도 했고요.
      </p>
      <p>
        이것만 보면 취업 완성! 비슷한 책들을 사다가 몇번 읽고 던져버리기도
        했습니다.
      </p>
      <p>
        어떻게 꾸역꾸역 보면서 따라하더라도, 이해했다고 착각만 하며 뭔가를
        만들어내는 것은 굉장히 어려웠습니다.
      </p>
      <p>
        그런 인고(?)의 시간이 쌓이다보니,{' '}
        <b>왜 필요한지 알고 배우면 좋았겠다.</b> 라는 생각이 들게 되었습니다.
      </p>
      <p>
        사실 이렇게 말한다고 해서 제가 많은 것을 아는 개발자는 아닙니다. 배우고
        있는 학생이고, 취준생이기도 합니다.
      </p>
      <p>
        하지만 신분을 떠나, 여러분들께 어떻게 하면 좋은 내용을 효과적으로 전달할
        수 있을지 집중해보려 합니다.
      </p>
      <p>
        물론 저도 많은 공부가 필요하다는 것을 인지하고, 앞으로의 글들을
        이어나가보도록 하겠습니다.
      </p>

      <h2>자바스크립트의 역사</h2>
      <CustomImageWithCaption
        imageSrc={mosaic}
        width={360}
        height={302}
        alt={'모자이크 브라우저'}
        caption='8~90년대 브라우저 화면입니다!'
      />
      <p>적을 알고 나를 알면 백전불태라는 말이 있습니다.</p>
      <p>
        자바스크립트가 우리의 적도 아니고, 배운다고 해서 위태로울 일도 없지만
      </p>
      <p>
        뭔가를 배우기 전에, 배울 것의 역사나 흐름을 알고 가면 더 흥미롭게 배울
        수 있는 것 같습니다.
      </p>
      <p>
        자바스크립트의 역사를 기가 막히게 알려주시는 유튜브 채널이 하나
        있는데요.
      </p>
      <p>
        너무 좋아서 공유를 드립니다. 홍보는 아니고요. 제가 어줍잖게 설명하는 것
        보다 이 영상이 여러모로 나을 것 같았습니다.
      </p>
      <p>자바스크립트와 웹의 역사! 보고 오시죠!</p>
      <p>
        유튜브의 알고리즘에 빠지지 마시고, 이 영상만 보시고 바로 돌아와주세요!
      </p>
      <CustomLink
        href={{ pathname: 'https://youtu.be/wcsVjmHrUQg' }}
        isBlank={true}
      >
        <p>자바스크립트 배우기 전 꼭 봐야할 영상! [드림코딩 엘리]</p>
      </CustomLink>

      <h2>브라우저와 함께 놀아보기</h2>
      <p>잘 보고 오셨나요!</p>
      <p>지금은 아무것도 생각하지 맙시다. 그냥 브라우저랑 놀아봅시다.</p>
      <p>우리가 자바스크립트로 뭘 할 수 있을지 배워보는 시간입니다.</p>
      <p>
        엘리 영상에서도 보셨다시피, 자바스크립트의 근본은{' '}
        <b>웹(브라우저) 컨트롤</b> 언어 입니다.
      </p>
      <p>그러므로 자바스크립트로 브라우저를 컨트롤 해보도록 하겠습니다.</p>
      <p>준비물은 구글 크롬입니다. 다른 것은 필요 없습니다.</p>
      <p>크롬 브라우저는 그 자체로도 훌륭한 자바스크립트 런타임 환경입니다.</p>
      <p>(런타임 환경이란 프로그래밍 언어가 실행되는 환경이라는 의미입니다.)</p>
      <br />
      <p>
        여기서 나오는 것들은 외우려고 하지 마시고,{' '}
        <b>아! 이런것들을 활용하는군! </b>
        하며 넘어가주시길 부탁드립니다.
      </p>
      <p>여기서 당장 익혀봐야 다시 사용하실 수 없습니다.</p>
      <p>
        중요한 것은 자력으로 쓸 수 있느냐이며, 어짜피 다시 스스로 익히셔야
        합니다.
      </p>

      <h2>구글 크롬 설치</h2>
      <p>
        구글 크롬을 설치하고 브라우저를 열어주세요. 여기까지는 잘 해내실거라
        믿습니다!
      </p>
      <p>구글 크롬 다운로드에 설명은 필요 없겠지요!! 생략합니다!!</p>

      <h3>URL에 about:blank로 접속</h3>
      <CustomImageWithCaption
        imageSrc={AboutBlank}
        width={360}
        height={120}
        alt={'구글 about:blank'}
        caption='주소창에 about:blank를 입력해주세요!'
      />
      <p>구글 크롬 주소창에 about:blank를 입력해봅시다.</p>
      <p>
        about:blank는 브라우저가 아무것도 보여줄 게 없을 때 표시하는 빈
        페이지입니다. 새하얀 도화지와 같습니다.
      </p>
      <p>
        우리는 이 도화지에 오로지 자바스크립트만을 이용해서 자기소개 페이지를
        그려보려 합니다.
      </p>
      <p>F12를 눌러 구글 크롬 개발자 도구라는 것을 열여볼까요?</p>
      <br />
      <CustomImageWithCaption
        imageSrc={DeveloperTool}
        width={360}
        height={196}
        alt={'구글 크롬 개발자 도구'}
        caption='about:blank는 오염되지 않은 깨끗한 웹 환경입니다.'
      />
      <p>이런 화면이 나오셨다면 성공입니다.</p>
      <p>
        요소 탭을 잘 보시면 &lt;html&gt; ... &lt;/html&gt; 내부에 &lt;head&gt;와
        &lt;body&gt;.. 이런 것들을 보실 수 있는데요.
      </p>
      <p>
        우리는 이것들을 <b>웹 문서(document)</b>라고 합니다.
      </p>
      <p>보고서같이 각종 정보가 담긴 종이들을 문서라고 하잖아요?</p>
      <p>
        웹 문서도 비슷합니다. 과거의 웹 문서는 논문 공유하는 문서의 역할을
        했다고 해요.
      </p>
      <p>다만 프로그래밍화 된 문서인 것이지요.</p>
      <p>
        이 웹 문서를 컴퓨터상에 효과적으로 나타내기 위해 html이라는 확장자를
        이용하고,
      </p>
      <p>
        문서의 구조를 나타내기 위해 고구마 줄기와 비슷한 트리라는 자료구조를
        이용하는 것입니다.
      </p>
      <p>
        (쉽게 말하는 것은 쉽지만 내부에서 어떻게 얽히고 섥혀있는지는 저도 잘
        모르겠습니다. ㅎㅎ 차차 알아가려고 합니다.)
      </p>
      <p>아무튼 웹 문서를 document라고 하는 것 까지는 알겠습니다.</p>
      <br />
      <p>
        그럼 브라우저에서 document는 어떻게 생겼는지 확인하기 위해{' '}
        <b>콘솔 탭</b>을 눌러 아래 코드를 입력해봅시다.
      </p>
      <CodeBox code={lessonCode.consoleDir} />
      <p>그럼 아래와 같은 명세가 쫙 나열된 것을 보실 수 있습니다.</p>
      <CustomImageWithCaption
        imageSrc={DocumentObject}
        width={360}
        height={571}
        alt={'document 객체'}
        caption='console.dir로 요소를 찝으면 객체 형태의 DOM API를 까볼 수 있습니다.'
      />
      <p>document의 데이터가 쭉 나열되어 있는 것을 보실 수 있습니다.</p>
      <p>
        하나의 대상을 여러개의 데이터로 설명하는 데이터 형식을 객체(Object)라고
        하는데요.
      </p>
      <p>
        위의 사진을 보면 document를 설명하기 위한 여러개의 데이터가 묶여있는
        것을 보실 수 있지요.
      </p>
      <p>document를 객체로 표현한 것 입니다.</p>
      <p>
        웹 개발에서는 document를 객체로 표현한 것을 DOM(Document Object
        Model)이라고 하는데요.
      </p>
      <p>
        웹 문서 자체가 document이기 때문에, document의 데이터만 잘 다뤄도 거의
        모든 것을 하실 수 있습니다.
      </p>
      <p>그리고 그 DOM을 다루는 언어가 바로 자바스크립트가 되겠습니다.</p>
      <p>그럼 간단한 자바스크립트 문법을 이용해서 DOM을 조작해볼까요?</p>
      <br></br>
      <p>우리가 DOM을 조작해서 만들어볼 간단한 결과물입니다.</p>
      <CustomImageWithCaption
        imageSrc={SelfIntroduceDocument}
        width={360}
        height={571}
        alt={'자기소개 화면'}
        caption='크롬 콘솔만으로도 간단하게 화면을 구성할 수 있습니다! 물론 생산성은 제로입니다!'
      />
      <h2>자기소개 만들기</h2>
      <p>자바스크립트를 통해 본격적으로 DOM을 컨트롤 해보겠습니다. 가시죠!</p>
      <p>
        일단 거북이 사진은 나중에 넣겠습니다. 먼저 이름(닉네임)부터 넣어봅시다.
      </p>
      <p>구글 콘솔에 아래의 코드를 입력해주세요.</p>
      <CodeBox code={lessonCode.addingNickname} />
      <br />
      <p>yourNickName은 여러분의 닉네임으로 바꾸셔도 좋습니다.</p>
      <p>
        이상한 명령어들이 보이실겁니다. 이것에 대한 설명은 일단 생략하겠습니다.
      </p>
      <p>나중에 DOM에 대해 공부하실 때 아시게 될 코드들입니다!</p>
      <br />
      <p>일단 코드의 흐름은 아래와 같습니다</p>
      <p>위에 있는 코드와 설명을 하나씩 대조해서 비교해보시죠!</p>
      <ol>
        <li>document 문서에서 body를 선택한다.</li>
        <li>
          h1 이라는 엘리먼트를 myNickName이라는 이름으로 메모리에
          할당(저장)한다.
        </li>
        <li>
          myNickName (h1 엘리먼트) 의 textContent를 &#34;yourNickName &#34;으로
          할당한다.
        </li>
        <li>body의 자식 요소에 myNickName을 추가한다.</li>
      </ol>
      <p>오리엔테이션이니만큼 모든 것을 이해하지 않으셔도 됩니다!</p>
      <p>
        다만 우리가 무엇을 선언할 때, 그것이 컴퓨터의 메모리에 저장된다는 것만
        인지하고 넘어가시죠!
      </p>
      <br />
      <p>이제 닉네임 밑에 수평선을 그어봅시다.</p>
      <CodeBox code={lessonCode.addingHrTag} />
      <p>여기까지 코드를 입력하셨다면 아래와 같은 모습이 나와야 합니다.</p>
      <CustomImageWithCaption
        imageSrc={YourNickName}
        width={360}
        height={155}
        alt={'h1 태그와 hr태그가 body에 추가된 사진'}
        caption='h1태그와 hr태그가 body에 추가되었습니다.'
      />
      <br />
      <p>잘 오시고 계신가요?</p>
      <p>쭉 가보겠습니다.</p>
      <p>이번에는 음식 목록을 나열해 볼 건데요.</p>
      <p>아래 코드를 콘솔에 입력해보시기 바랍니다.</p>
      <CodeBox code={lessonCode.addingFavoriteFoodList} />
      <br />
      <CodeBox code={lessonCode.iterateFoodList} />
      <p>코드를 눈으로만 다시 한번 훑어볼까요?</p>
      <p>
        대괄호에 둘러 쌓인 데이터(myFavoriteFoodList)와 for라는 키워드가
        보이실거에요!
      </p>
      <p>
        myFavoriteFoodList = [ &#39;something &#39;, &#39;something &#39;,
        &#39;something &#39;, &#39;something &#39;]는 배열(Array)이라고 합니다.
      </p>
      <p>여러가지 데이터를 나열해놓고 묶어두는 역할을 합니다.</p>
      <p>
        한가지 대상을 설명하기 위한 여러 데이터로 구성된 객체(Object)와는 약간
        다른 데이터 형식입니다.
      </p>
      <p>나중에 진지하게 공부해볼 녀석이지요.</p>
      <br />
      <p>
        for 키워드는 <b>특정 조건이 참(true)</b>이라면 주어진 코드를 반복하는
        기계라고 할 수 있습니다. (반복문이라고 합니다.)
      </p>
      <p>
        기본적으로 컴퓨터는 계산기이기 때문에, 어떤것을 반복하겠다는 것도,
        반복이 끝날 시점도 모두 조건으로 정해줘야 합니다.
      </p>
      <p>반복문도 다음에 진지하게 공부해볼 녀석 중 하나입니다.</p>
      <br />
      <p>위의 코드의 흐름입니다.</p>
      <p>이번에도 코드와 흐름을 대조해보면서 살짝만 이해해볼까요.</p>
      <ol>
        <li>소제목(h2)을 만들어 body에 추가한다.</li>
        <li>음식 목록을 만들고, 목록 리스트를 담을 ul 엘리먼트를 만든다.</li>
        <li>반복문을 통해 음식 리스트의 각 요소들을 ul 엘리먼트에 추가한다.</li>
        <li>ul 엘리먼트를 body에 추가한다.</li>
      </ol>
      <p>고생하셨습니다!</p>
      <br />
      <p>이제 거북이 사진을 넣어볼까요?</p>
      <CodeBox code={lessonCode.addingImage} />
      <br />
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
      <br />
      <p>
        여기까지 오셨다면 짜잔~ 자바스크립트를 이용한 간단한 실습이
        완성되었습니다.
      </p>
      <CustomImageWithCaption
        imageSrc={SelfIntroduceDocument}
        width={360}
        height={571}
        alt={'자기소개 화면'}
        caption='만드느라 고생하셨습니다~!'
      />
      <h1>한걸음 더</h1>
      <h3>애니메이션 with DOM</h3>
      <p>
        여기서 멈추기는 아깝습니다. 약간의 어거지를 더해서 몇가지 기능을
        추가해보도록 합시다.
      </p>
      <p>일단 거북이 사진이 뱅글뱅글 돌게 만들어 보겠습니다.</p>
      <p>위의 완성된 코드에 아래의 코드를 복사 + 붙여넣기 해주세요!</p>
      <br />
      <CodeBox code={lessonCode.addingStyleTagWithKeyFrame} />
      <br />
      <p>그림이 뱅글뱅글 돌고 계신가요? 그렇다면 성공입니다!</p>
      <p>
        CSS라는 stylesheet를 이용해 더 효율적인 스타일링과 애니메이션 기능을
        추가할 수 있지만
      </p>
      <p>DOM을 통해서도 가능하다는 것을 보여드리고 싶었습니다.</p>
      <p>자바스크립트로도 다 할 수 있다는 것을요!!</p>
      <br />
      <h3>오리엔테이션 폭파 with 이벤트 리스너</h3>
      <p>
        이제 모든 것을 없애는 버튼을 만들겠습니다. 버튼을 클릭하면 우리가 만든
        모든 것이 사라집니다.
      </p>
      <CodeBox code={lessonCode.addingBoomButton} />
      <p>(위의 코드 주석들은 꼭 한번만 읽어주세요!)</p>
      <br />
      <CustomImageWithCaption
        imageSrc={Boom}
        width={360}
        height={608}
        alt={'화면에 keyframe 추가'}
        caption='style 태그를 head 태그에 강제로 주입해서 애니메이션을 추가해보았습니다.'
      />
      <p>위에 작성한 모든 코드들을 입력하면 맨 아래 버튼이 생성될 것입니다.</p>
      <p>그리고 버튼을 누르면 모든 것이 사라지고 이번 레슨이 종료됩니다!</p>
      <h1>무엇을 배워야 할까요?</h1>
      <p>지금까지 자바스크립트를 이용해서 DOM을 조작해 보았는데요.</p>
      <p>DOM을 조작하면서, 생각보다 많은 자바스크립트의 문법을 사용했습니다!</p>
      <ol>
        <li>특정 데이터를 메모리에 할당하기 위해 변수와 연산자를 사용했다.</li>
        <li>DOM을 컨트롤 하기 위해 DOM API라는 것을 이용했다.</li>
        <li>객체 접근법을 사용해 객체를 컨트롤 했다.</li>
        <li>
          여러 데이터를 함께 보관하기 위해 배열을 사용했고, 반복문을 이용해 배열
          속 데이터를 화면에 표시했다.
        </li>
        <li>HTML의 메타태그인 style을 이용해 특정 애니메이션을 주입했다.</li>
        <li>
          함수를 선언했고, 사용자와 상호작용(클릭 등)을 하는 이벤트 리스너를
          사용했으며, 이벤트가 일어날 때 실행될 콜백함수를 만들었다.
        </li>
      </ol>
      <p>생각보다 많은 것을 다루셨습니다!</p>
      <p>
        사실 이렇게 실전으로 배워서 프로그래밍의 고수가 되시는 분들도 많은 것
        같습니다.
      </p>
      <p>뭐... 사실 어떤 방식이든, 맞는 방법을 찾으시면 되는 것 같아요.</p>
      <p>
        저는 언어의 원리를 좀 더 이해하는 방식의 공부를 좋아해서 이 방향을
        택했습니다. ㅎㅎ
      </p>
      <br />
      <p>
        다음 챕터부터는 자바스크립트 문법에 대해 본격적으로 공부해볼 것입니다.
      </p>
      <p>DOM을 다루는 일은 당분간 없을 예정입니다.</p>
      <p>
        하지만 커리큘럼이 끝날 때 쯤, 스스로 DOM을 컨트롤 하실 수 있을 겁니다!
      </p>
      <p>함께 가시죠!</p>
    </div>
  );
}
