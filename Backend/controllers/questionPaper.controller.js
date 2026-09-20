import QuestionPaper from "../models/questionPaper.model.js";
import uploadToCloudinary from "../utils/cloudinaryUpload.js";
import extractTextFromPdf from "../services/mistral.service.js";
import Question from "../models/question.model.js";

// this function is to create a  question paper and add it to the databse 
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
        console.log("OCR response received:",!!ocrResponse);
        console.log(
            "Response keys:",
            Object.keys(ocrResponse || {})
        );

        console.log(
            "Document annotation:",
             ocrResponse?.documentAnnotation
        );

            // the validation and the normalization part will come here we will keep it later 


            // the cloudinary code to save the orignal paper and its link and all that in the mongodb 

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

        // the entry of the above extracted quetsions in the question databse 

        const annotation = JSON.parse(ocrResponse.documentAnnotation);
        const questions = annotation.questions.map((question) => ({
            questionPaperId: questionPaper._id,
            questionNumber: question.questionNumber,
            section: question.section,
            questionText: question.questionText,
            marks: question.marks,
            alternativeGroup: question.alternativeGroup
        }));

        const createdQuestions = await Question.insertMany(questions);

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

// this fucntion is retrive all the questionpaper related to a specific input 
export const getQuestionPapers = async(req,res) =>{
    try{

        const {subjectCode , semester , examType , examYear}=req.query;
        const filter={};
        if(subjectCode)
        {
            filter.subjectCode=subjectCode;
        }
        if(semester)
        {
            filter.semester=semester;
        }
        if(examType)
        {
            filter.examType=examType;
        }
        if(examYear)
        {
            filter.examYear;
        }
        // now if still filter is empty then we need to return the error else find the questionpaper model based on the filter and return all the related data 
        const questionPapers = await QuestionPaper.find(filter)
            .sort({
                examYear: -1
            });

        return res.status(200).json({
            success:true,
            message:"The required question paper is filtered ",
            questionPapers
        })     

    }catch(error){
        console.log("Error in fetching the question pappers " , error);

        return res.status(500).json({
            success:false,
            message:"Unable to fetch question papers"
        });
    }
}

// this fucntion will give a specific questionpaper based on the id 

export const getQuestionPaperById = async (req, res) => {
    try {
        const { questionPaperId } = req.params;

        const questionPaper = await QuestionPaper.findById(
            questionPaperId
        );

        if (!questionPaper) {
            return res.status(404).json({
                success: false,
                message: "No paper with this id exists"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Paper fetched successfully",
            questionPaper
        });

    } catch (error) {
        console.log(
            "Error in fetching question paper",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Unable to fetch Question Paper"
        });
    }
};

// this fucntion will return all the questions related to a particular question paper 

export const getQuestionByPaperId = async (req,res)=>{
    try{
        const {questionPaperId}=req.params;
        const questions = await Question.find({
            questionPaperId
        }).sort({
            _id:1
        });

        return res.status(200).json({
            success:true,
            message:"Questions fetched successfully" , 
            count:questions.length,
            questions
        })
    }catch(error){
        console.log("Error in fetching the Question paper" , error)

        return res.status(500).json({
            success:false,
            message:"Unable to fetch the questions for this questin paper"
        });
    }
}