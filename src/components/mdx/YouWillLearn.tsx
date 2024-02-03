import { FunctionComponent, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
interface YouWillLearnProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const YouWillLearn: FunctionComponent<YouWillLearnProps> = ({
  className,
  children,
  title,
  ...props
}) => {
  return (
    <div className={cn('rounded-lg bg-gray-100 p-5', className)} {...props}>
      <h2 className='my-2'>{title ? title : '학습 목표'}</h2>
      {children}
    </div>
  );
};

export { YouWillLearn };
