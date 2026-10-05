import studentProfileModel from "../models/studentProfile.model.js";

export const createStudentProfile = async (req, res) => {
    try{
        const userId=req.user.userId;
        const{degreeType , branch , year , semester}=req.body;
        // this is for checking if all the required field is present or not 
        if(!degreeType || !branch || !year || !semester)
        {
            return res.status(400).json({
                success:false,
                message:"all the filed is must required"
            })
        }

        // now check if the profile for the user already exists if so then returnt hat profile already exists

        const existingProfile = await studentProfileModel.findOne({
            userId
        });
        if(existingProfile){
            return res.status(400).json({
                success:false,
                message:"profile for this user already exist"
            })
        }

        // now no old profile is there with this user so create the new one and upadte the database 

        const profile = await studentProfileModel.create({
            userId,
            degreeType,
            branch,
            year,
            semester
        })

        return res.status(201).json({
            success:true,
            message:"profile of the user created successfully",
        });

    }catch(error){
        // if their is an error in creation of the profile show it 
         console.error("Create profile error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to create profile"
        });
    }
}

export const updateProfile=async(req,res)=>{
    try{
        const userId=req.user.userId;
        const{degreeType,branch,year,semester}=req.body;
        // check if user exists or not if not then return user not exist 

        const existingUser=await studentProfileModel.findOne({userId});
        if(!existingUser)
        {
            return res.status(404).json({
                success:false,
                message:"user profile not found"
            })
        }
        // now update the profile of the user and move on 
        if (degreeType !== undefined) existingUser.degreeType = degreeType;
        if (branch !== undefined) existingUser.branch = branch;
        if (year !== undefined) existingUser.year = year;
        if (semester !== undefined) existingUser.semester = semester;

        await existingUser.save();
        return res.status(200).json({
            success:true,
            message:"profile updated successfully"
        });
    }catch(error){
        console.error("Update profile error:", error);
        return res.status(500).json({
            success:false,
            message:"unable to update the profile"
        });
    }
}

export const getProfile=async(req,res)=>{
    try{
        const userId=req.user.userId;
        const profile=await studentProfileModel.findOne({userId}).populate("userId" , "name , email");

        // if profile is not found then return profile not found
        if(!profile){
            return res.status(404).json({
                success:false,
                message:"profile not found"
            })
        }
        return res.status(200).json({
            success:true,
            profile
        })
    }catch(error){
        console.error("Get profile error:", error);
        return res.status(500).json({
            success:false,
            message:"unable to fetch the profile"
        })
    }
}