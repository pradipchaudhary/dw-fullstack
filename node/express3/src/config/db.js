import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected!");
    } catch (error) {
        console.log("Database connection faild:", error.mongoose);
        process.exit(1);
    }
};

export default connectDB;
