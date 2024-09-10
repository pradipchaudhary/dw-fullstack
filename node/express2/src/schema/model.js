import { model } from "mongoose";
import productSchema from "./productSchema.js";
import userSchema from "./userScheme.js";
import reviewSchema from "./reviewSchema.js";
import webUserSchema from "./webUserSchema.js";

export let Product = model("Product", productSchema);
export let User = model("User", userSchema);
export let Review = model("Review", reviewSchema);
export let WebUser = model("webUser", webUserSchema);