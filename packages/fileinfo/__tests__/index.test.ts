import {Finder} from  '../src/finder'
import {join} from 'path'
const finder =new Finder(join(__dirname,"tmp"))

test('test finder allFiles', () => {
  const allfiles=finder.allFiles();
  expect(allfiles.length).toEqual(6);
  expect(allfiles.map(fileinfo=>fileinfo.getFilename())).toEqual(["a", "aa.md", "b", "bb.md", "c", "cc.md"]);
});

test('test finder directories', () => {
  const allfiles=finder.directories();
  expect(allfiles.length).toEqual(3);
  expect(allfiles.map(fileinfo=>fileinfo.getFilename())).toEqual(["a",  "b",  "c", ]);
});

test('test finder files', () => {
  const allfiles=finder.files();
  expect(allfiles.length).toEqual(3);
  expect(allfiles.map(fileinfo=>fileinfo.getFilename())).toEqual(["aa.md", "bb.md", "cc.md"]);
});
