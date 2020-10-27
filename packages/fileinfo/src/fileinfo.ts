import * as fs from 'fs'
import * as path from 'path'

export class FileInfo {
  filePath = "";

  constructor(filePath:string) {
    this.filePath = filePath;
  }
  /**
   * Gets the base name of the file
   */
  getBasename() {
    return path.basename(this.filePath);
  }
  /**
   * Gets the Dir name of the file
   */
  getDirname() {
    return path.dirname(this.filePath);
  }
  /**
   * Gets the file extension
   */
  getExtension() {
    return path.extname(this.filePath);
  }
  /**
   *  Gets the filename
   */
  getFilename() {
    return this.getBasename();
  }
  /**
   *  Gets the path without filename
   */
  getPath() {
    return this.getDirname();
  }
  /**
   * Gets file size
   */
  getSize() {
    return fs.statSync(this.filePath).size;
  }
  /**
   * Gets file type (will return fs.Stats.mode)
   * 可以参考以下两处获得更多信息
   *
   *  https://godoc.org/golang.org/x/sys/unix#pkg-constants
   * https://github.com/golang/go/blob/master/src/cmd/vendor/golang.org/x/sys/unix/zerrors_darwin_amd64.go
   */
  getType() {
    /**

     */

    // const stats = fs.statSync(this.filePath);
    // console.log("    size: " + stats.size);
    // console.log("    mode: " + stats.mode);
    // console.log("    others eXecute: " + (stats.mode & 1 ? "x" : "-"));
    // console.log("    others Write:   " + (stats.mode & 2 ? "w" : "-"));
    // console.log("    others Read:    " + (stats.mode & 4 ? "r" : "-"));

    // console.log("    group eXecute:  " + (stats.mode & 10 ? "x" : "-"));
    // console.log("    group Write:    " + (stats.mode & 20 ? "w" : "-"));
    // console.log("    group Read:     " + (stats.mode & 40 ? "r" : "-"));

    // console.log("    owner eXecute:  " + (stats.mode & 100 ? "x" : "-"));
    // console.log("    owner Write:    " + (stats.mode & 200 ? "w" : "-"));
    // console.log("    owner Read:     " + (stats.mode & 400 ? "r" : "-"));

    // console.log("    file:           " + (stats.mode & 0o0100000 ? "f" : "-"));
    // console.log("    directory:      " + (stats.mode & 0o0040000 ? "d" : "-"));
    return fs.statSync(this.filePath).mode;
  }
  /**
   *  Tells if the file is a directory
   */
  isDir() {
    return fs.statSync(this.filePath).isDirectory();
  }
  /**
   * Tells if the object references a regular file
   */
  isFile() {
    return fs.statSync(this.filePath).isFile();
  }
  /**
   * Tells if the file is a link
   */
  isLink() {
    return fs.statSync(this.filePath).isSymbolicLink();
  }
  /**
   *  Tells if file is readable
   */
  isReadable() {
    try {
      fs.accessSync(this.filePath, fs.constants.R_OK);
      return true;
    } catch (_) {
      return false;
    }
  }
  /**
   * Tells if the entry is writable
   */
  isWritable() {
    try {
      fs.accessSync(this.filePath, fs.constants.W_OK);
      return true;
    } catch (_) {
      return false;
    }
  }
}


