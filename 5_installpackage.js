/*
1.Install package from npm
2.Require installed package from directory
  npm install md5 --save(write necessary package info into package.json)
3.Use method
*/
const md5 = require("md5");

console.log(md5('heros never die!'));
