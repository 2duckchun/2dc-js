import { FunctionComponent } from 'react';

import { MDXContainer } from '@/mdx/MDXContainer';
import { Toc } from '@/mdx/types';
import '@/styles/vs2015.css';
import { MarkDownService } from '@/modules/md/markdown-service';
import { makeTocTree } from '@/utils/makeTocTree';
interface pageProps {
  params: {
    detail: string;
  };
}

const getMarkdownData = async (pathname: string, filename: string) => {
  const MDService = new MarkDownService(pathname);
  const mdData = await MDService.getMarkDownData(filename);
  const toc = tocParser(makeTocTree(mdData.markdown));
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

const tocParser = (recursiveTree: Toc[]): any => {
  let result = '';
  for (let i = 0; i < recursiveTree.length; i++) {
    result =
      result +
      `<ul><li><a href="#${recursiveTree[i].link}" className="no-underline hover:text-blue-400">${recursiveTree[i].title}</a></li>`;
    for (let j = 0; j < recursiveTree[i].children?.length!; j++) {
      result =
        result +
        `<li className="ml-5"><a href="#${recursiveTree[i].children?.[j]?.link}" className="no-underline hover:text-blue-400">${recursiveTree[i].children?.[j].title}</a></li>`;
    }
    result = result + '</ul>';
  }

  return result;
};
