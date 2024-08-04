import { config } from "dotenv";
import express, { json } from "express";
import connectDB from "./src/config/db.js";

config();

const app = express();
const PORT = process.env.PORT || 8000;

// Connect Database
connectDB();

// Middleware
app.use(json());

// Routes
// Error Handling Middleware
// listen on port :
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}.`);
});
