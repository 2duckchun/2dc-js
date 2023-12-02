import { FunctionComponent, HTMLAttributes } from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import { cn } from '@/lib/utils';
import { MDXComponent } from '@/mdx/MDXComponent';

interface MDXContainerProps extends HTMLAttributes<HTMLDivElement> {
  markdown: string;
}

const MDXContainer: FunctionComponent<MDXContainerProps> = ({
  className,
  markdown,
  ...props
}) => {
  return (
    <div className={cn('markdown max-w-none', className)} {...props}>
      <MDXRemote
        components={MDXComponent}
        source={markdown}
        options={options}
      />
    </div>
  );
};

export { MDXContainer };

const options: any = {
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  },
};
