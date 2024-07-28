import { Router } from "express";
import {
    createProductController,
    deleteProductController,
    readAllProductController,
    readSpecificProductController,
    updateProductController,
} from "../controller/productController.js";
const productRouter = Router();

productRouter
    .route("/product")
    .post(createProductController)
    .get(readAllProductController);

productRouter
    .route("/product/:id")
    // Get singe product
    .get(readSpecificProductController)
    // Update product
    .patch(updateProductController)
    // Delete product
    .delete(deleteProductController);
export default productRouter;

/**
 *
 * Produc.create(req.body)
 * Product.find({})
 * Product.findById(req.params.id)
 * Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
 * Product.findByIdAndDelete(req.params.id)
 *
 * * Note:- alt+shift+p => unuse import file remove
 *
 */
