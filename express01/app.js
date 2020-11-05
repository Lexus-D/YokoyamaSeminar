const express = require('express');
const app =express();

app.get('/',(req,res)=>{
    res.send('hello');
})
app.get('/login',(req,res)=>{
    res.send('account');
})
app.get('/welcome',(req,res)=>{
    res.send('welcome');
})
app.post('/dologin',(req,res)=>{
    res.send('login');
})
app.listen(3000)