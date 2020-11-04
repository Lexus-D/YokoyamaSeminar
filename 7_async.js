//define a method to judge a source whether it is a file or a  directory

const fs=require('fs');
const { resolve } = require('path');


var dirarr=[];
//处理异步：将isDir写成异步函数
async function isDir(path) {
    return new Promise((resolve,reject)=>{
        fs.stat(path,(error,stats)=>{
            if(error){
                return console.log(error);
                async.reject(error);
            }
            if (stats.isFile()){
                resolve(console.log('is a file'));
            }else{
                return console.log('is a dir');
            }
        })
    })
}
var path='./css';
async function main(){
    fs.readdir(path,async(err,data)=>{
        if(err){
            return console.log(err);
        }
        for(var i=0;i<data.length;i++){
            if(await isDir(path+'/'+data[i])){
                dirarr.push(data[i]);
            }
        }
    })
}
//main();
isDir(path);