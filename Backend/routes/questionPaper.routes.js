import express from "express";

import { createQuestionPaper , getQuestionPapers , getQuestionPaperById ,  getQuestionByPaperId} from "../controllers/questionPaper.controller.js";

import { authMiddle } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/create" , authMiddle , upload.single("paper"),createQuestionPaper);

router.get("/get/paper" , authMiddle , getQuestionPapers);

router.get("/:questionPaperId" , authMiddle , getQuestionPaperById);

router.get("/:questionPaperId/questions" , authMiddle , getQuestionByPaperId)

export default router;