import { FunctionComponent, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
interface RecapProps extends HTMLAttributes<HTMLDivElement> {}

const Recap: FunctionComponent<RecapProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('rounded-lg bg-blue-50 p-5')} {...props}>
      {children}
    </div>
  );
};

export { Recap };
