import mongoose from "mongoose";
import userSchema from "./userSchema.js";
import productSchema from "./productSchema.js";
import reviewSchema from "./reviewSchema.js";

export const User = mongoose.model("User", userSchema);
export const Product = mongoose.model("Product", productSchema);
export const Review = mongoose.model("Review", reviewSchema);
