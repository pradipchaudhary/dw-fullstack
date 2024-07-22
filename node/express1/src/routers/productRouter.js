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

productRouter
    .route("/product/:id")
    // Get singe product
    .get(async (req, res, next) => {
        try {
            const result = await Product.findById(req.params.id);
            res.status(200).json({
                success: true,
                message: "read single product!",
                result: result,
            });
        } catch (error) {
            res.status(400).json({
                success: true,
                message: error.message,
            });
        }
    })
    // Update product
    .patch(async (req, res, next) => {
        try {
            const result = await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.status(200).json({
                success: true,
                message: "Update successfully!",
                resut: result,
            });
        } catch (error) {
            res.status(200).json({
                success: false,
                message: error.message,
            });
        }
    })
    // Delete product
    .delete(async (req, res, next) => {
        try {
            const result = await Product.findByIdAndDelete(req.params.id);
            res.status(200).json({
                success: true,
                message: "Delete successfully!",
                result: result,
            });
        } catch (error) {
            res.status(200).json({
                success: false,
                message: error.message,
            });
        }
    });
export default productRouter;
