import { config } from "dotenv";

config();

export const pass = process.env.PASS;
export const user = process.env.USER;
export const secretKey = process.env.SECRET_KEY;

export const dbUrl = `mongodb://localhost:27017/express2`;
