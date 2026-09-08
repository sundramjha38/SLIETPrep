import express from "express";
import { authMiddle } from "../middlewares/auth.middleware.js";
const router=express.Router();

import { createStudentProfile , updateProfile , getProfile } from "../controllers/profile.controller.js";

router.post("/create" , authMiddle,createStudentProfile);
router.put("/update" , authMiddle, updateProfile);
router.get("/get" , authMiddle, getProfile);

export default router;