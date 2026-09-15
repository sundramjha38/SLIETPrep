import {Mistral} from "@mistralai/mistralai";
import dotenv from "dotenv";
dotenv.config();

const mistralClient = new Mistral({
    apiKey:process.env.MISTRAL_API_KEY
});

export default mistralClient;

