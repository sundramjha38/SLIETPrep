import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
    {
        questionPaperId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"QuestionPaper",
            required:true
        },
        questionNumber:{
            type:String,
            required:true,
            trim:true
        },
        // this section is not for class section this is for paper sections 
        section:{
            type:String,
            trim:true
        },
        questionText:{
            type:String,
            required:true,
            trim:true
        },
        questionImage:{
              url: {
                type: String
            },

            publicId: {
                type: String
            }
        },
        marks:{
              type: Number,
              required: true
        },
        alternativeGroup: {
            type: String,
            default: "",
            trim: true
        },

        answer:{
             type: String,
             default: ""
        },
        keyPoints:{
             type: [String],
             default: []
        },
        topic:{
            type: String,
            trim: true,
            default: ""
        }
    },
    {
        timestamps:true
    }
);

const Question = mongoose.model("Question" , questionSchema);
export default  Question;