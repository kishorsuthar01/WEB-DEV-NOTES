const express=require('express')
const app=express();
const port =3000;


const item=require('./routes/items')
const bird =require('./routes/bird')

app.use('/api',item)
app.use('/bird',bird)

app.listen(port,()=>{
  console.log("applicatoin sucessfully");
})