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


app.listen(5500, () => {
	console.log('Server listening on port 5500')
})
