 const express = require('express')
const app = express()
const port = 3000

app.use((req,res,next)=>{
    console.log(new Date());
    next();
})
app.get('/hello', (req, res) => res.send('Hello moderfcker~get'))
app.get('/login', (req, res) => res.send('login page'))
app.get('/loginover', (req, res) => res.send('login completed'))
app.get('/news' ,(req, res) => res.send('news page'))
//app.post('/good', (req, res) => res.send('Hello moderfcker~get'))
//app.put('/why', (req, res) => res.send('???'))
//app.delete('/delete', (req, res) => res.send('========='))



//dynamic route
app.get('/good/:id', (req, res) =>{
    var id=req.params["id"]
    res.send('Hello World!'+id+'dynamic router')

})

//get传值
app.get('/', (req, res) => {
    var a=req.query
    console.log(a)
    res.send(a.id)
})
app.listen(port, () => console.log(`Example app listening on `+ port+` !`))