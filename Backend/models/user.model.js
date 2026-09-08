import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:function(){
            return this.authProvider==="local";
        }
    },
    authProvider:{
        type:String,
        enum:["local" , "google"],
        required:true
    },
    googleId:{
        type:String,
        unique:true,
        sparse:true
    },

    role:{
        type:String,
        enum:["student" , "admin"],
        default:"student"
    }
},
{
    timestamps:true
});

const User=mongoose.model("User" , userSchema);
export default User;