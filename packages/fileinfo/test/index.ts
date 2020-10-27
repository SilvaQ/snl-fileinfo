import {join} from 'path'
import {Finder} from '../src/finder'

const finder = new Finder(join(__dirname,'../'))
console.log(finder.directories());