import "dotenv/config";

import connectDB from "../config/database.js";
import Curriculum from "../models/curriculum.model.js";

const curriculumData = [
    {
        degreeType: "degree",
        branch: "ECE",
        semester: 1,
        subjects: [
            {
                code: "BSMA-401",
                name: "Engineering Mathematics I",
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
        branch: "ECE",
        semester: 2,
        subjects: [
            {
                code: "BSMA-402",
                name: "Engineering Mathematics II",
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
        branch: "ECE",
        semester: 3,
        subjects: [
            {
                code: "BSMA-501",
                name: "Numerical and Statistical Methods",
                syllabus: ""
            },
            {
                code: "PCEC-511",
                name: "Network Analysis & Synthesis",
                syllabus: ""
            },
            {
                code: "PCEC-512",
                name: "Digital System Design",
                syllabus: ""
            },
            {
                code: "PCEC-513",
                name: "Signals & Systems",
                syllabus: ""
            },
            {
                code: "PCEC-514",
                name: "Electronic Devices & Circuits",
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
                code: "PCEC-515",
                name: "Digital System Design Lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "ECE",
        semester: 4,
        subjects: [
            {
                code: "ESME-501",
                name: "Engineering Mechanics",
                syllabus: ""
            },
            {
                code: "PCEC-521",
                name: "Analog Communication",
                syllabus: ""
            },
            {
                code: "PCEC-522",
                name: "Analog Electronic Circuits",
                syllabus: ""
            },
            {
                code: "PCEC-523",
                name: "Microprocessor & Microcontroller",
                syllabus: ""
            },
            {
                code: "HSMC-501",
                name: "Principles of Management",
                syllabus: ""
            },
            {
                code: "PCEC-524",
                name: "Analog Electronic Circuits Lab",
                syllabus: ""
            },
            {
                code: "PCEC-525",
                name: "Microprocessor & Microcontroller Lab",
                syllabus: ""
            },
            {
                code: "PCEC-526",
                name: "MATLAB Programming Lab",
                syllabus: ""
            },
            {
                code: "MCMH-501",
                name: "Constitution of India",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "ECE",
        semester: 5,
        subjects: [
            {
                code: "PCEC-611",
                name: "Digital Communication",
                syllabus: ""
            },
            {
                code: "PCEC-612",
                name: "EMF & Transmission Lines",
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
                code: "PEEC-611",
                name: "Professional Elective-1",
                syllabus: ""
            },
            {
                code: "HSMC-601",
                name: "Technical Communication",
                syllabus: ""
            },
            {
                code: "PCEC-613",
                name: "Analog & Digital Communication Lab",
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
        branch: "ECE",
        semester: 6,
        subjects: [
            {
                code: "PCEC-621",
                name: "Linear Integrated Circuits",
                syllabus: ""
            },
            {
                code: "PCEC-622",
                name: "Fiber Optics Communication",
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
                code: "PEEC-621",
                name: "Professional Elective-2",
                syllabus: ""
            },
            {
                code: "HSMC-603",
                name: "Engineering Economics and Entrepreneurship",
                syllabus: ""
            },
            {
                code: "PCEC-623",
                name: "Linear Integrated Circuits Lab",
                syllabus: ""
            },
            {
                code: "PCEC-624",
                name: "Fiber Optics Comm. Lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "ECE",
        semester: 7,
        subjects: [
            {
                code: "PCEC-711",
                name: "Digital Signal Processing",
                syllabus: ""
            },
            {
                code: "PCEC-712",
                name: "Antenna and Wave Propagation",
                syllabus: ""
            },
            {
                code: "PEEC-711",
                name: "Professional Elective-3",
                syllabus: ""
            },
            {
                code: "PEEC-712",
                name: "Professional Elective-4",
                syllabus: ""
            },
            {
                code: "OEXX-711",
                name: "Open Elective-5",
                syllabus: ""
            },
            {
                code: "PCEC-713",
                name: "Digital Signal Processing Lab",
                syllabus: ""
            },
            {
                code: "PCEC-714",
                name: "Antenna and Microwave Lab",
                syllabus: ""
            },
            {
                code: "PREC-711",
                name: "Project Stage I and Seminar",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "ECE",
        semester: 8,
        subjects: [
            {
                code: "PEEC-721",
                name: "Professional Elective-5",
                syllabus: ""
            },
            {
                code: "PEEC-722",
                name: "Professional Elective-6",
                syllabus: ""
            },
            {
                code: "PREC-721",
                name: "Project Stage II",
                syllabus: ""
            },
            {
                code: "INID-721",
                name: "Internship in Industry",
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

        console.log("ECE curriculum seeded successfully");

        process.exit(0);
    } catch (error) {
        console.error(
            "ECE curriculum seeding failed:",
            error.message
        );

        process.exit(1);
    }
};

seedCurriculum();