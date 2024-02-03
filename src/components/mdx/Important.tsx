import { FunctionComponent, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
interface ImportantProps extends HTMLAttributes<HTMLDivElement> {}

const Important: FunctionComponent<ImportantProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('rounded-lg bg-red-100 bg-opacity-50 p-5')} {...props}>
      <h3 className='my-3'>중요합니다!</h3>
      <div className='rounded-lg bg-white p-3'>{children}</div>
    </div>
  );
};

export { Important };
