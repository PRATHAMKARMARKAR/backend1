const express = require('express')
const app = express()
// const port = 3000
require('dotenv').config()
// console.log(process.env)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/insta',(req,res)=>{
    res.send("karmarkar_pratham")
})
app.get('/help',(req,res)=>{
    res.send("HELP ME LEARENING BACKEND");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})