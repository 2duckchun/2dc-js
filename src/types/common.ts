export type CustomLinkHref = {
  href: {
    pathname: string;
    query?: {
      [key: string]: string;
    };
  };
  title: string;
};
