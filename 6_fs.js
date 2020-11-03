const fs=require('fs');

//1.fs.stat(path,callback): detect whether is a file or a directory
fs.stat('./html',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    if(data.isDirectory()){
        console.log('this is a directory');
    }else if(data.isFile()){
        console.log('this is a file');
    }
})

//2.fs mkdir(path,option(mode(default:777),recursive(default:false)),callback):create a directory
fs.mkdir('./css',(err)=>{
    if(err){
        return console.log(err);
    }
    console.log('successfully created');
})

//3.fs.writeFile
fs.writeFile('./css/index.html','loool',(err)=>{
    if(err){
        return console.log(err);
    }
    console.log('successfully created a written file');
})

//4.
fs.appendFile('./css/base.css','body{color:red}',(err)=>{
    if(err){
        return console.log(err)
    }
    console.log('succ appended');
})

//5.
fs.readFile('./css/index.html',(err,data)=>{
    if(err){
        return console.log(err);
    }
    //console.log(data);
    console.log(data.toString());

})

//6.
fs.readdir('./module',(err,data)=>{
    if(err){
        return console.log(err);
    }
    console.log(data);
})

//7.fs.rename():function:1)rename 2)move file
fs.rename('./html','./css/renamed.html',(err)=>{
    if(err){
        return console.log(err);
    }
    console.log('renamed');
})

//8.fs.rmdir(path, callback):delete directory (文件夹内有文件时无法删除)

//9.fs.unlink(path,callback):delete file