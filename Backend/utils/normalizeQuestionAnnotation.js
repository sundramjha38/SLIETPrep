const cleanText = (value) => {
    if (typeof value !== "string") {
        return value;
    }

    return value
        .trim()
        .replace(/\r\n/g, "\n")
        .replace(/[ \t]+/g, " ")
        .replace(/\n{3,}/g, "\n\n");
};

const cleanLatexDelimiters = (text) => {
    if (typeof text !== "string") {
        return text;
    }

    return text
        .replace(/\$\$\\\(([\s\S]*?)\\\)\$\$/g, "$$$1$$")
        .replace(/\$\\\(([\s\S]*?)\\\)\$/g, "$$$1$");
};

const normalizeQuestionAnnotation = (annotation) => {
    return {
        questions: annotation.questions.map((question) => ({
            questionNumber: question.questionNumber.trim(),

            section: question.section.trim(),

            questionText: cleanLatexDelimiters(
                cleanText(question.questionText)
            ),

            marks: question.marks,

            alternativeGroup:
                question.alternativeGroup.trim()
        }))
    };
};

export default normalizeQuestionAnnotation;