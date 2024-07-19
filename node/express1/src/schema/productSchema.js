// name, description, price, quantity

import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true],
    },
    description: {
        type: String,
        require: [true],
    },
    price: {
        type: Number,
        require: [ture],
    },
    quantity: {
        type: Number,
    },
});

export default productSchema;
