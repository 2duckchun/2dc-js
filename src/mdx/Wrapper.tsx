import { FunctionComponent, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

const Wrapper: FunctionComponent<WrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
};

export { Wrapper };
