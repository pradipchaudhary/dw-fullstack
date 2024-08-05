import expressAsyncHandler from "express-async-handler";
import { Product } from "../schema/model.js";

// get all product
export const getAllProduct = expressAsyncHandler(async (req, res, next) => {
    const data = await Product.find({});
    res.status(200).json({
        message: "Get all Product.",
        data: data,
    });
});

// create product
export const createProduct = expressAsyncHandler(async (req, res, next) => {
    const data = await Product.create(req.body);
    res.status(200).json({
        message: "Product created successfully.",
        data: data,
    });
});

// Get single product
export const getSingleProduct = expressAsyncHandler(async (req, res, next) => {
    const data = await Product.findById(req.params.id);
    res.status(200).json({
        message: "Get single product.",
        data: data,
    });
});

// update product
export const updateProduct = expressAsyncHandler(async (req, res, next) => {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json({
        success: true,
        message: "Product update successfully.",
        data: data,
    });
});

// delete product
export const deleteProduct = expressAsyncHandler(async (req, res, next) => {
    const data = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success: true,
        message: "Product delete successfully.",
        data: data,
    });
});
