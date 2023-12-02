import { Toc } from '@/mdx/types';

export const parseTocTreeToString = (tocTree: Toc[]): any => {
  let result = '';
  for (let i = 0; i < tocTree.length; i++) {
    result =
      result +
      `<ul><li><a href="#${tocTree[i].link}" className="no-underline hover:text-blue-400">${tocTree[i].title}</a></li>`;
    for (let j = 0; j < tocTree[i].children?.length!; j++) {
      result =
        result +
        `<li className="ml-5"><a href="#${tocTree[i].children?.[j]?.link}" className="no-underline hover:text-blue-400">${tocTree[i].children?.[j].title}</a></li>`;
    }
    result = result + '</ul>';
  }

  return result;
};
