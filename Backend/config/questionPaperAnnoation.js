const questionPaperAnnotationSchema = {
    type: "object",

    properties: {
        questions: {
            type: "array",

            items: {
                type: "object",

                properties: {
                    questionNumber: {
                        type: "string",
                        description:
                            "The original question number exactly as it appears in the paper, such as 1, 1(a), 2(b), etc."
                    },

                    section: {
                        type: "string",
                        description:
                            "The section name or number associated with the question. Use an empty string if there is no clear section."
                    },

                    questionText: {
                        type: "string",
                        description:
                            "The complete question text. Preserve the wording and mathematical notation as faithfully as possible."
                    },

                    marks: {
                        type: ["number", "null"],
                        description:
                            "Marks assigned to this question. Use null when the marks cannot be determined reliably."
                    },

                    alternativeGroup: {
                        type: "string",
                        description:
                            "A shared identifier for questions that are alternatives separated by OR. Use the main question number, such as '2'. Use an empty string for questions that are not alternatives."
                    }
                },

                required: [
                    "questionNumber",
                    "section",
                    "questionText",
                    "marks",
                    "alternativeGroup"
                ],

                additionalProperties: false
            }
        }
    },

    required: ["questions"],

    additionalProperties: false
};

export default questionPaperAnnotationSchema;