
import mistralClient from "../config/Mistral.js";
import questionPaperAnnotationPrompt from "../config/questionPaperAnnoationprompt.js";
import questionPaperAnnotationSchema from "../config/questionPaperAnnoation.js";
const extractTextFromPdf = async(fileBuffer)=>{
    try{
        const base64Pdf = fileBuffer.toString("base64");

        const ocrResponse = await mistralClient.ocr.process({
            model:"mistral-ocr-latest",
            document:{
                type:"document_url",
                documentUrl:`data:application/pdf;base64,${base64Pdf}`
            },
            includeImageBase64:true,
            includeBlocks:true,
            ConfidenceScoresGranularity:"block",

             documentAnnotationPrompt:
                questionPaperAnnotationPrompt,

            documentAnnotationFormat: {
                type: "json_schema",

                jsonSchema: {
                    name: "question_paper",

                    schemaDefinition:  questionPaperAnnotationSchema,

                    strict: true
                }
            }

        });
        console.log("Mistral API responded");

console.log(
    "Response keys:",
    Object.keys(ocrResponse || {})
);

return ocrResponse;
    }catch(error){
        console.error("Mistral OCR error:" , error);
        throw error;
    }
};

export default extractTextFromPdf;