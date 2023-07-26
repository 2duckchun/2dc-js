import { ChaptersInfo } from "@/types/common";

export const chaptersInfo: ChaptersInfo = {
  chapter0: {
    chapterName: "chapter0",
    actInfo: [
      {
        name: "orientation",
        act: 1,
        banner: "Act1 : 오리엔테이션",
      },
      {
        name: "operator",
        act: 2,
        banner: "Act2 : 필수 연산자",
      },
    ],
  },
  chapter1: {
    chapterName: "chapter1",
    actInfo: [
      {
        name: "variables",
        act: 1,
        banner: "Act1 : 변수(variables)",
      },
      {
        name: "control-statements",
        act: 2,
        banner: "Act2 : 제어문(control-statements)",
      },
      {
        name: "scope",
        act: 3,
        banner: "Act3 : 스코프(scope)",
      },
    ],
  },
  chapter2: {
    chapterName: "chapter2",
    actInfo: [
      {
        name: "function-fundamental",
        act: 1,
        banner: "Act1 : 함수의 기본",
      },
      {
        name: "closure",
        act: 2,
        banner: "Act2 : 클로저(closure)",
      },
      {
        name: "recursion",
        act: 3,
        banner: "Act3 : 재귀(recursion)",
      },
    ],
  },
};
