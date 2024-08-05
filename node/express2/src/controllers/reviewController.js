import expressAsyncHandler from "express-async-handler";
import { Review } from "../schema/model.js";

// get all review
export const getAllReview = expressAsyncHandler(async (req, res, next) => {
    const data = await Review.find({}).populate(
        "productId author",
        "-__id -price -quantity -description -__v -password -gender"
    );
    res.status(200).json({
        success: true,
        message: "Get all review.",
        data: data,
    });
});

// Create review
export const createReview = expressAsyncHandler(async (req, res, next) => {
    const data = await Review.create(req.body);
    res.status(200).json({
        success: true,
        message: "Review created successfully.",
        data: data,
    });
});

// get single review
export const getSingleReview = expressAsyncHandler(async (req, res, next) => {
    const data = await Review.findByIdAndUpdate(req.params.id).populate(
        "productId",
        "-__id -price -quantity -description -__v"
    );
    res.status(200).json({
        success: true,
        message: "Get single review.",
        data: data,
    });
});

// update Review
export const updateReview = expressAsyncHandler(async (req, res, next) => {
    const data = await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json({
        success: true,
        message: "Review update successfully.",
        data: data,
    });
});

// delete Review
export const deleteReview = expressAsyncHandler(async (req, res, next) => {
    const data = await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success: true,
        message: "Review delete successfully.",
        data: data,
    });
});
