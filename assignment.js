const express = require('express');
const app = express();

app.get("",(req,res)=>{
    res.send('<h1>Welcome To My Web Page</h1>')
})

app.get("/greeting",(req,res)=>{
    res.sendFile(__dirname+"/one.html")
}),
app.get("/weather",(req,res)=>{
    res.sendFile(__dirname+"/two.html")
}),

app.get("/feeling",(req,res)=>{
    res.sendFile(__dirname+"/three.html")
}),

app.get("/favseries",(req,res)=>{
    res.sendFile(__dirname+"/four.html")
}),

app.listen(4000,()=>{
    console.log('Server starting at up: port:4000:');
})