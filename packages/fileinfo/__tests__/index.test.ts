import {Finder} from  '../src/finder'
import {join} from 'path'
const finder =new Finder(join(__dirname,"tmp"))

test('test all files', () => {
  const allfiles=finder.allFiles();
  expect(allfiles.length).toEqual(6);
});
