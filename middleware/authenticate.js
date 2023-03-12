const jwt=require("jsonwebtoken");
const User=require("../model/userSchema");
const cookieParser=require('cookie-parser');

const Authenticate=async(req,res,next)=>{
    try{
const token=req.cookies.jwt;
// console.log(token);
const verifyToken=jwt.verify(token,process.env.secret_key);
const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token});
if(!rootUser){throw new Error("User not found")}
req.token=token;
req.rootUser=rootUser;
req.userId=rootUser._id;
next();
    }catch(err){
        res.status(401).send("Unauthorized:No token provided");
        console.log(err);
    }
}

module.exports=Authenticate