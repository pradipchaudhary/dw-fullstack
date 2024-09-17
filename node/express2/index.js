import cors from "cors";
import express, { json } from "express";
import connectToMongdoDb from "./src/connectTodb/connectToDb.js";
import { errorMiddleware } from "./src/midddleware/errorMiddleware.js";
import productRouter from "./src/route/productRoute.js";
import ReviewRouter from "./src/route/reviewRoute.js";
import UserRouter from "./src/route/userRoute.js";
import fileRouter from "./src/route/fileRouter.js";
import webUserRouter from "./src/route/webUserRoute.js";
import newRouter from "./src/route/eventRoute.js";
import { port } from "./constant.js";

const expressApp = express();

expressApp.use(express.static("./public")); //all file are placed in static folder
expressApp.use(json()); //first
expressApp.use(cors()); //first

// config();
// console.log(process.env.FULL_NAME);
// console.log(process.env.AGE);

expressApp.get("/", (req, res) => {
    res.send("Home Page route...");
});

expressApp.use(UserRouter);
expressApp.use(productRouter);
expressApp.use(ReviewRouter);
expressApp.use(fileRouter);
expressApp.use("/admin", webUserRouter);
expressApp.use(newRouter);

expressApp.use(errorMiddleware);

expressApp.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
    connectToMongdoDb();
});
