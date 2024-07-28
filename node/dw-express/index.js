import express from "express";
import productRouter from "./src/routers/productRouter.js";
const app = express();
const PORT = 8001;

app.get("/", (req, res) => {
    console.log("hello this is the root page ");
    res.json({
        msg: "This is the home page",
    });
});

app.use("/products", productRouter);

// Listen
app.listen(PORT, () => {
    console.log(`Surver running on http://localhost:${PORT}`);
});
