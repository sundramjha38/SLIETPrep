import express from "express";

import { createQuestionPaper } from "../controllers/questionPaper.controller.js";

import { authMiddle } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/create" , authMiddle , upload.single("paper"),createQuestionPaper);

export default router;