import { Router } from "express";
const todoRouter = Router();

todoRouter.route("/").get()

export default todoRouter;