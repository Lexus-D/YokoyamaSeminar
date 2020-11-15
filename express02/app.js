const ejs=require("ejs");
const express=require("express");
const bodyParser = require("body-parser");
const app=express()
/*
配置模板引擎

1. Install package
2. app.set
3. res.render()
*/
/*
获取post传值
1.配置中间件
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
2.接受post数据
    req.body
*/
app.set("view engine","ejs");

//set static dir
app.use(express.static("static"));
//配置第三方中间件 解析json数据

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    let title='hello ejs';
    res.render("index",{
        title:title//后端数据绑定
    })
})
app.get('/login',(req,res)=>{
    //req.query 获取传值

    res.render("login",{
    })
})
app.post('/dologin',(req,res)=>{
    
    //接受表单传值
    var body=req.body;
    console.log(body)
    res.send('提交数据'+'\n'+body.username+'\n'+body.password) 
})


app.get('/news',(req,res)=>{
    var userinfo={
        username:"dad"
    }

    let article="<h3>output a h3 label</h3>"
    res.render("news",{
        userinfo:userinfo,
        article:article

    })
})

//listen port 3000
app.listen(3000);