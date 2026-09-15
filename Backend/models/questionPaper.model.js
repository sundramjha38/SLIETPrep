import mongoose from "mongoose";

const questionPaperSchema = new mongoose.Schema(
    {
        subjectCode: {
            type: String,
            required: true,
            trim: true
        },

        branchCodes: {
            type: [String],
            required: true
        },

        semester: {
            type: Number,
            required: true
        },

        examType: {
            type: String,
            enum: ["minor1", "minor2", "major"],
            required: true
        },

        examYear: {
            type: Number,
            required: true
        },

        paperSetters: {
            type: [String],
            default: []
        },

        examDate: {
            type: Date
        },

        durationMinutes: {
            type: Number
        },

        maxMarks: {
            type: Number
        },

        originalPaper: {
            url: {
                type: String
            },

            publicId: {
                type: String
            }
        }
    },
    {
        timestamps: true
    }
);

const QuestionPaper = mongoose.model(
    "QuestionPaper",
    questionPaperSchema
);

export default QuestionPaper;