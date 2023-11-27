import { ExpendableCard } from './ExpendableCard';
import { Important } from './Important';
import { Intro } from './Intro';
import { PrevNext } from './PrevNext';
import { Recap } from './Recap';
import { Test } from './Test';
import { Wrapper } from './Wrapper';
import { YouWillLearn } from './YouWillLearn';

export const MDXComponent = {
  Intro,
  YouWillLearn,
  Recap,
  Important,
  PrevNext,
  Test,
  QuestionCard: (props: { children: React.ReactNode; title: string }) => {
    return <ExpendableCard {...props} type='quiz' />;
  },
  Wrapper,
};
