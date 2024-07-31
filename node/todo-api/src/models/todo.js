import mongoose from "mongoose";
import todoSchema from "../schema/todo.js";

export const Todo = mongoose.model("Todo", todoSchema);
