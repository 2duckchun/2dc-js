import { FunctionComponent, HTMLAttributes } from 'react';

import Link from 'next/link';

import {
  JavaScriptCurriculumNavInfoArray,
  SideNavInfo,
} from '@/constant/MenuArray';
import { cn } from '@/lib/utils';
interface PrevNextProps extends HTMLAttributes<HTMLDivElement> {
  prev: string;
  next: string;
}

const PrevNext: FunctionComponent<PrevNextProps> = ({
  className,
  prev,
  next,
  ...props
}) => {
  const [prevData, nextData] = findPrevAndNext({
    array: JavaScriptCurriculumNavInfoArray,
    prev,
    next,
  });

  return (
    <section
      className={cn('my-5 grid grid-cols-2 gap-3', className)}
      {...props}
    >
      <div className='h-[100px] rounded-lg bg-gray-100 p-3'>
        {prevData ? (
          <Link href={prevData.path}>
            <p className='my-1'>Prev</p>
            <p className='my-1'>{prevData.title}</p>
          </Link>
        ) : (
          <>
            <p className='my-1'>Prev</p>
            <p className='my-1'>이전 자료가 없습니다.</p>
          </>
        )}
      </div>
      <div className='h-[100px] rounded-lg bg-gray-100 p-3 '>
        {nextData ? (
          <Link href={nextData.path}>
            <p className='my-1 text-right'>Next</p>
            <p className='my-1 text-right'>{nextData.title}</p>
          </Link>
        ) : (
          <>
            <p className='my-1 text-right'>Next</p>
            <p className='my-1 text-right'>다음 자료가 없습니다.</p>
          </>
        )}
      </div>
    </section>
  );
};

export { PrevNext };

const findPrevAndNext = ({
  array,
  prev,
  next,
}: {
  array: SideNavInfo[];
  prev: string;
  next: string;
}) => {
  let prevData: undefined | { title: string; path: string };
  let nextData: undefined | { title: string; path: string };

  array.some(curriculum => {
    if (prevData && nextData) return true;
    if (curriculum.type === 'multi') {
      curriculum.subNav.some(nav => {
        if (nav.title === prev) {
          prevData = { ...nav };
        }
        if (nav.title === next) {
          nextData = { ...nav };
        }
      });
    }
  });

  return [prevData, nextData];
};
