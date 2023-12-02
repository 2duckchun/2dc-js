import { FunctionComponent } from 'react';

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
  return (
    <main className='m-auto max-w-[1280px] p-10'>
      <MDXContainer markdown={data.markdown} />
    </main>
  );
};

export default page;

// import { FunctionComponent } from 'react';

// // import { MDXPageWithProvider } from '@/components/page/MDXPage';
// import { MDXContainer } from '@/mdx/MDXContainer';
// import { MarkDownService } from '@/modules/md/markdown-service';
// import '@/styles/vs2015.css';
// interface pageProps {
//   params: {
//     detail: string;
//   };
// }

// type Toc = {
//   tag: string;
//   title: string;
//   link: string;
// };

// const getMarkdownData = async (pathname: string, filename: string) => {
//   const MDService = new MarkDownService(pathname);

//   return await MDService.getMarkDownData(filename);
// };

// function parseParagraphs(text: string) {
//   const paragraphs = text.split('\r\n');
//   const array: Toc[] = [];

//   paragraphs.forEach((paragraph, index) => {
//     if (paragraph.startsWith('##') || paragraph.startsWith('###')) {
//       let hashEndIndex = paragraph.lastIndexOf('#');
//       let linkStartIndex = paragraph.indexOf('{');
//       let title = paragraph.slice(hashEndIndex + 1, linkStartIndex).trim();
//       array.push({
//         tag: paragraph.slice(0, hashEndIndex + 1),
//         title,
//         link: paragraph.slice(linkStartIndex + 3, -3),
//       });
//     }
//   });
//   return array;
// }

// const page: FunctionComponent<pageProps> = async ({ params: { detail } }) => {
//   const data = await getMarkdownData('javascript', detail);
//   // const toc = parseParagraphs(data.markdown);

//   return (
//     <main className='m-auto max-w-[1280px] p-10'>
//       <MDXContainer markdown={data.markdown} />
//       {/* <MDXPageWithProvider toc={toc} data={data} /> */}
//     </main>
//   );
// };

// export default page;
