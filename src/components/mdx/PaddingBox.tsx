import { FunctionComponent, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
interface ImportantProps extends HTMLAttributes<HTMLDivElement> {}

const PaddingBox: FunctionComponent<ImportantProps> = ({
  className,
  children,
  title,
  ...props
}) => {
  return (
    <div
      className={cn('rounded-lg bg-slate-300 bg-opacity-50 px-5 py-4')}
      {...props}
    >
      <h3 className='mb-3 mt-1'>{title}</h3>
      <div className='rounded-lg bg-white p-3'>{children}</div>
    </div>
  );
};

export { PaddingBox };
