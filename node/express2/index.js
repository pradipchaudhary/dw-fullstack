import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import reviewRoutes from "./src/routes/reviewRoutes.js";
import fileRouter from "./src/routes/fileRoutes.js";

config();
const app = express();

// Middleware
app.use(json());
app.use(cors());
app.use(express.static("./public"));

// MongoDB Connection
connectDB();

// Routes
app.get("/", (req, res) => {
    res.send("<h1> Heme route... </h1>");
});
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/file", fileRouter);

// listening on port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Get picture in public folder

// http://localhost:8000/picture.jpg
