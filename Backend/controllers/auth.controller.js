import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import googleClient from "../config/google.js";
import crypto from "crypto";
import studentProfileModel from "../models/studentProfile.model.js";
 export const signupUser=async(req , res)=>{
    try{
        const {name , email , password}=req.body;
        // validation for the all required field are present or not 
        if(!name||!email||!password)
        {
            return res.status(400).json({
                success:false,
                message:"Name , email and password are required "
            });
        }
        // validation for the name 
        if(name.trim().length<2){
            return res.status(400).json({
                success:false,
                message:"Name must contain at least 2 characters"
            });
        }

        // validation of the email
        if(!validator.isEmail(email)){
            return res.status(400).json({
                success:false,
                message:"Please provide a valid email address"
            });
        }

        // check for the laready account with this mail 
        const existingUser=await User.findOne({
            email:email.toLowerCase().trim()
        });
        if(existingUser){
            return res.status(409).json({
                success:false,
                message:"An account with this email already exists"
            });
        }

        // check the password strength 
        const passwordOptions={
            minLength:8,
            minLowercase:1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        };
        if(!validator.isStrongPassword(password,passwordOptions)){
            return res.status(400).json({
                success:false,
                message:"password is too weak",
                suggestions:"password must contain at least 8 characters , one uppercase letter  one lowercase letter, one number and one special character"
            });
        }

        // hashing of the password 
        const hashPassword= await bcrypt.hash(password,10);

        // creating of the user
        const user=await User.create({
            name:name.trim(),
            email:email.toLowerCase().trim(),
            password:hashPassword,
            authProvider:"local"
        });

        // sending response of the scccessfully creation of the user 

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
              profileExists: false
        });

    }catch(error){
         console.error("Signup error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
}
}

export const loginUser=async(req,res)=>{
   try{
     const {email , password}=req.body;

    // check for the required field if it is there or not 
    if(!email || !password)
    {
        return res.status(400).json({
            success:false,
            message:"Email and password are required"
        });
    }
    // validitaion of the email
    if(!validator.isEmail(email))
    {
        return res.status(400).json({
            success:false,
            message:"Please provide a valid email address"
        });
    }
    // find user 
    const user = await User.findOne({
        email:email.toLowerCase().trim()
    });

    // check for the user existance in the database or not 
    if(!user)
    {
        return res.status(400).json({
            success:false,
            message:"Invalid emial or password"
        });
    }

    // check for the authentication provider 
    if(user.authProvider!=="local")
    {
        return res.status(400).json({
            success:false,
            message:"This account uses Google authentication"
        });
    }

    // compare password 
    const isPasswordCorrect=await bcrypt.compare(password,user.password);

    if(!isPasswordCorrect)
    {
        return res.status(401).json({
            success:false,
            message:"Invalid email or password"
        });
    }
    // now till here i hvae password correct as well as user find so need tos end responce along with the jwt token

    const token = jwt.sign(
        {
            userId:user._id,
            role:user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"7d"
        }
    );

    // store the JWT  token in http only cookies
    res.cookie("token" , token ,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"lax",
        maxAge:7*24*60*60*1000

    });

    // /this part will be act as bridge for the authentication and the profile creation so we will check if the profile for this user is already created or not and send the response accordingly

    const profile = await studentProfileModel.findOne({
         userId: user._id
    })

    // sending the response
    return res.status(200).json({
        success:true,
        message:"Login successful",
        user:{
              id: user._id,
              name: user.name,
              email: user.email,
              role: user.role
        },
        profileExists: !!profile
    });

   }catch(error){
     console.error("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
   }
};

export const googleLogin = async(req,res)=>{
    try{
        const state = crypto.randomBytes(32).toString("hex");

        const nonce=crypto.randomBytes(32).toString("hex");

        const {codeVerifier , codeChallenge} = await googleClient.generateCodeVerifierAsync();

        // store auth value in http only cookies
        const cookieOptions={
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:"lax",
            maxAge:10*60*1000
        };

        res.cookie("google_auth_state",state,cookieOptions);
        res.cookie("google_auth_nonce",nonce,cookieOptions);
        res.cookie("google_auth_code_verifier",codeVerifier,cookieOptions);

        const authorizationUrl=googleClient.generateAuthUrl({
            access_type:"online",
            scope:["openid","profile","email"],
            state:state,
            nonce:nonce,
            code_challenge:codeChallenge,
            code_challenge_method:"S256"
        });

        res.redirect(authorizationUrl);
    }
    catch(error)
    {
        console.error("Google login error:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to initiate Google login"
        });
    }
}
// google auth callback 
export const googleCallback = async(req,res)=>{
    try{
        const {code,state,error}=req.query;

        // if user cancelled the google authentication 
        if(error){
            return res.status(400).json({
                success:false,
                message:"Google authentication was cancelled"
            })
        }
        // check state 
        if(!state || state!==req.cookies.google_auth_state){
            return res.status(400).json({
                success:false,
                message:"Invalid OAuth state"
            });
        }

        // get pkce verfier 

        const codeVerifier=req.cookies.google_auth_code_verifier;

        if(!codeVerifier)
        {
            return res.state(401).json({
                success:false,
                message:"oAuth verification failed"
            });
        }

        // now till here everything is good and so lets fetch the google token and verify the verifiew with the token 
         const {tokens} = await googleClient.getToken({
            code,codeVerifier
         });

        //  token is valid and we are adding the token to the googleClient using the setCredentials 
         googleClient.setCredentials(tokens);

        //  verification of google id token another verification of the google id token

        const ticket = await googleClient.verifyIdToken({
            idToken:tokens.id_token,
            audience:process.env.GOOGLE_CLIENT_ID
        });

        // finally fetching the payloads

        const payload=ticket.getPayload();
        if(!payload)
        {
            return rs.status(401).json({
                success:false,
                message:"Unable to verify the google account"
            });
        }

        // verify nonce 
        if(!payload.nonce || payload.nonce!==req.cookies.google_auth_nonce){
            return res.status(401).json({
                success:false,
                message:"INvalid google authentication request"
            });
        }

        // now till here all type of verification is done and now we can check for the user in the database if it is there then we can send the jwt token or else we can create a new user and then send the jwt token
        
        const googleId=payload.sub;
        const email=payload.email;
        const name=payload.name;

        if(!googleClient || !email || !name){
            return res.status(400).json({
                success:false,
                message:"Required google account information is missing "

            });
        }

        // lets first check whther this google account already exist or not 

        let user=await User.findOne({
            googleId
        });

        if(!user)
        {
            // check whther the email associated with this google account belong to some other existiing account 

            const existingEmailUser = await User.findOne({
                email:email.toLowerCase().trim()
            });

            if(existingEmailUser)
            {
                return res.status(409).json({
                    success:false,
                    message:"An account with this email already exists. Please login using your existing account."
                });
            }

            // so no existing user neither foemt he email or google id so lets create a google user now 

            user=await User.create({
                name:name.trim(),
                email:email.toLowerCase().trim(),
                authProvider:"google",
                googleId:googleId
            });
        }

        // now till here we done the google authentication part and its time to use our jwt and cookies exactly like normal email login 

        const token = jwt.sign(
            {
                userId:user._id,
                role:user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.cookie("token" , token ,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:"lax",
            maxAge:7*24*60*60*1000
        });

        // oauth temporary cookies are no longer needed so we can clear it 
        res.clearCookie("google_auth_nonce");
        res.clearCookie("google_auth_state");
        res.clearCookie("google_auth_code_verifier");

        // /this part will be act as bridge for the authentication and the profile creation so we will check if the profile for this user is already created or not and send the response accordingly

        const profile = await studentProfileModel.findOne({
             userId: user._id
        })

        return res.status(200).json({
            success:true,
            message:"google authentication successful",
            user:{
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            profileExists: !!profile
        });
    }catch(error){
        console.error("google callback error:",error);
        return res.status(500).json({
            success:false,
            message:"google authentication failed"
        });
    }
};