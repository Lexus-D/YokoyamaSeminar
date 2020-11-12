const http = require('http');
const fs=require('fs');
const path = require('path');
const url=require('url')
const common=require('./9_http_module');

common.getFileMime('.png');
http.createServer(function (request, response) {

    //http://127.0.0.1:3000/foun_6_Miller/index.html
    
    //1.get address
    let pathname=url.parse(request.url).pathname;//pick up necessary characters
    pathname=pathname=='/'?'/index.html':pathname;//pathname是否为‘/’？不是的话直接让他等于index
   
    //get extra name
    let extname=path.extname(pathname);

    //2.read file by fs
    if(pathname!='/favicon.ico'){
        fs.readFile('.'+pathname , async (err,data)=>{
            if(err){
                response.writeHead(404,{'Content-Type': 'text/html;charset=utf-8'});
                response.end('This page does not exist');
            }
            let type=await common.getFileMime(extname);

            response.writeHead(200, {'Content-Type':''+type+';charset=utf-8'});
            response.end(data);
        })
    }
    
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
