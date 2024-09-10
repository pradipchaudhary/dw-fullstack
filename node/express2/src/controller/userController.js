import expressAsyncHandler from "express-async-handler";
import {
    createUserService,
    deleteUserService,
    readAllUserService,
    readSpecificUserService,
    updateUserService,
} from "../service/userService.js";
import { sendEmail } from "../utils/sendMail.js";

export let createUserController = expressAsyncHandler(
    async (req, res, next) => {
        let result = await createUserService(req);

        await sendEmail({
            from: "yeeee <iamyounz@gmail.com>",
            to: [req.body.email],
            subject: "resigration",
            html: `<h1>you have successfully register in our system</h1>`,
        });

        res.status(200).json({
            success: true,
            message: "User created succesfully ",
            result: result,
        });
    }
);

export let readAllUserController = expressAsyncHandler(
    async (req, res, next) => {
        let result = await readAllUserService(req);
        res.status(200).json({
            success: true,
            message: "User read successfully",
            result: result,
        });
    }
);
export let readSpecificUserController = expressAsyncHandler(
    async (req, res, next) => {
        let result = await readSpecificUserService(req);
        res.status(200).json({
            success: true,
            message: "User get successfuly",
            result: result,
        });
    }
);
export let upadteUserController = expressAsyncHandler(
    async (req, res, next) => {
        let result = await updateUserService(req);
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            result: result,
        });
    }
);
export let deleteUserController = expressAsyncHandler(
    async (req, res, next) => {
        let result = await deleteUserService(req);
        res.status(200).json({
            success: true,
            message: "User Deleted Succesfully",
            result: result,
        });
    }
);
