
const { rejects } = require('assert');
const fs=require('fs');
const { resolve } = require('path');
exports.getExtname=function(name){
    switch(name){
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        case '.php':
            return 'text/php';
        default:
            return 'text/html';
    }
}
//async method
exports.getFileMime=function(extname){
    return new Promise((resolve,reject)=>{
        fs.readFile('./9_mime.json',(err,data)=>{
            if(err){
                reject(err);
                return console.log(err);             
            }
            let mime =JSON.parse(data.toString());
            console.log(mime[extname]);
            resolve(mime[extname]);
        })
    })
}