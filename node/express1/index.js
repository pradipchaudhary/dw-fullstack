// import express module
import express, { json } from "express";
import connectTodb from "./src/connectTodb/connectTodb.js";
import productRouter from "./src/routers/productRouter.js";
import bookRouter from "./src/routers/bookRouter.js";
import userRouter from "./src/routers/userRouter.js";
const app = express();

app.use(json());

// Define a port number
const port = 8000;

app.use(productRouter);

// book route
app.use(bookRouter);
app.use(userRouter);
// Make the app listen on the defined port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    connectTodb();
});
