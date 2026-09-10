import "dotenv/config";

import connectDB from "../config/database.js";
import Curriculum from "../models/curriculum.model.js";

const curriculumData = [
    {
        degreeType: "degree",
        branch: "ME",
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
        branch: "ME",
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
        branch: "ME",
        semester: 3,
        subjects: [
            {
                code: "ESME-501",
                name: "Engineering Mechanics",
                syllabus: ""
            },
            {
                code: "PCME-511",
                name: "Applied Thermodynamics",
                syllabus: ""
            },
            {
                code: "PCME-512",
                name: "Manufacturing Processes",
                syllabus: ""
            },
            {
                code: "PCME-513",
                name: "Fluid Mechanics and Machinery",
                syllabus: ""
            },
            {
                code: "HSMC-501",
                name: "Principles of Management",
                syllabus: ""
            },
            {
                code: "PCME-514",
                name: "Applied Thermodynamics Lab",
                syllabus: ""
            },
            {
                code: "PCME-515",
                name: "Fluid Mechanics and Machinery Lab",
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
        branch: "ME",
        semester: 4,
        subjects: [
            {
                code: "BSMA-501",
                name: "Numerical and Statistical Methods",
                syllabus: ""
            },
            {
                code: "PCME-521",
                name: "Physical Metallurgy",
                syllabus: ""
            },
            {
                code: "PCME-522",
                name: "Kinematics of Machines",
                syllabus: ""
            },
            {
                code: "PCME-523",
                name: "Strength of Materials",
                syllabus: ""
            },
            {
                code: "BSBL-501",
                name: "Biology for Engineers",
                syllabus: ""
            },
            {
                code: "BSMA-502",
                name: "Numerical and Statistical Methods Lab",
                syllabus: ""
            },
            {
                code: "PCME-524",
                name: "Kinematics of Machines Lab",
                syllabus: ""
            },
            {
                code: "PCME-525",
                name: "Strength of Materials Lab",
                syllabus: ""
            },
            {
                code: "PCME-526",
                name: "Machine Drawing",
                syllabus: ""
            },
            {
                code: "PCME-527",
                name: "Physical Metallurgy Lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "ME",
        semester: 5,
        subjects: [
            {
                code: "PCME-611",
                name: "Machine Design-I",
                syllabus: ""
            },
            {
                code: "PCME-612",
                name: "Measurement and Instrumentation",
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
                code: "PEME-611",
                name: "Professional Elective-1",
                syllabus: ""
            },
            {
                code: "HSMC-603",
                name: "Engineering Economics and Entrepreneurship",
                syllabus: ""
            },
            {
                code: "PCME-613",
                name: "Measurement and Instrumentation Lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "ME",
        semester: 6,
        subjects: [
            {
                code: "PCME-621",
                name: "Heat & Mass Transfer",
                syllabus: ""
            },
            {
                code: "PCME-622",
                name: "Principles of Industrial Engineering",
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
                code: "PEME-621",
                name: "Professional Elective-2",
                syllabus: ""
            },
            {
                code: "HSMC-601",
                name: "Technical Communication",
                syllabus: ""
            },
            {
                code: "PCME-623",
                name: "Heat & Mass Transfer Lab",
                syllabus: ""
            },
            {
                code: "HSMC-602",
                name: "Technical Communication Lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "ME",
        semester: 7,
        subjects: [
            {
                code: "PCME-711",
                name: "CAD/CAM",
                syllabus: ""
            },
            {
                code: "PCME-712",
                name: "Machine Design-II",
                syllabus: ""
            },
            {
                code: "OEXX-711",
                name: "Open Elective-5",
                syllabus: ""
            },
            {
                code: "PEME-711",
                name: "Professional Elective-3",
                syllabus: ""
            },
            {
                code: "PEME-712",
                name: "Professional Elective-4",
                syllabus: ""
            },
            {
                code: "PCME-713",
                name: "CAD/CAM Lab",
                syllabus: ""
            },
            {
                code: "PRME-711",
                name: "Project Stage I and Seminar",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "ME",
        semester: 8,
        subjects: [
            {
                code: "PEME-721",
                name: "Professional Elective-5",
                syllabus: ""
            },
            {
                code: "PEME-722",
                name: "Professional Elective-6",
                syllabus: ""
            },
            {
                code: "PRME-721",
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

        console.log("Mechanical curriculum seeded successfully");

        process.exit(0);
    } catch (error) {
        console.error(
            "Mechanical curriculum seeding failed:",
            error.message
        );

        process.exit(1);
    }
};

seedCurriculum();