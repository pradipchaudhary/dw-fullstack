import { Book } from "../schema/model.js";

// Book Service
export const createBookService = async (req) => {
    return await Book.create(req.body);
};

export const readAllBookService = async () => {
    return await Book.find({});
};

export const readSpecificBookService = async (req) => {
    return await Book.findById(req.params.id);
};
export const updateSpecificBookService = async (req) => {
    return await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
};

export const deleteSpecificBookService = async (req) => {
    return await Book.findByIdAndDelete(req.params.id);
};
