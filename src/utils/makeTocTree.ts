import { Toc } from '@/types/mdx';

export function makeTocTree(text: string) {
  const paragraphs = text.split('\r\n');
  const parsedArray: Toc[] = [];

  paragraphs.forEach(paragraph => {
    if (paragraph.startsWith('<h2 id=') || paragraph.startsWith('<h3 id=')) {
      let hashEndIndex = paragraph.lastIndexOf(`"`);
      let lastTagStart = paragraph.lastIndexOf('<');
      let stringWithId = paragraph.slice(0, hashEndIndex + 1);
      let title = paragraph.slice(hashEndIndex + 2, lastTagStart).trim();
      let tag = stringWithId.includes('h2') ? '##' : '###';
      parsedArray.push({
        tag,
        title,
        link: stringWithId.slice(8, -1),
      });
    }
  });

  const tocTree: Toc[] = [];

  parsedArray.forEach((item, index) => {
    if (item.tag === '##') {
      tocTree.push({
        ...item,
        children: [],
      });
    } else {
      tocTree[tocTree.length - 1].children?.push(item);
    }
  });

  return tocTree;
}
