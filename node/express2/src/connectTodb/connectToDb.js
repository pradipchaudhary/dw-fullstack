import mongoose from "mongoose";
import { dbUrl } from "../../constant.js";

const connectToMongdoDb = async () => {
    try {
        await mongoose.connect(`${dbUrl}`);
        console.log(`MongoDB connection successfully.`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectToMongdoDb;
