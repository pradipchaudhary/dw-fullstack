import { Router } from "express";
import { Book, User } from "../schema/model.js";
import {
    createUserController,
    deleteSpecificUserController,
    readAllUserController,
    readSpecificUserController,
    updateSpecificUserController,
} from "../controller/userController.js";
const userRouter = Router();

userRouter.route("/user").post(createUserController).get(readAllUserController);

userRouter
    .route("/user/:id")
    .get(readSpecificUserController)
    // Update user
    .patch(updateSpecificUserController)
    // delete user
    .delete(deleteSpecificUserController);
// export user router
export default userRouter;
