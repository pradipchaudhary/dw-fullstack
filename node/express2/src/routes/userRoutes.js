import { Router } from "express";
import {
    createUser,
    deleteUser,
    getAllUser,
    getSingleUser,
    updateUser,
} from "../controllers/userController.js";
import validation from "../middleware/validation.js";
import userValidation from "../validation/userValidation.js";
const userRoutes = Router();

userRoutes
    .route("/")
    .post(validation(userValidation), createUser)
    .get(getAllUser);
userRoutes
    .route("/:id")
    .get(getSingleUser)
    .patch(updateUser)
    .delete(deleteUser);

export default userRoutes;
