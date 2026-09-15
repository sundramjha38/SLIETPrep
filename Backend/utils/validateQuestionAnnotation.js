const validateQuestionAnnotation = (annotation) => {
    const errors = [];

    // 1. Top-level validation
    if (!annotation || typeof annotation !== "object") {
        return {
            valid: false,
            errors: ["Document annotation must be an object"]
        };
    }

    // 2. Questions array
    if (!Array.isArray(annotation.questions)) {
        errors.push("questions must be an array");
    }

    if (errors.length > 0) {
        return {
            valid: false,
            errors
        };
    }

    // 3. Validate every question
    annotation.questions.forEach((question, index) => {
        const path = `questions[${index}]`;

        if (!question || typeof question !== "object") {
            errors.push(`${path} must be an object`);
            return;
        }

        // questionNumber
        if (
            typeof question.questionNumber !== "string" ||
            question.questionNumber.trim() === ""
        ) {
            errors.push(
                `${path}.questionNumber must be a non-empty string`
            );
        }

        // section
        if (typeof question.section !== "string") {
            errors.push(
                `${path}.section must be a string`
            );
        }

        // questionText
        if (
            typeof question.questionText !== "string" ||
            question.questionText.trim() === ""
        ) {
            errors.push(
                `${path}.questionText must be a non-empty string`
            );
        }

        // marks
        if (
            question.marks !== null &&
            (
                typeof question.marks !== "number" ||
                question.marks < 0
            )
        ) {
            errors.push(
                `${path}.marks must be a positive number or null`
            );
        }

        // alternativeGroup
        if (typeof question.alternativeGroup !== "string") {
            errors.push(
                `${path}.alternativeGroup must be a string`
            );
        }
    });

    return {
        valid: errors.length === 0,
        errors
    };
};

export default validateQuestionAnnotation;