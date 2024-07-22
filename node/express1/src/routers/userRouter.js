import { Router } from "express";
import { Book, User } from "../schema/model.js";
const userRouter = Router();

userRouter
    .route("/user")
    .post(async (req, res, next) => {
        const data = req.body;

        try {
            const result = await User.create(data);
            res.status(200).json({
                success: true,
                message: "User create successfully!",
                result: result,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }

        //
    })
    .get(async (req, res, next) => {
        try {
            const result = await User.find({});
            res.status(200).json({
                success: true,
                message: "Read all users!",
                resut: result,
            });
        } catch (error) {
            res.status(200).json({
                success: false,
                message: error.message,
            });
        }
    });

userRouter
    .route("/user/:id")
    .get(async (req, res, next) => {
        try {
            const result = await User.findById(req.params.id);
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
    })

    // Update user
    .patch(async (req, res, next) => {
        try {
            const result = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.status(200).json({
                success: true,
                message: "Update successfully!",
                result: result,
            });
        } catch (error) {
            res.status(200).json({
                success: false,
                message: error.message,
            });
        }
    })

    // delete user
    .delete(async (req, res, next) => {
        try {
            const result = await User.findByIdAndDelete(req.params.id);
            res.status(200).json({
                success: true,
                message: "Delete successfullly!",
                result: result,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    });
// export user router
export default userRouter;
