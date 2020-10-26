const path = require("path");
const fs = require("fs");

const FileInfo = require("./fileinfo");
const fileinfo = new FileInfo("/Users/babbage/Desktop/origin-data/P00496/wav");
console.log("the info is:", fileinfo.getType());
