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
  const toc = parseParagraphs(data.markdown);
  const tocData = toc.map(item => {
    const tag = item.tag === '##' ? 'h2' : 'h3';
    if (tag === 'h2') {
      return `<${tag} className="pl-5"><a href="#${item.link}" className="no-underline hover:text-blue-400">${item.title}</a></${tag}>`;
    }
    return `<${tag} className="pl-10"><a href="#${item.link}" className="no-underline hover:text-blue-400">${item.title}</a></${tag}>`;
  });

  const markdownData = data.markdown.replace(
    '<TocData />',
    `${tocData.join('')}`,
  );

  console.log(toc);
  return (
    <main className='m-auto max-w-[1280px] p-10'>
      <MDXContainer markdown={markdownData} toc={toc} />
    </main>
  );
};

export default page;

function parseParagraphs(text: string) {
  const paragraphs = text.split('\r\n');
  const array: Toc[] = [];

  // paragraphs.forEach((paragraph, index) => {
  //   if (paragraph.startsWith('##')) {
  //     let hashEndIndex = paragraph.lastIndexOf('#');
  //     let linkStartIndex = paragraph.indexOf('{');
  //     let title = paragraph.slice(hashEndIndex + 1, linkStartIndex).trim();
  //     array.push({
  //       tag: paragraph.slice(0, hashEndIndex + 1),
  //       title,
  //       link: paragraph.slice(linkStartIndex + 3, -3),
  //     });
  //   }
  //   if (paragraph.startsWith('###')) {
  //     let hashEndIndex = paragraph.lastIndexOf('#');
  //     let linkStartIndex = paragraph.indexOf('{');
  //     let title = paragraph.slice(hashEndIndex + 1, linkStartIndex).trim();
  //     array[index - 1].children = [
  //       {
  //         tag: paragraph.slice(0, hashEndIndex + 1),
  //         title,
  //         link: paragraph.slice(linkStartIndex + 3, -3),
  //       },
  //     ];
  //   }
  // });

  // return array;

  paragraphs.forEach((paragraph, index) => {
    if (paragraph.startsWith('##') || paragraph.startsWith('###')) {
      let hashEndIndex = paragraph.lastIndexOf('#');
      let linkStartIndex = paragraph.indexOf('{');
      let title = paragraph.slice(hashEndIndex + 1, linkStartIndex).trim();
      array.push({
        tag: paragraph.slice(0, hashEndIndex + 1),
        title,
        link: paragraph.slice(linkStartIndex + 3, -3),
      });
    }
  });
  return array;
}
