import curriculumModel from "../models/curriculum.model.js";

export const createCurriculum = async(req,res)=>{
    try{
        const {degreeType , branch , semester , subjects}=req.body;
    // if there nay of the filed is missign send the error
    if(!degreeType || !branch || !semester || !subjects)
    {
        return res.status(400).json({
            success:false,
            message:"all the filed is must required"
        });
    }
    // all filed is there no check for the existing curriculum for the same degreeType+branch+semester if it is there then return error that curriculum already exist
    const existingCurriculum = await curriculumModel.findOne({
        degreeType,
        branch,
        semester
    })
    if(existingCurriculum){
        return res.status(400).json({
            success:false,
            message:"curriculm for this degreeType , branch and semester already exists"
        })
    }
    // now create the new curriculum and save it in the database
    const curriculum = await curriculumModel.create({
        degreeType,
        branch,
        semester,
        subjects
    });
    // save the curriculm in the databse and send the response 
    return res.status(201).json({
        success:true,
        message:"curriculum created successfully",
        curriculum
    })

    }catch(error){
        console.error("create curriculum error:",error);
        return res.status(500).json({
            success:false,
            message:"unable to create curriculum due to internal server error"
        })
    }
}