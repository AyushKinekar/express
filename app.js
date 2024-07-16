// const express = require ('express');
// const app = express()

// app.get('/',(req,res)=>{
//     console.log('User hit the resource')
//     res.status(200).send('Home Page')
// })

// app.get('/about',(req,res)=>{
//     res.status(200).send('About Page')
// })

// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>resource not found</h1>')
// })

// app.listen(5000,()=>{
//     console.log('server is listening on port 5000...');
// })



// //app.get-read data
// //app.post-insert data
// //app.put-update data
// //app.delete-delete data
// //app.all
// //app.use
// //app.listen

const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send('request not found')
})


app.listen(5000,()=>{
    console.log('server is listening on port 5000');
})

console.log("")