import { Router } from "express";
import {
    createTodo,
    deleteTodo,
    getAllTodo,
    getTodo,
    updateTodo,
} from "../controller/todoController.js";
const todoRouter = Router();

// todo router

todoRouter.route("/").get(getAllTodo).post(createTodo);

todoRouter.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

export default todoRouter;
