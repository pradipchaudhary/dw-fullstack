// import express module
import express, { json } from "express";
import connectTodb from "./src/connectTodb/connectTodb.js";
import productRouter from "./src/routers/productRouter.js";
import bookRouter from "./src/routers/bookRouter.js";
import userRouter from "./src/routers/userRouter.js";
import { errorMiddleware } from "./src/middleware/errorMiddleware.js";
const app = express();

app.use(json());

// Define a port number
const port = 8000;

// app routers middleware
app.use(productRouter);
app.use(bookRouter);
app.use(userRouter);
// Make the app listen on the defined port

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    connectTodb();
});

// error middleware is always is  at last ( must be at last)
app.use(errorMiddleware);
