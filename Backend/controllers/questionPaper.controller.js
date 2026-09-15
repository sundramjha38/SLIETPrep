import QuestionPaper from "../models/questionPaper.model.js";
import uploadToCloudinary from "../utils/cloudinaryUpload.js";
import extractTextFromPdf from "../services/mistral.service.js";

import validateQuestionAnnotation from "../utils/validateQuestionAnnotation.js";

export const createQuestionPaper = async(req , res)=>{
    let uploadedPublicId=null;
    try{
           const {
            subjectCode,
            branchCodes,
            semester,
            examType,
            examYear,
            paperSetters,
            examDate,
            durationMinutes,
            maxMarks , 
            degreeType,
        } = req.body;

        // the branch code that we are reciving is not an array it is basially a strign which is causing roblem so we need to hange it into array 

        const parsedBranchCodes =Array.isArray(branchCodes)? branchCodes: branchCodes.split(",").map(branch => branch.trim());

        if(!subjectCode || !branchCodes || !semester || !examType || !examYear || !degreeType )
        {
            return res.status(400).json({
                success:false,
                message:"Required question paper fields are missing"
            });
        }

        // after that we need to validate the uploaded pdf 
        if(!req.file){
            return res.status(400).json({
                success:false,
                message:"Question paper PDF is required "
            });
        }
      // veriictaion for the file type 
          if (req.file.mimetype !== "application/pdf") {
            return res.status(400).json({
                success: false,
                message: "Only PDF files are allowed"
            });
        }
        // here only we have two branch one is to store the origanl questionpaper in cloudinary other is to extract the ocr documnent from the question and update the question models as well 


        // misreal setup 

        console.log("Starting Mistral OCR...");

            const ocrResponse = await extractTextFromPdf(
                req.file.buffer
            );

            console.log("Mistral OCR completed successfully");

            console.log(
                "OCR response received:",
                !!ocrResponse
            );

            console.log(
                "Response keys:",
                Object.keys(ocrResponse || {})
            );

            console.log(
                "Document annotation:",
                ocrResponse?.documentAnnotation
            );

        const annotation = JSON.parse(ocrResponse?.documentAnnotation);
        const validationResult =
            validateQuestionAnnotation(annotation);

        if (!validationResult.valid) {
            console.error(
                "Question annotation validation failed:",
                validationResult.errors
            );

            return res.status(422).json({
                success: false,
                message: "Question paper extraction failed validation",
                errors: validationResult.errors
            });
        }

        console.log("Question annotation validation passed");

        let folderBranch;

        if (parsedBranchCodes.length === 1) {
            folderBranch = parsedBranchCodes[0];
        } else {
            folderBranch = "common";
        }

        const folder=`SLIETPrep/${degreeType}/${folderBranch}/question-papers/original`;

        const uploadResult = await uploadToCloudinary(
            req.file.buffer,{
                resource_type:"raw",
                asset_folder:folder
            }
        );
        uploadedPublicId=uploadResult.public_id;

          const questionPaper = await QuestionPaper.create({
            subjectCode,
            branchCodes:parsedBranchCodes,
            semester,
            examType,
            examYear,
            paperSetters,
            examDate,
            durationMinutes,
            maxMarks,
            originalPaper: {
                url: uploadResult.secure_url,
                publicId: uploadResult.public_id
            }
        });

        return res.status(201).json({
            success: true,
            message: "Question paper created successfully",
            questionPaper
        });
    }catch(error){
        console.error("create question paper error :" , error)

        return res.status(500).json({
            success:false,
            message:"unable to create question paper"
        });
    }
};