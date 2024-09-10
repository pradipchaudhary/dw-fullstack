import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readAllUserController,
  readSpecificUserController,
  upadteUserController,
} from "../controller/userController.js";
import validation from "../midddleware/validation.js";
import userValidation from "../validation/userValidation.js";

const UserRouter = Router();

UserRouter
.route("/user")
.post(validation(userValidation),createUserController)
.get(readAllUserController);

UserRouter.route("/user/:id")
  .get(readSpecificUserController)
  .patch(upadteUserController)
  .delete(deleteUserController);

export default UserRouter;
