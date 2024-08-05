import { Router } from "express";
import {
    createProduct,
    deleteProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
} from "../controllers/productController.js";
import validation from "../middleware/validation.js";
import productValidation from "../validation/productValidation.js";
const productRoutes = Router();

productRoutes
    .route("/")
    .post(validation(productValidation), createProduct)
    .get(getAllProduct);

productRoutes
    .route("/:id")
    .get(getSingleProduct)
    .patch(updateProduct)
    .delete(deleteProduct);

export default productRoutes;
