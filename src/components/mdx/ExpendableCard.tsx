'use client';

import { FunctionComponent, HTMLAttributes, useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
interface ExpendableCardProps extends HTMLAttributes<HTMLDivElement> {
  type: 'quiz';
  title: string;
}

const ExpendableCard: FunctionComponent<ExpendableCardProps> = ({
  className,
  type,
  children,
  title,
  ...props
}) => {
  if (!Array.isArray(children) || children.length !== 2) {
    throw new Error('ExpendableCard must have 2 children');
  }
  const [isExpanded, setIsExpanded] = useState(false);

  const ShowCard = children[0];
  const HideCard = children[1];

  return (
    <section
      className={cn(
        'my-3 rounded-lg border-2 border-lime-500 bg-lime-200 bg-opacity-20 p-4',
        className,
      )}
    >
      <h4 className='my-2 text-lg'>{type === 'quiz' ? '퀴즈' : '다른것!'}</h4>
      <p>{title}</p>
      {ShowCard}
      <details
        open={isExpanded}
        className='pr-7'
        onToggle={e => setIsExpanded(e.currentTarget.open)}
      >
        <summary
          className='list-none'
          onClick={e => {
            if (!(e.target instanceof HTMLButtonElement)) {
              e.preventDefault();
            }
          }}
        >
          <Button
            className='rounded-2xl bg-lime-300 text-black hover:bg-lime-400'
            onClick={() => setIsExpanded(current => !current)}
          >
            보기
          </Button>
        </summary>
        <ul>{HideCard}</ul>
      </details>
    </section>
  );
};

export { ExpendableCard };
