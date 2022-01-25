const mongoose = require("mongoose");
const express = require("express");
const User = require("./model");
const cors = require("cors");
const router = require("./router");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/user",router);

const port = 5000;

app.get('/',(req,res)=>{
    res.send("Hello World");
})


mongoose.connect("mongodb://root:root@cluster0-shard-00-00.e4fqf.mongodb.net:27017,cluster0-shard-00-01.e4fqf.mongodb.net:27017,cluster0-shard-00-02.e4fqf.mongodb.net:27017/CRUD-esd2022?ssl=true&replicaSet=atlas-14g5kr-shard-0&authSource=admin&retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true },()=>console.log("Connected to the DB successfully"));



app.listen(process.env.PORT || port, ()=>console.log("Server is running on PORT 5000"));
