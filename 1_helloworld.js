const http = require('http');
var dt=require("./myfirstmodule");//import a module


http.createServer(function (req, res) {
  //var api='http://127.0.0.1?name=zhangsan&age=20'

  res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});
  res.write("<body><meta charset='utf-8'>print the current date: </body>"+dt.myDateTime()+"\n");
  //without <meta charset>, these chinese characters will be mojibake
  res.end('Hello World!');
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');

