import fs from 'fs/promises';
import path from 'path';

import { FunctionComponent } from 'react';

import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface pageProps {}

const getMarkdownData = async (content: string) => {
  const matterResult = matter(content);

  return matterResult;
};

const getItem = async (id: string) => {
  const file = await fs.readFile(
    path.join('content', 'javascript', `${id}.md`),
    'utf-8',
  );
  return await getMarkdownData(file);
};

const page: FunctionComponent<pageProps> = async ({}) => {
  // const pathlog = path.join('src', 'content', 'javascript');
  // const files = await fs.readdir(pathlog);
  // console.log(files);
  const data = await getItem('123');
  console.log(data);
  return (
    <main>
      <div className='markdown'>
        pagedddd
        {/* TODO: MDXRemote의 component들을 만들고 객체화해서 통합한 후 MDXRemote에 전달. */}
        <MDXRemote
          components={{
            HighLight: props => <div className='bg-red-400' {...props} />,
          }}
          source={data.content}
        />
      </div>
    </main>
  );
};

export default page;
