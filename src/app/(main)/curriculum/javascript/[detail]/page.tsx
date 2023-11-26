import { FunctionComponent } from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { MarkDownService } from '@/modules/md/markdown-service';

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
    <main className='p-10'>
      <div className='markdown max-w-none'>
        <MDXRemote
          components={{
            HighLight: props => <div className='bg-red-400' {...props} />,
          }}
          source={data.markdown}
        />
      </div>
    </main>
  );
};

export default page;
