import fs from 'fs/promises';
import path from 'path';

import matter from 'gray-matter';

export class MarkDownService {
  private directoryPath: string;
  constructor(directoryPath: string) {
    this.directoryPath = path.join('content', directoryPath);
  }

  async getMarkDownData(id: string) {
    const MDFiles = await fs.readFile(
      path.join(process.cwd(), this.directoryPath, `${id}.md`),
      'utf-8',
    );
    return this.parseMarkDownData(MDFiles);
  }

  private async parseMarkDownData(content: string) {
    const matterResult = matter(content);
    
    return {
      id: matterResult.data.id,
      title: matterResult.data.title,
      markdown: matterResult.content,
      ...matterResult.data,
    };
  }
}
