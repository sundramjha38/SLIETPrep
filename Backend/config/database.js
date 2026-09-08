import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    }catch(error)
    {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}
export default connectDB;