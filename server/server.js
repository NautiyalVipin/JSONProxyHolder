const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

const app = express()

app.use(cors())

app.use((req,res,next)=>{
    res.setHeader("x-codedamn-project", "jsonproxyholder")
    next()
})  


app.use("/",proxy("https://jsonplaceholder.typicode.com"))

// app.use("/:id",async (req,res,next)=>{
   
//           const url2 = `https://jsonplaceholder.typicode.com/${req.params.id}?userId=${req.query.userId}`

//          const url = `https://jsonplaceholder.typicode.com/${req.params.id}`

//  if(req.query.userId>=0){
//      const data = await fetch((url2),{ headers:{"x-codedamn-project": "jsonproxyholder"}})
//      req.response = await data.json()
//      console.log(req.query.userId)
//      next()
//  }
//  else{
// const data = await fetch(url)
// req.response = await data.json()
// console.log(url)

// next()
//  }
// })

// app.use("/posts/:id",async (req,res,next)=>{
// const url = `https://jsonplaceholder.typicode.com/posts/${req.params.id}`

// const data = await fetch(url)
//  req.response = await data.json()

// next()
// })

// app.get('/', (req, res) => {
//     res.json("Please Enter a path to search!")
// })
// app.get('/:id', (req, res) => {
//     res.json(req.response)
// })

// app.get('/', (req, res) => {
//     res.json("Please Enter a path to search!")
// })

// app.get('/posts/:id', (req, res) => {
// 	const{id}=req.params;
//     res.json(req.response)
// })


// app.get('*', (req, res) => {
// 	res.json({
// 		404: true,
// 	})
// })

app.listen(5500, () => {
	console.log('Server listening on port 5500')
})
