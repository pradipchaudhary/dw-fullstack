import { Router } from "express";
import { Book } from "../schema/model.js";
const bookRouter = Router();

bookRouter
    .route("/book")
    .post(async (req, res, next) => {
        const data = req.body;
        try {
            const result = await Book.create(data);
            res.status(200).json({
                success: true,
                message: "Book create successfuly!",
                result: result,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    })
    .get(async (req, res, next) => {
        try {
            const result = await Book.find({});
            res.status(200).json({
                success: true,
                message: "Read successfully!",
                result: result,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    });

bookRouter
    .route("/book/:id")
    // Create book
    .get(async (req, res, next) => {
        try {
            const result = await Book.findById(req.params.id);
            // console.log("result: ", result);
            res.status(200).json({
                success: true,
                message: "read succesfully!",
                result: result,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    })

    // Update book
    .patch(async (req, res, next) => {
        try {
            const result = await Book.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                }
            );
            console.log(result);
            res.status(200).json({
                success: true,
                message: "Update successfully!",
                result: result,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }

        // Delete book
    })

    // Delete book
    .delete(async (req, res, next) => {
        try {
            const result = await Book.findByIdAndDelete(req.params.id);
            res.status(200).json({
                success: true,
                message: "Delete successfull!",
                result: result,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    });

// export default
export default bookRouter;
