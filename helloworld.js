var http = require('http');
var dt=require("./myfirstmodule");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("print the current date: "+dt.myDateTime()+"\n");
  res.end('Hello World!');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');