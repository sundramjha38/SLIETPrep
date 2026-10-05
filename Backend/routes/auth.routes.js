import express from "express";
import { signupUser , loginUser , googleLogin , googleCallback , logoutUser} from "../controllers/auth.controller.js";

const router=express.Router();

router.post("/signup",signupUser);
router.post("/login" , loginUser);
router.get("/google" , googleLogin);
router.get("/google/callback" , googleCallback);
router.post("/logout", logoutUser);


export default router
