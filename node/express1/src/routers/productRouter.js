import { Router } from "express";
const productRouter = Router();
import { Product } from "../schema/model.js";

productRouter.route("/product").post(async (req, res, next) => {
    const data = req.body;
    try {
        const result = await Product.create(data);
        res.status(200).json({
            success: true,
            message: "Product created successfuly.",
            result: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

export default productRouter;
