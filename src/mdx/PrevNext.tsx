import { FunctionComponent, HTMLAttributes } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';
interface PrevNextProps extends HTMLAttributes<HTMLDivElement> {
  prevLink: string;
  prevTitle: string;
  nextLink: string;
  nextTitle: string;
}

const PrevNext: FunctionComponent<PrevNextProps> = ({
  className,
  prevLink,
  prevTitle,
  nextLink,
  nextTitle,
  ...props
}) => {
  return (
    <section
      className={cn('my-5 grid grid-cols-2 gap-3', className)}
      {...props}
    >
      <div className='h-[100px] rounded-lg bg-gray-100 p-3'>
        {prevLink && prevTitle ? (
          <Link href={prevLink}>
            <p className='my-1'>Prev</p>
            <p className='my-1'>{prevTitle}</p>
          </Link>
        ) : (
          <>
            <p className='my-1'>Prev</p>
            <p className='my-1'>이전 자료가 없습니다.</p>
          </>
        )}
      </div>
      <div className='h-[100px] rounded-lg bg-gray-100 p-3 '>
        {nextLink && nextTitle ? (
          <Link href={nextLink}>
            <p className='my-1 text-right'>Next</p>
            <p className='my-1 text-right'>{nextTitle}</p>
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
