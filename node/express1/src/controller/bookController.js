import expressAsyncHandler from "express-async-handler";
import {
    createBookService,
    deleteSpecificBookService,
    readAllBookService,
    readSpecificBookService,
    updateSpecificBookService,
} from "../service/bookService.js";

// Books Controller
export const createBookController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await readAllBookService(req);
        res.status(200).json({
            success: true,
            message: "Book create successfuly!",
            result: result,
        });
    }
);

// Read all book
export const readAllBookController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await createBookService();
        res.status(200).json({
            success: true,
            message: "Read successfully!",
            result: result,
        });
    }
);

// read specific book
export const readSpecificBookController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await readSpecificBookService(req);
        // console.log("result: ", result);
        res.status(200).json({
            success: true,
            message: "read succesfully!",
            result: result,
        });
    }
);

// update specific book controller
export const updateSpecificBookController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await updateSpecificBookService(req);
        res.status(200).json({
            success: true,
            message: "Update successfully!",
            result: result,
        });
    }
);

// delete specific book controller
export const deleteSpecificBookController = expressAsyncHandler(
    async (req, res, next) => {
        const result = await deleteSpecificBookService(req);
        res.status(200).json({
            success: true,
            message: "Delete successfull!",
            result: result,
        });
    }
);
