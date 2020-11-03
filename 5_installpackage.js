/*
1.Install package from npm
2.Require installed package from directory
  npm install md5 --save(write necessary packages info into package.json)
  for newly downloaded projet, use 'npm i' to install all necessary packages
3.Use method while reading document
*/
const md5 = require("md5");
console.log(md5('heros never die!'));
