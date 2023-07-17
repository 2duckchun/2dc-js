import Chapter0 from "./(chapter)/Chapter0";
import Chapter1 from "./(chapter)/Chapter1";

export default function JsChapterContainer({ params }: { params: any }) {
  let Chapter = Chapter0;

  switch (params.chapter) {
    case "chapter0":
      Chapter = Chapter0;
      break;
    case "chapter1":
      Chapter = Chapter1;
      break;
  }

  console.log(params.chapter);
  return <Chapter />;
}

// "use client";

// import { useEffect } from "react";
// import Prism from "prismjs";
// import "prismjs/themes/prism-tomorrow.css";

// // 서버 컴포넌트
// // 여기 들어올때 링크 판단해서 이상한 링크면 404로 리다이렉트
// // 올바르다면 chapter를 키로 사용해서 component로 교안을 불러옴
// // switch문을 사용할 수 있을 것 같음.

// const code = `let abc = 5
// console.log(abc)
// const bb = "cc"
// function abc() {
//   return 1234
// }`;

// export default function JsChapter() {
//   useEffect(() => {
//     Prism.highlightAll();
//   }, []);

//   return (
//     <div className="Code">
//       <pre>
//         <code className={`language-javascript`}>{code}</code>
//       </pre>
//     </div>
//   );
// }
