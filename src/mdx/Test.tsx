import { FunctionComponent, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
interface TestProps extends HTMLAttributes<HTMLDivElement> {}

const Test: FunctionComponent<TestProps> = ({
  className,
  children,
  ...props
}) => {
  console.log(children);
  return (
    <div className={cn(className)} {...props}>
      {children[1]}
    </div>
  );
};

export { Test };
