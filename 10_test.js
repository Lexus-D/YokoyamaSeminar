const http = require('http');
const route=require('./10_Encapsulation_bug');
const url=require('url');

http.createServer(function(request,response){
    route.static(request,response,'static');
    
    let pathname=url.parse(request.url).pathname;
    // if(pathname=='login'){
    //     response.writeHead(200, {'Content-Type':'html;charset=utf-8'});
    //     response.end('login page');
    // }else if(pathname=='back-end'){
    //     response.writeHead(200, {'Content-Type':'html;charset=utf-8'});
    //     response.end('back-end page');
    // }else if(pathname=='registor'){
    //     response.writeHead(200, {'Content-Type':'html;charset=utf-8'});
    //     response.end('registor page');
    // }else{
    //     response.writeHead(404, {'Content-Type':'html;charset=utf-8'});
    //     response.end('404 not found');
    // }
}).listen(3000);
console.log('start');