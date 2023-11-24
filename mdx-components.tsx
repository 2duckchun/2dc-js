import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    HighLight: props => <div className='bg-red-400' {...props} />,
    ...components,
  };
}
