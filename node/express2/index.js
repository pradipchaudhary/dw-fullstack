import express, { json } from "express";
import connectDB from "./src/config/db.js";
import { config } from "dotenv";
import userRoutes from "./src/routes/userRoutes.js";

config();
const app = express();

// Middleware
app.use(json());

// MongoDB Connection
connectDB();

// Routes
app.use("/api/user", userRoutes);

// listening on port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
