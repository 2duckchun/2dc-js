import { FunctionComponent } from 'react';

import { MDXContainer } from '@/mdx/MDXContainer';
import { MarkDownService } from '@/modules/md/markdown-service';

import '@/styles/vs2015.css';
interface pageProps {}

const getMarkdownData = async (pathname: string, filename: string) => {
  const MDService = new MarkDownService(pathname);
  return await MDService.getMarkDownData(filename);
};

const page: FunctionComponent<pageProps> = async () => {
  const data = await getMarkdownData('javascript', 'intro');

  return (
    <main className='max-w-[1280px] p-10'>
      <MDXContainer markdown={data.markdown} />
    </main>
  );
};

export default page;
