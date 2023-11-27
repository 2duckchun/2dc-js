import { FunctionComponent, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface IntroProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  textColor?: string;
}

const Intro: FunctionComponent<IntroProps> = ({
  children,
  textColor,
  ...props
}) => {
  return (
    <div className={cn('text-xl', textColor)} {...props}>
      {children}
    </div>
  );
};

export { Intro };
