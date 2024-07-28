import expressAsyncHandler from "express-async-handler";
import { User } from "../schema/model.js";
import {
    createUserService,
    realAllUserService,
} from "../service/userService.js";

export const createUserController = expressAsyncHandler(
    async (req, res, next) => {
        res.send("User Controller");
        const result = await createUserService(req);
        console.log(result);
        res.status(200).json({
            success: true,
            message: "User create successfuly!",
            result: result,
        });
    }
);

export const readAllUserController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await realAllUserService();
        res.status(200).json({
            success: true,
            message: "Read all User!",
            result: result,
        });
    }
);

export const readSpecificUserController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Read specific user!",
            result: result,
        });
    }
);

export const updateSpecificUserController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json({
            success: true,
            message: "Update successfully",
            result: result,
        });
    }
);

export const deleteSpecificUserController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Delete successfully!",
            result: result,
        });
    }
);
