const express = require("express");
const app = express();
const host = "localhost";
const port = 80;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

const user = {
    id:"aaa",
    password:"aaa",
}

app.post("/login",(req,res)=>{
    console.log("req login");
    console.log("id :",req.body.id);
    console.log("pw :",req.body.password)
    if(req.body.id === user.id && req.body.password === user.password){
        res.json({result:"ok"});
    } else{
        res.json({result:"no"});
    }
})

app.listen(port,host,()=>{
    console.log(`server runs at http://${host}:${port}`);
})