import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product ID is required."],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Author name is required."],
        trim: true,
    },
    rating: {
        type: Number,
        required: [true, "Rating is required."],
        min: [1, "Rating must be at least 1."],
        max: [5, "Rating cannot be more than 5."],
    },
    description: {
        type: String,
        required: [true, "description is required."],
    },
});

reviewSchema.virtual("id").get(() => {
    return this._id;
});

// Ensure virtual fields are serialized in JSON output and exclude _id
reviewSchema.set("toJSON", {
    virtuals: true,
    transform: function (doc, ret, options) {
        delete ret._id;
        return ret;
    },
});

export default reviewSchema;
