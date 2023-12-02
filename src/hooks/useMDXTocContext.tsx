'use client';

import { createContext, useContext, useState } from 'react';

export type Toc = {
  tag: string;
  title: string;
  link: string;
  children?: Toc[];
};

const mdxTocContext = createContext<Toc[] | null>(null);

export const useMDXTocContext = () => {
  const context = useContext(mdxTocContext);
  if (!context) {
    throw new Error('mdxTocContext가 생성되지 않았습니다.');
  }
  return context;
};

export const MDXTocContextProvider = ({
  children,
  toc,
}: {
  children: React.ReactNode;
  toc: Toc[];
}) => {
  return (
    <mdxTocContext.Provider value={toc}>{children}</mdxTocContext.Provider>
  );
};
