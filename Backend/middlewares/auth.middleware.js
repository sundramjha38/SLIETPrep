import jwt from "jsonwebtoken";
export const authMiddle=(req , res ,next)=>{
    try{
        // get the jwt token from the cookies 

        const isToken=req.cookies.token;
        if(!isToken)
        {
            return res.status(401).json({
                success:false,
                message:"Login to access this api"
            })
        }
        // there is token then we need to verify that token whther that token is valid or not for this i can do i will fetch the userid fromt token and then find the used id in the databse if it is there then fine let ti access the next or else show some error

        const decoded=jwt.verify(isToken , process.env.JWT_SECRET) ;

        req.user=decoded;

        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"Invalid or expired token"
        });
    }
};