import { FunctionComponent } from 'react';

import { Toc } from '@/hooks/useMDXTocContext';
import { MDXContainer } from '@/mdx/MDXContainer';
import { MarkDownService } from '@/modules/md/markdown-service';

import '@/styles/vs2015.css';
interface pageProps {
  params: {
    detail: string;
  };
}

const getMarkdownData = async (pathname: string, filename: string) => {
  const MDService = new MarkDownService(pathname);
  return await MDService.getMarkDownData(filename);
};

const page: FunctionComponent<pageProps> = async ({ params: { detail } }) => {
  const data = await getMarkdownData('javascript', detail);
  const toc = tocParser(parseParagraphs(data.markdown));
  const markdownWithToc = data.markdown.replace('<TocData />', `${toc}`);

  return (
    <main className='m-auto max-w-[1280px] p-10'>
      <MDXContainer markdown={markdownWithToc} />
    </main>
  );
};

export default page;

function parseParagraphs(text: string) {
  const paragraphs = text.split('\r\n');
  const parsedArray: Toc[] = [];

  paragraphs.forEach(paragraph => {
    if (paragraph.startsWith('<h2 id=') || paragraph.startsWith('<h3 id=')) {
      let hashEndIndex = paragraph.lastIndexOf(`"`);
      let lastTagStart = paragraph.lastIndexOf('<');
      let stringWithId = paragraph.slice(0, hashEndIndex + 1);
      let title = paragraph.slice(hashEndIndex + 2, lastTagStart).trim();
      let tag = stringWithId.includes('h2') ? '##' : '###';
      parsedArray.push({
        tag,
        title,
        link: stringWithId.slice(8, -1),
      });
    }
  });

  const recursiveTree: Toc[] = [];

  parsedArray.forEach((item, index) => {
    if (item.tag === '##') {
      recursiveTree.push({
        ...item,
        children: [],
      });
    } else {
      recursiveTree[recursiveTree.length - 1].children?.push(item);
    }
  });

  return recursiveTree;
}

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
