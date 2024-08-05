import express, { json } from "express";
import connectDB from "./src/config/db.js";
import { config } from "dotenv";
import userRoutes from "./src/routes/userRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import reviewRoutes from "./src/routes/reviewRoutes.js";
import cors from "cors";

config();
const app = express();

// Middleware
app.use(json());
app.use(cors());

// MongoDB Connection
connectDB();

// Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/review", reviewRoutes);

// listening on port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
