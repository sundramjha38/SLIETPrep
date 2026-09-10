import "dotenv/config";

import connectDB from "../config/database.js";
import Curriculum from "../models/curriculum.model.js";

const curriculumData = [
    {
        degreeType: "degree",
        branch: "Food Technology",
        semester: 1,
        subjects: [
            {
                code: "BSMA-401",
                name: "Engineering Mathematics I",
                syllabus: ""
            },
            {
                code: "BSCH-401",
                name: "Applied Chemistry",
                syllabus: ""
            },
            {
                code: "ESME-401",
                name: "Elements of Mechanical Engineering",
                syllabus: ""
            },
            {
                code: "ESME-402",
                name: "Workshop Technology and Practice",
                syllabus: ""
            },
            {
                code: "HSMC-401",
                name: "English Communication and Soft Skills",
                syllabus: ""
            },
            {
                code: "BSCH-402",
                name: "Applied Chemistry Lab",
                syllabus: ""
            },
            {
                code: "ESME-403",
                name: "Elements of Mechanical Engineering Lab",
                syllabus: ""
            },
            {
                code: "ESME-404",
                name: "Engineering Drawing",
                syllabus: ""
            },
            {
                code: "ESME-405",
                name: "Workshop Technology and Practice Lab",
                syllabus: ""
            },
            {
                code: "HSMC-402",
                name: "English Communication and Soft Skills Lab",
                syllabus: ""
            },
            {
                code: "MCCH-401",
                name: "Environmental Studies",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "Food Technology",
        semester: 2,
        subjects: [
            {
                code: "BSMA-402",
                name: "Engineering Mathematics II",
                syllabus: ""
            },
            {
                code: "BSPH-401",
                name: "Applied Physics",
                syllabus: ""
            },
            {
                code: "ESEE-401",
                name: "Elements of Electrical Engineering",
                syllabus: ""
            },
            {
                code: "ESCS-401",
                name: "Elements of Computer Engineering",
                syllabus: ""
            },
            {
                code: "ESEC-401",
                name: "Elements of Electronics Engineering",
                syllabus: ""
            },
            {
                code: "BSPH-402",
                name: "Applied Physics Lab",
                syllabus: ""
            },
            {
                code: "ESEE-402",
                name: "Elements of Electrical Engineering Lab",
                syllabus: ""
            },
            {
                code: "ESCS-402",
                name: "Elements of Computer Engineering Lab",
                syllabus: ""
            },
            {
                code: "ESEC-402",
                name: "Elements of Electronics Engineering Lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "Food Technology",
        semester: 3,
        subjects: [
            {
                code: "ESME-501",
                name: "Engineering Mechanics",
                syllabus: ""
            },
            {
                code: "PCFT-511",
                name: "Food Chemistry",
                syllabus: ""
            },
            {
                code: "PCFT-512",
                name: "Food Microbiology",
                syllabus: ""
            },
            {
                code: "PCFT-513",
                name: "Heat and Mass Transfer",
                syllabus: ""
            },
            {
                code: "HSMC-501",
                name: "Principles of Management",
                syllabus: ""
            },
            {
                code: "PCFT-514",
                name: "Heat and Mass Transfer Lab",
                syllabus: ""
            },
            {
                code: "PCFT-515",
                name: "Food Chemistry and Microbiology Lab",
                syllabus: ""
            },
            {
                code: "MCMH-501",
                name: "Indian Constitution",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "Food Technology",
        semester: 4,
        subjects: [
            {
                code: "BSMA-501",
                name: "Numerical and Statistical Methods",
                syllabus: ""
            },
            {
                code: "BSMA-502",
                name: "Numerical and Statistical Methods Lab",
                syllabus: ""
            },
            {
                code: "BSBL-501",
                name: "Biology for Engineers",
                syllabus: ""
            },
            {
                code: "MCUG-501",
                name: "Universal Human Values-II: Understanding Harmony",
                syllabus: ""
            },
            {
                code: "PCFT-521",
                name: "Food Biochemistry and Nutrition",
                syllabus: ""
            },
            {
                code: "PCFT-522",
                name: "Food Biotechnology",
                syllabus: ""
            },
            {
                code: "PCFT-523",
                name: "Food Engineering",
                syllabus: ""
            },
            {
                code: "PCFT-524",
                name: "Food Engineering Lab",
                syllabus: ""
            },
            {
                code: "PCFT-525",
                name: "Food Biochemistry and Nutrition and Biotechnology Lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "Food Technology",
        semester: 5,
        subjects: [
            {
                code: "PCFT-611",
                name: "Technology of Animal Product",
                syllabus: ""
            },
            {
                code: "PCFT-612",
                name: "Dairy Technology",
                syllabus: ""
            },
            {
                code: "PCFT-613",
                name: "Animal Product Technology and Dairy Technology Lab",
                syllabus: ""
            },
            {
                code: "OEXX-611",
                name: "Open Elective-I",
                syllabus: ""
            },
            {
                code: "OEXX-612",
                name: "Open Elective-II",
                syllabus: ""
            },
            {
                code: "PEFT-611",
                name: "Professional Elective-I",
                syllabus: ""
            },
            {
                code: "HSMC-603",
                name: "Engineering Economics and Entrepreneurship",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "Food Technology",
        semester: 6,
        subjects: [
            {
                code: "PCFT-621",
                name: "Technology of Cereal, Pulses and Oilseeds Processing",
                syllabus: ""
            },
            {
                code: "PCFT-622",
                name: "Technology of Fruits and Vegetable Products",
                syllabus: ""
            },
            {
                code: "PCFT-623",
                name: "Plant Foods Lab",
                syllabus: ""
            },
            {
                code: "OEXX-621",
                name: "Open Elective-III",
                syllabus: ""
            },
            {
                code: "OEXX-622",
                name: "Open Elective-IV",
                syllabus: ""
            },
            {
                code: "PEFT-621",
                name: "Professional Elective-II",
                syllabus: ""
            },
            {
                code: "HSMC-601",
                name: "Technical Communication",
                syllabus: ""
            },
            {
                code: "HSMC-602",
                name: "Technical Communication lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "Food Technology",
        semester: 7,
        subjects: [
            {
                code: "PCFT-711",
                name: "Food Analysis and Quality Control",
                syllabus: ""
            },
            {
                code: "PCFT-712",
                name: "Packaging Technology",
                syllabus: ""
            },
            {
                code: "PCFT-713",
                name: "Food Analysis, Quality Control and Packaging Technology Lab",
                syllabus: ""
            },
            {
                code: "OEXX-711",
                name: "Open Elective-V",
                syllabus: ""
            },
            {
                code: "PEFT-711",
                name: "Professional Elective - III",
                syllabus: ""
            },
            {
                code: "PEFT-712",
                name: "Professional Elective - IV",
                syllabus: ""
            },
            {
                code: "PRFT-711",
                name: "Project Stage I and Seminar",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "Food Technology",
        semester: 8,
        subjects: [
            {
                code: "PEFT-721",
                name: "Professional Elective - V",
                syllabus: ""
            },
            {
                code: "PEFT-722",
                name: "Professional Elective - VI",
                syllabus: ""
            },
            {
                code: "PRFT-721",
                name: "Project Stage - II",
                syllabus: ""
            }
        ]
    }
];

const seedCurriculum = async () => {
    try {
        await connectDB();

        for (const curriculum of curriculumData) {
            await Curriculum.updateOne(
                {
                    degreeType: curriculum.degreeType,
                    branch: curriculum.branch,
                    semester: curriculum.semester
                },
                {
                    $set: curriculum
                },
                {
                    upsert: true
                }
            );
        }

        console.log("Food Technology curriculum seeded successfully");

        process.exit(0);
    } catch (error) {
        console.error(
            "Food Technology curriculum seeding failed:",
            error.message
        );

        process.exit(1);
    }
};

seedCurriculum();