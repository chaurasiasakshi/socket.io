const express = require("express");
app = express();

const http = require("http").createServer(app);

const port = 3000 || process.env.PORT 

http.listen(port,()=>{
    console.log(`server is running on ${port}`)
});


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})