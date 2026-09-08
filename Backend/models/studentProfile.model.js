import mongoose from "mongoose";

const studentProfileSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
            unique:true
        },
        degreeType:{
            type:String,
            enum:["degree" , "diploma"],
            required:true
        },
        branch : {
            type:String,
            required:true,
            trim : true
        },
        year: {
            type:Number,
            required:true
        },
        semester: {
            type:Number,
            required:true
        }
    },
    {
        timestamps:true
    }
);

const StudentProfile = mongoose.model(
    "StudentProfile" ,
    studentProfileSchema
);

export default StudentProfile;