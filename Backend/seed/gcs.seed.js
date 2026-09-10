import "dotenv/config";

import connectDB from "../config/database.js";
import Curriculum from "../models/curriculum.model.js";

const curriculumData = [
    {
        degreeType: "degree",
        branch: "GCS",
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
        branch: "GCS",
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
    } ,
    {
        degreeType: "degree",
        branch: "GCS",
        semester: 3,
        subjects: [
        {
            code: "BSMA-501",
            name: "Numerical and Statistical Methods",
            syllabus: ""
        },
        {
            code: "PCCS-511",
            name: "Digital Electronics",
            syllabus: ""
        },
        {
            code: "PCCS-512",
            name: "Object Oriented Programming",
            syllabus: ""
        },
        {
            code: "PCCS-513",
            name: "Data Structures",
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
            code: "BSMA-502",
            name: "Numerical and Statistical Methods Lab",
            syllabus: ""
        },
        {
            code: "PCCS-514",
            name: "Digital Electronics Lab",
            syllabus: ""
        },
        {
            code: "PCCS-515",
            name: "Object Oriented Programming Lab",
            syllabus: ""
        },
        {
            code: "PCCS-516",
            name: "Data Structures Lab",
            syllabus: ""
        }
    ]
    } , 
    {
        degreeType: "degree",
        branch: "GCS",
        semester: 4,
        subjects: [
            {
                code: "ESME-501",
                name: "Engineering Mechanics",
                syllabus: ""
            },
            {
                code: "PCCS-521",
                name: "Computer Organization and Architecture",
                syllabus: ""
            },
            {
                code: "PCCS-522",
                name: "Operating System",
                syllabus: ""
            },
            {
                code: "PCCS-523",
                name: "Database Management System",
                syllabus: ""
            },
            {
                code: "HSMC-501",
                name: "Principles of Management",
                syllabus: ""
            },
            {
                code: "PCCS-524",
                name: "Operating System Lab",
                syllabus: ""
            },
            {
                code: "PCCS-525",
                name: "Database Management System Lab",
                syllabus: ""
            },
            {
                code: "MCMH-501",
                name: "Indian Constitution",
                syllabus: ""
            }
        ]
    } , 

    {
        degreeType: "degree",
        branch: "GCS",
        semester: 5,
        subjects: [
            {
                code: "PCCS-611",
                name: "Discrete Mathematics",
                syllabus: ""
            },
            {
                code: "PCCS-612",
                name: "Computer Networks",
                syllabus: ""
            },
            {
                code: "OECS-611",
                name: "Open Elective-1",
                syllabus: ""
            },
            {
                code: "OECS-612",
                name: "Open Elective-2",
                syllabus: ""
            },
            {
                code: "PECS-611",
                name: "Professional Elective-1",
                syllabus: ""
            },
            {
                code: "HSMC-601",
                name: "Technical Communication",
                syllabus: ""
            },
            {
                code: "PCCS-613",
                name: "Computer Networks Lab",
                syllabus: ""
            },
            {
                code: "HSMC-602",
                name: "Technical Communication Lab",
                syllabus: ""
            }
        ]
    } , 
    {
        degreeType: "degree",
        branch: "GCS",
        semester: 6,
        subjects: [
            {
                code: "PCCS-621",
                name: "Design and Analysis of Algorithm",
                syllabus: ""
            },
            {
                code: "PCCS-622",
                name: "Automata Theory and Formal Languages",
                syllabus: ""
            },
            {
                code: "OECS-621",
                name: "Open Elective-3",
                syllabus: ""
            },
            {
                code: "OECS-622",
                name: "Open Elective-4",
                syllabus: ""
            },
            {
                code: "PECS-621",
                name: "Professional Elective-2",
                syllabus: ""
            },
            {
                code: "HSMC-603",
                name: "Engineering Economics and Entrepreneurship",
                syllabus: ""
            },
            {
                code: "PCCS-623",
                name: "Design and Analysis of Algorithm Lab",
                syllabus: ""
            }
        ]
    } , 
    {
        degreeType: "degree",
        branch: "GCS",
        semester: 7,
        subjects: [
            {
                code: "PCCS-711",
                name: "Internet Programming",
                syllabus: ""
            },
            {
                code: "PCCS-712",
                name: "Compiler Design",
                syllabus: ""
            },
            {
                code: "PECS-711",
                name: "Professional Elective-3",
                syllabus: ""
            },
            {
                code: "PECS-712",
                name: "Professional Elective-4",
                syllabus: ""
            },
            {
                code: "OECS-711",
                name: "Open Elective-5",
                syllabus: ""
            },
            {
                code: "PCCS-713",
                name: "Internet Programming Lab",
                syllabus: ""
            },
            {
                code: "PRCS-711",
                name: "Project Stage I and Seminar",
                syllabus: ""
            }
        ]
    } , 
    {
        degreeType: "degree",
        branch: "GCS",
        semester: 8,
        subjects: [
            {
                code: "PECS-721",
                name: "Professional Elective-5",
                syllabus: ""
            },
            {
                code: "PECS-722",
                name: "Professional Elective-6",
                syllabus: ""
            },
            {
                code: "PRCS-721",
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

// no we need a fucntion to insert this dataset in the curriculum 

const seedCurriculum = async ()=>{
    try{
        await connectDB();

        for(const curriculum of curriculumData)
        {
            await Curriculum.updateOne(
                {
                    degreeType:curriculum.degreeType,
                    branch:curriculum.branch,
                    semester:curriculum.semester
                },
                {
                    $set:curriculum
                },
                {
                    upsert:true
                }

            )
        }

        console.log("Curriculum seeded successfully");
        process.exit(0);
    }catch(error)
    {
        console.error("curriculum seeding failed : " , error.message)
        process.exit(1);
    }
}
seedCurriculum();

