import mongoose from "mongoose";

const mongoDb = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/todo");
    console.log("mongoDB connect!");
};

export default mongoDb;
