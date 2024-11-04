import mongoose from "mongoose";
//import { PassThrough } from "stream";

const userSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    id:String,
    createdAt:{
        type:Date,
        default:new Date()
    },
    verifyToken:String,
    isVerified:{
        type:Boolean,
        default:false
    },
    VerifyTokenExpireyDate:Date,

    forgotPasswordToken:String,
    forgotPasswordTokenExpireyDate:Date,


    

})

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;