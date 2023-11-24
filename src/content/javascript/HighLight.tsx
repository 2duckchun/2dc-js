import { FunctionComponent, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
interface HighLightProps extends HTMLAttributes<HTMLDivElement> {}

const HighLight: FunctionComponent<HighLightProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={'bg-red-400 text-xl font-bold'} {...props}>
      {children}
    </div>
  );
};

export { HighLight };
