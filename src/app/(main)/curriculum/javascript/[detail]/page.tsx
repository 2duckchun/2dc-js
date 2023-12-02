import { FunctionComponent } from 'react';

import { MDXContainer } from '@/mdx/MDXContainer';
import { Toc } from '@/mdx/types';
import '@/styles/vs2015.css';
import { MarkDownService } from '@/modules/md/markdown-service';
import { makeTocTree } from '@/utils/makeTocTree';
import { parseTocTreeToString } from '@/utils/parseTocTreeToString';
interface pageProps {
  params: {
    detail: string;
  };
}

const getMarkdownData = async (pathname: string, filename: string) => {
  const MDService = new MarkDownService(pathname);
  const mdData = await MDService.getMarkDownData(filename);
  const toc = parseTocTreeToString(makeTocTree(mdData.markdown));
  const markdownWithToc = mdData.markdown.replace('<TocData />', `${toc}`);
  return { ...mdData, markdown: markdownWithToc };
};

const page: FunctionComponent<pageProps> = async ({ params: { detail } }) => {
  const data = await getMarkdownData('javascript', detail);

  return (
    <main className='m-auto max-w-[1280px] p-10'>
      <MDXContainer markdown={data.markdown} />
    </main>
  );
};

export default page;
