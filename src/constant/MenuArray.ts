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
    title: 'curriculum',
    path: AppPath.curriculum(),
  },
  {
    title: 'post',
    path: AppPath.post(),
  },
  {
    title: 'repo',
    path: AppPath.myRepo(),
  },
];

export const MainSideNavInfoArray: SideNavInfo[] = [
  {
    type: 'multi',
    title: 'CURRICULUM',
    subNav: [
      {
        title: 'javascript',
        path: AppPath.curriculumTo('javascript'),
      },
      {
        title: 'network',
        path: AppPath.curriculumTo('network'),
      },
    ],
  },
  {
    type: 'multi',
    title: 'POST',
    subNav: [
      {
        title: 'diary',
        path: AppPath.postTo('diary'),
      },
      {
        title: 'dev',
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
    title: '입문!',
    subNav: [
      {
        title: '변수',
        path: AppPath.curriculumTo('javascript'),
      },
      {
        title: '연산자',
        path: AppPath.curriculumTo('network'),
      },
      {
        title: '함수',
        path: AppPath.curriculumTo('network'),
      },
      {
        title: '객체',
        path: AppPath.curriculumTo('network'),
      },
    ],
  },
  {
    type: 'multi',
    title: '기초 심화!',
    subNav: [
      {
        title: '변수와 호이스팅',
        path: AppPath.curriculumTo('javascript'),
      },
      {
        title: '실행 컨텍스트',
        path: AppPath.curriculumTo('network'),
      },
      {
        title: '고차함수',
        path: AppPath.curriculumTo('network'),
      },
      {
        title: '프로토타입',
        path: AppPath.curriculumTo('network'),
      },
      {
        title: '클래스',
        path: AppPath.curriculumTo('network'),
      },
    ],
  },
];
