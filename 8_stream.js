const { resolve } = require("path");

const fs=require('fs');

//readfile
var readStream=fs.createReadStream('./input.txt');

var count=0;
var str='';

readStream.on('data',(data)=>{
    str+=data;
    count++;
})
readStream.on('end',()=>{
    console.log(str+'end');
    count++;
})
readStream.on('error',(err)=>{
    console.log(err);
})

//write file
var str='';
for(var i=0;i<500;i++){
    str+='oraoraoraoraoraoraoraoraoraoraora';
}

var writeStream=fs.createWriteStream('./output.txt');
writeStream.write(str);
writeStream.end();
writeStream.on('finish',()=>{
    console.log('write finished');
})

//copy file to another dir
var readStream=fs.createReadStream('./input.txt');
var writeStream=fs.createWriteStream('./css/input.txt');
readStream.pipe(writeStream);

