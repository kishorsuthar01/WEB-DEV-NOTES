const express = require('express')
const app = express()
const port=3000;

app.use(express.json())




// const logginmiddleware=function(req,res,next){
//     console.log("LOGGIN");
//     next();
// }
// app.use(logginmiddleware)

// const authmiddleware=function(req,res,next){
//     res.send("bs hoo gaya")
//     // console.log("AUTHONTICATION");
//     // next();
// }
// app.use(authmiddleware)

// const validamiddleware=function(req,res,next){
//     console.log("VALIDATION");
//     next();
// }
// app.use(validamiddleware)

const route=require('./route/router')
app.use('/body',route)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    console.log("this is a request");
    console.log(req.body);
  res.send('hello world')
})

app.listen(port,()=>{
    console.log("application is sucessfull");
})