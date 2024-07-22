import mongoose from "mongoose";
import productSchema from "./productSchema.js";
import bookSchema from "./bookSchema.js";
import userSchema from "./userSchema.js";

export const Product = mongoose.model("Product", productSchema);
export const Book = mongoose.model("Book", bookSchema);
export const User = mongoose.model("User", userSchema);
