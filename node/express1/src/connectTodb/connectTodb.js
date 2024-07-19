import mongoose from "mongoose";

// database connect function
const connectTodb = () => {
    mongoose.connect("mongodb://localhost:27017");
    console.log("Database connected!");
};

// export
export default connectTodb;
