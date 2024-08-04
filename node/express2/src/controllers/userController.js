import { User } from "../schema/model.js";

// Get all user
export const getAllUser = async (req, res, next) => {
    try {
        const data = await User.find({});
        res.status(200).json({
            message: "Get all user.",
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

// create user
export const createUser = async (req, res, next) => {
    try {
        const data = await User.create(req.body);
        res.status(200).json({
            message: "User create successfully.",
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

// get single user
export const getSingleUser = async (req, res, next) => {
    try {
        const data = await User.findById(req.params.id);
        res.status(200).json({
            message: "Get single user",
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

// update user
export const updateUser = async (req, res, next) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json({
            message: "Update successfully.",
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

// delete user
export const deleteUser = async (req, res, next) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Delete successfully.",
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
