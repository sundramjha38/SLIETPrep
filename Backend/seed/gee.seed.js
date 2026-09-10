import "dotenv/config";

import connectDB from "../config/database.js";
import Curriculum from "../models/curriculum.model.js";

const curriculumData = [
    {
        degreeType: "degree",
        branch: "GEE",
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
        branch: "GEE",
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
                name: "Mandatory Course-1",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "GEE",
        semester: 3,
        subjects: [
            {
                code: "BSMA-501",
                name: "Numerical and Statistical Methods",
                syllabus: ""
            },
            {
                code: "PCEE-511",
                name: "Electrical Circuit Analysis and Synthesis",
                syllabus: ""
            },
            {
                code: "PCEE-512",
                name: "Electronic Devices and Circuits",
                syllabus: ""
            },
            {
                code: "PCEE-513",
                name: "Electrical Machines-I (Transformers and DC Machines)",
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
                code: "PCEE-514",
                name: "Electrical Machines-I Lab",
                syllabus: ""
            },
            {
                code: "PCEE-515",
                name: "Electrical Circuit Lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "GEE",
        semester: 4,
        subjects: [
            {
                code: "ESME-501",
                name: "Engineering Mechanics",
                syllabus: ""
            },
            {
                code: "PCEE-521",
                name: "Digital Electronics",
                syllabus: ""
            },
            {
                code: "PCEE-522",
                name: "Electrical Machines-II (Asynchronous and Synchronous machines)",
                syllabus: ""
            },
            {
                code: "PCEE-523",
                name: "Signals and Systems",
                syllabus: ""
            },
            {
                code: "HSMC-501",
                name: "Principles of Management",
                syllabus: ""
            },
            {
                code: "PCEE-524",
                name: "Analog and Digital Electronics Lab",
                syllabus: ""
            },
            {
                code: "PCEE-525",
                name: "Electrical Machines-II Lab",
                syllabus: ""
            },
            {
                code: "MCMH-501",
                name: "Mandatory Course - 2",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "GEE",
        semester: 5,
        subjects: [
            {
                code: "PCEE-611",
                name: "Electrical Power System-I (Generation, transmission and distribution)",
                syllabus: ""
            },
            {
                code: "PCEE-612",
                name: "Control Systems",
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
                code: "PEEE-611",
                name: "Professional Elective-1",
                syllabus: ""
            },
            {
                code: "HSMC-601",
                name: "Technical Communication",
                syllabus: ""
            },
            {
                code: "PCEE-613",
                name: "Control System Lab",
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
        branch: "GEE",
        semester: 6,
        subjects: [
            {
                code: "PCEE-621",
                name: "Electrical and Electronic Measurements",
                syllabus: ""
            },
            {
                code: "PCEE-622",
                name: "Electrical Power System-II (Analysis and Protection)",
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
                code: "PEEE-621",
                name: "Professional Elective-2",
                syllabus: ""
            },
            {
                code: "HSMC-603",
                name: "Engineering Economics and Entrepreneurship",
                syllabus: ""
            },
            {
                code: "PCEE-623",
                name: "Power System Lab",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "GEE",
        semester: 7,
        subjects: [
            {
                code: "PCEE-711",
                name: "Microprocessors and Microcontrollers",
                syllabus: ""
            },
            {
                code: "PCEE-712",
                name: "Power Electronics and Drives",
                syllabus: ""
            },
            {
                code: "PEEE-711",
                name: "Professional Elective-3",
                syllabus: ""
            },
            {
                code: "PEEE-712",
                name: "Professional Elective-4",
                syllabus: ""
            },
            {
                code: "OEXX-711",
                name: "Open Elective-5",
                syllabus: ""
            },
            {
                code: "PCEE-713",
                name: "Microprocessors and Microcontrollers Lab",
                syllabus: ""
            },
            {
                code: "PCEE-714",
                name: "Power Electronics and Drives Lab",
                syllabus: ""
            },
            {
                code: "PREE-711",
                name: "Project Stage I and Seminar",
                syllabus: ""
            }
        ]
    },

    {
        degreeType: "degree",
        branch: "GEE",
        semester: 8,
        subjects: [
            {
                code: "PEEE-721",
                name: "Professional Elective-5",
                syllabus: ""
            },
            {
                code: "PREE-722",
                name: "Professional Elective-6",
                syllabus: ""
            },
            {
                code: "PREE-721",
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

        console.log("GEE curriculum seeded successfully");

        process.exit(0);
    } catch (error) {
        console.error(
            "GEE curriculum seeding failed:",
            error.message
        );

        process.exit(1);
    }
};

seedCurriculum();