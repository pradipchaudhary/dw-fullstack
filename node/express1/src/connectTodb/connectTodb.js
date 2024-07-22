import mongoose from "mongoose";

// database connect function
const connectTodb = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/dw-fullstack");
    console.log("Database connected!");
};

// export
export default connectTodb;
