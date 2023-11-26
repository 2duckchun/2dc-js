import { AppPath } from './AppPath';

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

export const MainSideNavInfoArray = [
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
