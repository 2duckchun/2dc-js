import { ExpendableCard } from './ExpendableCard';
import { Important } from './Important';
import { Intro } from './Intro';
import { PaddingBox } from './PaddingBox';
import { PrevNext } from './PrevNext';
import { Recap } from './Recap';
import { Wrapper } from './Wrapper';
import { YouWillLearn } from './YouWillLearn';

export const MDXComponent = {
  Intro,
  YouWillLearn,
  Recap,
  Important,
  PrevNext,
  QuestionCard: (props: { children: React.ReactNode; title: string }) => {
    return <ExpendableCard {...props} type='quiz' />;
  },
  Wrapper,
  InlineToc: (props: { children: React.ReactNode }) => {
    return (
      <div className='my-10 rounded-xl border-2 p-5'>
        <h2 className='mt-2'>Table Of Content</h2>
        {props.children}
      </div>
    );
  },
  BoxWithTitle: (props: { children: React.ReactNode; title: string }) => {
    return <PaddingBox {...props} />;
  },
  TocData: (props: { children: React.ReactNode }) => {
    return <></>;
  },
};
