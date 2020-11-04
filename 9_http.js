const { fstat } = require('fs');
const http = require('http');
const fs=require('fs');
const { resolve } = require('path');
http.createServer(function (request, response) {

    //http://127.0.0.1:3000/index1.html
    
    //1.get address
    console.log(request.url);
    let pathname=request.url;
    pathname=pathname=='/'?'/index.html':pathname;//pathname是否为‘/’？不是的话直接让他等于index

    //2.read file by fs
    if(pathname!='/favicon.ico'){
        fs.readFile('.'+pathname,(err,data)=>{
            if(err){
                response.writeHead(404,{'Content-Type': 'text/html;charset=utf-8'});
                response.end('This page does not exist');
            }
            response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
            response.end(data);
        })
    }
    
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');