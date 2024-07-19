// import express module
import express from "express";
import productRouter from "./src/routers/productRouter.js";
import connectTodb from "./src/connectTodb/connectTodb.js";
const app = express();

// Define a port number
const port = 8000;

app.use(productRouter);

// Make the app listen on the defined port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    connectTodb();
});
