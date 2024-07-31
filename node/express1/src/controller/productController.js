import expressAsyncHandler from "express-async-handler";
import { Product } from "../schema/model.js";
import {
    createProductService,
    deleteSpecificProductService,
    readAllProductService,
    readSpecificProductService,
    updateSpecificProductService,
} from "../service/productService.js";

export const createProductController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await createProductService(req);
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Product create successfully!",
            result: result,
        });
    }
);

export const readAllProductController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await readAllProductService(req);
        res.status(200).json({
            success: true,
            message: "Read all Product !",
            result: result,
        });
    }
);
export const readSpecificProductController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await readSpecificProductService(req);
        res.status(200).json({
            success: true,
            message: "read single product!",
            result: result,
        });
    }
);
export const updateProductController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await updateSpecificProductService(req);
        res.status(200).json({
            success: true,
            message: "Update successfully!",
            resut: result,
        });
    }
);
export const deleteProductController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await deleteSpecificProductService(req);
        res.status(200).json({
            success: true,
            message: "Delete successfully!",
            result: result,
        });
    }
);
