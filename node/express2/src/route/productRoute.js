import { Router } from "express";
import {
    createProductController,
    deleteProductController,
    readAllProductController,
    readSpecificProductController,
    upadteProductController,
} from "../controller/productController.js";
import validation from "../midddleware/validation.js";
import productValidation from "../validation/productValidation.js";

const productRouter = Router();

productRouter
    .route("/product")
    .post(validation(productValidation), createProductController)
    .get(readAllProductController);

productRouter
    .route("/product/:id")
    .get(readSpecificProductController)
    .patch(upadteProductController)
    .delete(deleteProductController);

export default productRouter;
