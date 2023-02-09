const express = require('express')
const app = express()
const port = 3000
const path = require("path")

// app.use(express.static("static"))

app.use("/static", express.static(path.join
    (__dirname, "static")))

app.get('/',(req,res)=>{
    // res.send('<h1>hello <h1>')
    res.sendFile(__dirname+'/templates/index.html')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})