const mongoose=require("mongoose");

const DB=process.env.DATABASE;
mongoose.set({strictQuery:false});
mongoose.connect(DB).then((req,res)=>{
    console.log("connection sucessfully.......")
}).catch((err)=>{
    console.log(`${err} connection faild`)
})