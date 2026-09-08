import mongoose from "mongoose";

const curriculumSchema = new mongoose.Schema({
    degreeType:{
        type:String,
        enum:["degree" , "diploma"],
        required:true
    },
    branch:{
        type:String,
        required:true,
        trim:true
    },
    semester:{
        type:Number,
        required:true
    },
    subjects:[{
        code:{
            type:String,
            required:true,
            trim:true
        },
        name:{
            type:String,
            required:true,
            trim:true
        },
        syllabus:{
            type:String,
            default:""
        }
    }]
},
{
    timestamps:true
}
);
// this part basically define that in this schema there must be onyl one entry for the degreeType+branch+semester
curriculumSchema.index(
    {
        degreeType: 1,
        branch: 1,
        semester: 1
    },
    {
        unique: true
    }
);

const Curriculum = mongoose.model(
    "Curriculum",
    curriculumSchema
);

export default Curriculum;