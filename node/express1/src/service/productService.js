import { Product } from "../schema/model.js";

export const createProductService = async (req) => {
    return await Product.create(req.body);
};

export const readAllProductService = async () => {
    return await Product.find({});
};

export const readSpecificProductService = async (req) => {
    return await Product.findById(req.params.id);
};
export const updateSpecificProductService = async (req) => {
    return await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
};
export const deleteSpecificProductService = async (req) => {
    return await Product.findByIdAndDelete(req.params.id);
};
