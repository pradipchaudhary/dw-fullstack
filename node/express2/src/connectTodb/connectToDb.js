import mongoose from "mongoose";
import { dbUrl } from "../../constant.js";

// const connectToMongdoDb = () => {
//   mongoose.connect("mongodb://localhost:27017/dw17project");
// };
const connectToMongdoDb = async () => {
  try {
    await mongoose.connect(`${dbUrl}`);
    console.log(`application is connected to successfully at port ${dbUrl}`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToMongdoDb;
