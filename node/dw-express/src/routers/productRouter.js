import { Router } from "express";

const productRouter = Router();

productRouter.route("/product").post((req, res, next) => {
    console.log("hello.. this is the product post router ");
    res.send("Hello");
});

export default productRouter;
