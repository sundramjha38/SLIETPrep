import express from "express";
import { authMiddle } from "../middlewares/auth.middleware.js";
import {createCurriculum } from "../controllers/curriculum.controller.js";
const router = express.Router();


router.post(
    "/create",
    authMiddle,
    createCurriculum
);

export default router;