// 'use client';

// import { FunctionComponent, useEffect, useState } from 'react';

// import { MDXTocContextProvider, Toc } from '@/hooks/useMDXTocContext';
// import { MDXContainer } from '@/mdx/MDXContainer';
// interface MDXPageProps {
//   toc: Toc[];
//   data: {
//     id: any;
//     title: any;
//     markdown: string;
//   };
// }

// const MDXPageWithProvider: FunctionComponent<MDXPageProps> = ({
//   toc,
//   data,
//   ...props
// }) => {
//   const [isMounted, setIsMounted] = useState(false);
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   return isMounted ? (
//     <MDXTocContextProvider toc={toc}>
//       <MDXContainer markdown={data.markdown} />
//     </MDXTocContextProvider>
//   ) : null;
// };

// export { MDXPageWithProvider };
