import cors from "cors";
import express from "express";
import connectDB from "./config/database.js";
import authRouter from "./routes/auth.routes.js";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import profileRouter from "./routes/profile.routes.js";
import curriculumRouter from "./routes/curriculum.routes.js";
import QuestionPaperRouter from "./routes/questionPaper.routes.js";
import QuestionRouter from "./routes/question.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());
connectDB();

app.get("/", (req, res) => {
    res.send("College Question Paper API is running");
});

app.use("/api/auth", authRouter);
app.use("/api/profile" , profileRouter); 
app.use("/api/curriculum",curriculumRouter);
app.use("/api/question-papers" , QuestionPaperRouter);
app.use("/api/question" , QuestionRouter) ; 



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});