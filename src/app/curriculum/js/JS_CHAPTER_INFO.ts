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
};
