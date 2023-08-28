import React from 'react';

import { StaticImageData } from 'next/image';

export type CustomLinkProps = {
  href: {
    pathname: string;
    query?: {
      [key: string]: string;
    };
  };
  replace?: boolean;
  prefetch?: boolean;
  isBlank?: boolean;
  children: React.ReactNode;
};

export type CurriculumCartPropsType = {
  imageFile: StaticImageData;
  chapter: string;
  firstLesson: string;
  subject: string;
  explain: string;
  curriculum: string;
};

export type ActInfo = {
  name: string;
  act: number;
  banner: string;
};

export type ChapterInfo = {
  chapterName: string;
  actInfo: ActInfo[];
};

export type ChaptersInfo = {
  [key: string]: ChapterInfo;
};
