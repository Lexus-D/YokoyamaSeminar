const http = require('http');
const url=require('url');
var dt=require("./myfirstmodule");//import a module


http.createServer(function (req, res) {
 //'http://127.0.0.1?name=xxxx&age=xxxx'   从url中获取传来的信息

  res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});
  res.write("<body><meta charset='utf-8'> </body>");

  //without <meta charset>, these chinese characters will be mojibake

  console.log(req.url);
  if(req.url!="/favicon.ico"){
    var userinfo=url.parse(req.url,true).query;
    console.log(`name:${userinfo.name}  age:${userinfo.age}`);
    res.write(`name:${userinfo.name}  age:${userinfo.age}`);
}
  res.end('\nhello\nhello');
}).listen(3000);


