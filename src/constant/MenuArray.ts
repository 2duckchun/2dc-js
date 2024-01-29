import { AppPath } from './AppPath';

type MultiSideNavInfo = {
  type: 'multi';
  title: string;
  subNav: {
    title: string;
    path: string;
  }[];
};

type SingleSideNavInfo = {
  type: 'single';
  title: string;
  path: string;
};

export type SideNavInfo = MultiSideNavInfo | SingleSideNavInfo;

export const TopNavInfoArray = [
  {
    title: 'JS 커리큘럼',
    path: AppPath.curriculum(),
  },
  {
    title: '포스트',
    path: AppPath.post(),
  },
  {
    title: 'REPO',
    path: AppPath.myRepo(),
  },
];

export const MainSideNavInfoArray: SideNavInfo[] = [
  {
    type: 'multi',
    title: '커리큘럼',
    subNav: [
      {
        title: '자바스크립트',
        path: AppPath.curriculumTo('javascript'),
      },
    ],
  },
  {
    type: 'multi',
    title: '포스트',
    subNav: [
      {
        title: '개발일지',
        path: AppPath.postTo('diary'),
      },
      {
        title: '일기',
        path: AppPath.curriculumTo('dev'),
      },
    ],
  },
  {
    type: 'single',
    title: 'ABOUT ME',
    path: AppPath.aboutMe(),
  },
];

export const JavaScriptCurriculumNavInfoArray: SideNavInfo[] = [
  {
    type: 'multi',
    title: '시작하기전에...',
    subNav: [
      {
        title: '안녕하세요!',
        path: AppPath.curriculumTo('javascript', 'intro'),
      },
      {
        title: 'CS 단 1g',
        path: AppPath.curriculumTo('javascript', 'basic-cs'),
      },
    ],
  },
  {
    type: 'multi',
    title: '입문!',
    subNav: [
      {
        title: '변수',
        path: AppPath.curriculumTo('javascript', 'variables'),
      },
      {
        title: '연산자',
        path: AppPath.curriculumTo('javascript', 'operator'),
      },
      {
        title: '데이터 타입',
        path: AppPath.curriculumTo('javascript', 'data-type'),
      },
      {
        title: '조건문',
        path: AppPath.curriculumTo('javascript', 'conditional-statement'),
      },
      {
        title: '반복문',
        path: AppPath.curriculumTo('javascript', 'loop'),
      },
      {
        title: '배열',
        path: AppPath.curriculumTo('javascript', 'array'),
      },
      {
        title: '객체',
        path: AppPath.curriculumTo('javascript', 'object'),
      },
      {
        title: '함수',
        path: AppPath.curriculumTo('javascript', 'function'),
      },
    ],
  },
  {
    type: 'multi',
    title: '기초 심화!',
    subNav: [
      {
        title: '변수와 호이스팅',
        path: AppPath.curriculumTo('javascript', 'advanced-variable'),
      },
      {
        title: '실행 컨텍스트',
        path: AppPath.curriculumTo('javascript', 'execution-context'),
      },
      {
        title: '고차함수',
        path: AppPath.curriculumTo('javascript', 'higher-order-function'),
      },
      {
        title: '프로토타입',
        path: AppPath.curriculumTo('javascript', 'prototype'),
      },
      {
        title: '클래스',
        path: AppPath.curriculumTo('javascript', 'class'),
      },
    ],
  },
];

export const DataStructureCurriculumNavInfoArray: SideNavInfo[] = [
  {
    type: 'multi',
    title: '링크드 리스트',
    subNav: [
      {
        title: '싱글 링크드 리스트',
        path: AppPath.curriculumTo('data-structure', 'sll'),
      },
      {
        title: '더블 링크드 리스트',
        path: AppPath.curriculumTo('data-structure', 'dll'),
      },
    ],
  },
  {
    type: 'multi',
    title: '스택, 큐',
    subNav: [
      {
        title: '스택',
        path: AppPath.curriculumTo('data-structure', 'stack'),
      },
      {
        title: '큐',
        path: AppPath.curriculumTo('data-structure', 'queue'),
      },
    ],
  },
  {
    type: 'multi',
    title: '힙, 우선순위 큐',
    subNav: [
      {
        title: '힙',
        path: AppPath.curriculumTo('data-structure', 'heap'),
      },
      {
        title: '우선순위 큐',
        path: AppPath.curriculumTo('data-structure', 'priority-queue'),
      },
    ],
  },
];
