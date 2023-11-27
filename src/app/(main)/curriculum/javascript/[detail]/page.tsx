import { FunctionComponent } from 'react';

import rehypeHighlight from 'rehype-highlight';

import { MDXContainer } from '@/mdx/MDXContainer';
import { MarkDownService } from '@/modules/md/markdown-service';

import '@/styles/vs2015.css';
interface pageProps {
  params: {
    detail: string;
  };
}

const options: any = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

const getMarkdownData = async (pathname: string, filename: string) => {
  const MDService = new MarkDownService(pathname);
  return await MDService.getMarkDownData(filename);
};

const page: FunctionComponent<pageProps> = async ({ params: { detail } }) => {
  const data = await getMarkdownData('javascript', detail);
  return (
    <main className='p-10'>
      <MDXContainer markdown={data.markdown} />
    </main>
  );
};

export default page;
