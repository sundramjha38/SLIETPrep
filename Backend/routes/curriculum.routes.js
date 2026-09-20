import express from "express";
import { authMiddle } from "../middlewares/auth.middleware.js";
import {createCurriculum  , getCurriculum , getMySubject} from "../controllers/curriculum.controller.js";
const router = express.Router();


router.post( "/create",authMiddle,createCurriculum);
router.get("/get" , authMiddle , getCurriculum);

router.get("/my/subjects" , authMiddle , getMySubject);

export default router;