import { Router } from "express";
import {
    createUser,
    deleteUser,
    getAllUser,
    getSingleUser,
    updateUser,
} from "../controllers/userController.js";
const userRoutes = Router();

userRoutes.route("/").post(createUser).get(getAllUser);
userRoutes
    .route("/:id")
    .get(getSingleUser)
    .patch(updateUser)
    .delete(deleteUser);

export default userRoutes;
