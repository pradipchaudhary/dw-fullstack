import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required."],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Product price is required."],
        min: [0, "Product price cannot be negative"],
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    description: {
        type: String,
        required: true,
    },
});

// Add a virtual property for customId
productSchema.virtual("id").get(function () {
    return this._id;
});

// Ensure virtual fields are included in JSON and Object output
productSchema.set("toJSON", {
    virtuals: true, // duplicate _id to id
    transfor: function (doc, ret, option) {
        // remove schema _id
        delete ret._id;
        return ret;
    },
});

export default productSchema;
