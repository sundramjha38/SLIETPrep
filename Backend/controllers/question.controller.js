import Question from "../models/question.model.js";
import QuestionPaper from "../models/questionPaper.model.js";
import mongoose from "mongoose";

export const createQuestion = async(req , res )=>{
    try{
        const{
            questionPaperId, 
            questionNumber,
            section,
            questionText,
            marks,
            answer,
            keyPoints,
            topic
        }=req.body;

        if(!questionPaperId || !questionNumber || !questionText || marks===undefined)
        {
            return res.status(400).json({
                success:false,
                message:"Required question fields are missing"
            });
        }

        if (!mongoose.isObjectIdOrHexString(questionPaperId)) {
                return res.status(400).json({
                success: false,
                message: "Invalid question paper ID"
             });
}

        // now if the required fileds are there make the question before that check if crossponding question apper exist or not 

        const questionExists = await  QuestionPaper.findById(questionPaperId)

        if(!questionExists){
            return res. status(404).json({
                success:false,
                message:"Question Paper not Found "
            })
        }


        const question = await Question.create({
            questionPaperId, 
            questionNumber,
            section,
            questionText,
            marks,
            answer,
            keyPoints,
            topic
        });

        return res.status(201).json({
            success:true , 
            message:"Question entry Created successfully",
            question
        });

    }catch(error){
          console.error("Create question error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to create question"
        });
    }
}