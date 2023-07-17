import { StaticImageData } from "next/image";

export type CustomLinkProps = {
  href: {
    pathname: string;
    query?: {
      [key: string]: string;
    };
  };
  replace?: boolean;
  prefetch?: boolean;
  children: React.ReactNode;
};

export type CurriculumCartPropsType = {
  imageFile: StaticImageData;
  chapter: string;
  subject: string;
  explain: string;
  curriculum: string;
};
