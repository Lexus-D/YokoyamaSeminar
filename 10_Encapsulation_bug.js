const fs=require('fs');
const path = require('path');
const url=require('url');

let getFileMime=function(extname){
    var data=fs.readFileSync('./9_mime.json');
    let mime=JSON.parse(data.toString());
    return mime[extname];
}

//encapsulated
exports.static=function(request,response,staticPath){
    //1.get address
    let pathname=url.parse(request.url).pathname;//pick up necessary characters
    pathname=pathname=='/'?'/index.html':pathname;//pathname是否为‘/’？不是的话直接让他等于index
    
    //get extra name
    let extname=path.extname(pathname);
    //2.read file by fs
    if(pathname!='/favicon.ico'){
        //asynchronous:
        // fs.readFile('./'+staticPath+pathname ,(err,data)=>{
        //     if(err){
        //         response.writeHead(404,{'Content-Type': 'text/html;charset=utf-8'});
        //         response.end('This page does not exist');
        //     }
        //     let type=getFileMime(extname);
        //     response.writeHead(200, {'Content-Type':''+type+';charset=utf-8'});
        //     response.end(data);
        // })
        
        //synchronous:
        let data = fs.readFileSync('./' + staticPath + pathname);
        if (data){
            let type=getFileMime(extname);
            response.writeHead(200, {'Content-Type':''+type+';charset=utf-8'});
            response.end(data);
        }
    }
}