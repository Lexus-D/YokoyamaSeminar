 const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hello', (req, res) => res.send('Hello moderfcker~get'))
app.post('/good', (req, res) => res.send('Hello moderfcker~get'))
app.put('/why', (req, res) => res.send('???'))
app.delete('/delete', (req, res) => res.send('========='))

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