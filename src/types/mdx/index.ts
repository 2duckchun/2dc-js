export type Toc = {
  tag: string;
  title: string;
  link: string;
  children?: Toc[];
};
