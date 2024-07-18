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

// const express = require('express');
// const path = require('path');
// const app = express();


// app.use(express.static('./public'))

// // app.get('/',(req,res)=>{
// //     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// // })

// app.all('*',(req,res)=>{
//     res.status(404).send('request not found')
// })


// app.listen(5000,()=>{
//     console.log('server is listening on port 5000');
// })







// const express = require('express')
// const app = express()
// const {products} = require('./data')


// app.get('/',(req,res)=>{
//     res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const {id,name,image} = product;
//         return {id,name,image}
//     })
//     res.json(newProducts)
// })

// app.get('/api/products/:productID',(req,res)=>{
//     // console.log(req);
//     // console.log(req.params);
//     const {productID} = req.params;
//     const singleProduct = products.find(
//         (product)=> product.id === Number(productID)
//     )

// if(!singleProduct){
//     return res.status(404).send('Product Does not Exist')
// }
//     return res.json(singleProduct)
// })


// app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
//     console.log(req.params);
//     res.send('hello world')
// })


// app.get('/api/v1/query',(req,res)=>{
//     // console.log(req.query);
//     const {search,limit}= req.query
//     let sortedProducts  = [...products];

//     if(search){
//         sortedProducts = sortedProducts.filter((product)=>{
//             return product.name.startsWith(search)
//         })
//     }
//     if(limit){
//         sortedProducts = sortedProducts.slice(0,Number(limit))
//     }
//     if(sortedProducts.length<1){
//         // res.status(200).send('no products matched the search')
//         return res.status(200).json({sucess:true,data:[]})
//     }
//     res.status(200).json(sortedProducts)
// })


// app.listen(5000,()=>{
//     console.log('server is listening on port 5000...');
// })








// const express = require('express')
// const app = express()

// const people = require('./routes/people')
// const auth = require('./routes/auth')

// // static assets
// app.use(express.static('./methods-public'))
// // pars form data
// app.use(express.urlencoded({extended:false}))
// // parse json
// app.use(express.json())


// app.use('/api/people',people)
// app.use('/login',auth)


// app.listen(5000,()=>{
//     console.log('server is listening on port 5000...');
// })