const url=require('url');

var api='http://www.itying.com?name=zhangsan&age=20'

var getValue=url.parse(api,true).query;
console.log(getValue);
console.log(`name: ${getValue.name}  age: ${getValue.age}`);