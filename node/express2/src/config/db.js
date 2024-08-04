import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/dw17Project");
        console.log("Database connected!");
    } catch (error) {
        console.log("Database connection faild:", error.mongoose);
        process.exit(1);
    }
};

export default connectDB;
