const dotenv=require("dotenv");
const mongoose=require("mongoose");
const express = require('express');
const cookieParser = require('cookie-parser')
// const path=require('path');
const app = express();
const cors = require('cors');

 

const PORT=process.env.PORT||7777;
app.use(cookieParser())
dotenv.config({path:'./config.env'})
require("./db/conn");
app.use(express.json());
//static file
app.use(cors())

app.use(require('./router/auth'));
const middleware=(req,res,next)=>{
    next();
}



app.listen(PORT,()=>{
console.log(`server is running at port no ${PORT}`);
})