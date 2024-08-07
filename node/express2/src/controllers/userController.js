import expressAsyncHandler from "express-async-handler";
import { User } from "../schema/model.js";
import { sendEmail } from "../utils/sendmail.js";
import { user } from "../utils/constant.js";

// Get all user
export const getAllUser = expressAsyncHandler(async (req, res, next) => {
    const data = await User.find({});
    res.status(200).json({
        message: "Get all user.",
        data: data,
    });
});

// create user
export const createUser = expressAsyncHandler(async (req, res, next) => {
    const data = await User.create(req.body);

    await sendEmail({
        from: `dw17 projects <${user}>`,
        to: [req.body.email],
        subject: "Registration.",
        html: `<p>
            Hello,

            This is a test message from my sendmail test application. Please confirm receipt of this email.

            Thank you!

            Best regards,
            ${req.body.username}

        </p>`,
    });

    res.status(201).json({
        message: "User create successfully.",
        data: data,
    });
});

// get single user
export const getSingleUser = expressAsyncHandler(async (req, res, next) => {
    const data = await User.findById(req.params.id);
    res.status(200).json({
        message: "Get single user",
        data: data,
    });
});

// update user
export const updateUser = expressAsyncHandler(async (req, res, next) => {
    const data = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json({
        message: "Update successfully.",
        data: data,
    });
});

// delete user
export const deleteUser = expressAsyncHandler(async (req, res, next) => {
    const data = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: "Delete successfully.",
        data: data,
    });
});
