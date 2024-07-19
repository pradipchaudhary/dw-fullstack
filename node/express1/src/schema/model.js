import mongoose from "mongoose";
import productSchema from "./productSchema";
import userSchema from "./userSchema";
import bookSchema from "./bookSchema";

export const Product = mongoose.model("Product", productSchema);
export const User = mongoose.model("User", userSchema);
export const Book = mongoose.model("Book", bookSchema);
