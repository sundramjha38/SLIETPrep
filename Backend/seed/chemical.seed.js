import "dotenv/config";

import connectDB from "../config/database.js";
import Curriculum from "../models/curriculum.model.js";

const curriculumData = [
    {
        degreeType: "degree",
        branch: "Chemical",
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
        branch: "Chemical",
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
        branch: "Chemical",
        semester: 3,
        subjects: [
            {
                code: "ESME-501",
                name: "Engineering Mechanics",
                syllabus: ""
            },
            {
                code: "PCCH-511",
                name: "Material and Energy Balance",
                syllabus: ""
            },
            {
                code: "PCCH-512",
                name: "Fluid Mechanics",
                syllabus: ""
            },
            {
                code: "PCCH-513",
                name: "Chemical Engineering Thermodynamics",
                syllabus: ""
            },
            {
                code: "HSMC-501",
                name: "Principles of management",
                syllabus: ""
            },
            {
                code: "PCCH-514",
                name: "Fluid Mechanics lab",
                syllabus: ""
            },
            {
                code: "PCCH-515",
                name: "Process Technology lab",
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
        branch: "Chemical",
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
                code: "PCCH-521",
                name: "Mass Transfer - I",
                syllabus: ""
            },
            {
                code: "PCCH-522",
                name: "Heat Transfer",
                syllabus: ""
            },
            {
                code: "PCCH-523",
                name: "Fluid and Particle Mechanics",
                syllabus: ""
            },
            {
                code: "PCCH-524",
                name: "Heat & Mass Transfer Lab",
                syllabus: ""
            },
            {
                code: "PCCH-525",
                name: "Fluid and Particle Mechanics Lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "Chemical",
        semester: 5,
        subjects: [
            {
                code: "HSMC-603",
                name: "Engineering Economics and Entrepreneurship",
                syllabus: ""
            },
            {
                code: "PCCH-611",
                name: "Chemical Reaction Engineering - I",
                syllabus: ""
            },
            {
                code: "PCCH-612",
                name: "Mass Transfer - II",
                syllabus: ""
            },
            {
                code: "OEXX-611",
                name: "Open Elective-1",
                syllabus: ""
            },
            {
                code: "OEXX-612",
                name: "Open Elective-2",
                syllabus: ""
            },
            {
                code: "PECH-611",
                name: "Professional Elective-1",
                syllabus: ""
            },
            {
                code: "PCCH-613",
                name: "Reaction Engineering Lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "Chemical",
        semester: 6,
        subjects: [
            {
                code: "HSMC-601",
                name: "Technical communication",
                syllabus: ""
            },
            {
                code: "PCCH-621",
                name: "Transport Phenomena",
                syllabus: ""
            },
            {
                code: "PCCH-622",
                name: "Chemical Reaction Engineering - II",
                syllabus: ""
            },
            {
                code: "OEXX-621",
                name: "Open Elective-3",
                syllabus: ""
            },
            {
                code: "OEXX-622",
                name: "Open Elective-4",
                syllabus: ""
            },
            {
                code: "PECH-621",
                name: "Professional Elective-II",
                syllabus: ""
            },
            {
                code: "PCCH-623",
                name: "Design and simulation lab",
                syllabus: ""
            },
            {
                code: "HSMC-602",
                name: "Technical communication lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "Chemical",
        semester: 7,
        subjects: [
            {
                code: "PCCH-711",
                name: "Chemical Process Industries",
                syllabus: ""
            },
            {
                code: "PCCH-712",
                name: "Process Instrumentation and Control",
                syllabus: ""
            },
            {
                code: "OEXX-711",
                name: "Open Elective-5",
                syllabus: ""
            },
            {
                code: "PECH-711",
                name: "Professional Elective-III",
                syllabus: ""
            },
            {
                code: "PECH-712",
                name: "Professional Elective-IV",
                syllabus: ""
            },
            {
                code: "PCCH-713",
                name: "Process Instrumentation and Control lab",
                syllabus: ""
            },
            {
                code: "PRCH-711",
                name: "Project stage 1 and seminar",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "Chemical",
        semester: 8,
        subjects: [
            {
                code: "PECH-721",
                name: "Professional Elective",
                syllabus: ""
            },
            {
                code: "PECH-722",
                name: "Professional Elective",
                syllabus: ""
            },
            {
                code: "PRCH-721",
                name: "Project Stage II",
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

        console.log("Chemical curriculum seeded successfully");

        process.exit(0);
    } catch (error) {
        console.error(
            "Chemical curriculum seeding failed:",
            error.message
        );

        process.exit(1);
    }
};

seedCurriculum();