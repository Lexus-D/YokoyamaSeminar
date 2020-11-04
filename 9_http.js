const http = require('http');
const fs=require('fs');
const path = require('path');

const common=require('./9_http module');

http.createServer(function (request, response) {

    //http://127.0.0.1:3000/foun_6_Miller/index.html
    
    //1.get address
    console.log(request.url);
    let pathname=request.url;
    pathname=pathname=='/'?'/index.html':pathname;//pathname是否为‘/’？不是的话直接让他等于index
    //get extra name
    let extname=path.extname(pathname);


    //2.read file by fs
    if(pathname!='/favicon.ico'){
        fs.readFile('.'+pathname,(err,data)=>{
            if(err){
                response.writeHead(404,{'Content-Type': 'text/html;charset=utf-8'});
                response.end('This page does not exist');
            }
            let type=common.getExtname(extname);

            response.writeHead(200, {'Content-Type':''+type+';charset=utf-8'});
            response.end(data);
        })
    }
    
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');