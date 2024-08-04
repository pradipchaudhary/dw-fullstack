import express, { json } from "express";
import connectDB from "./src/config/db.js";
const app = express();
const PORT = 8000;

// Middleware
app.use(json());

// MongoDB Connection
connectDB();

// Routes
app.use("/api/user", userRoutes);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
