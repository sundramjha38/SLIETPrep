import express from  "express";

import { createQuestion} from "../controllers/question.controller.js";

import { authMiddle } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create" , authMiddle , createQuestion);

export default router ;
