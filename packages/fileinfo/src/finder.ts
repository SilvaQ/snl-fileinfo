import * as fs from 'fs';
import { join } from 'path';

import { FileInfo } from './fileinfo';

export class Finder {
  constructor(public rootPath: string) {}

  /**
   * look for directories and files
   */
  allFiles() {
    return fs.readdirSync(this.rootPath).map(file => new FileInfo(join(this.rootPath, file)));
  }

  /**
   * look for files only; ignore directories
   */
  files() {
    return this.allFiles().filter(fileinfo => fileinfo.isFile());
  }

  /**
   * look for directories only; ignore files
   */
  directories() {
    return this.allFiles().filter(fileinfo => fileinfo.isDir());
  }
}
