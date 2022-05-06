// this file will hold schema it means data 

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    /** 
     * name,userId
     * userType[ADMIN|ENGINEER\CUSTOMER,UserStatus[Pending][Approved]

    */


    name :{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        lowercase:true,
        minLnegth:10,
        unique:true // i dont to be duplicate
    },
    createdAt:{
        type:Date,
        immuntable:true,
        default:()=>{
            return Date.now();
        }
        
    },
    updatedAt:{
        type:Date,
        default:()=>{
            return Date.now();
        }
        
    },
    userType: {
        type:String ,
        required : true ,
        default :"customer"
       
    },
    userStatus :{
        type: String,
        required : true ,
        default :"APPROVED"

    }
    
});
module.exports =mongoose.model("User",userSchema);