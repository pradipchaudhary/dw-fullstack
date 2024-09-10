import { Router } from "express";
import {
  createWebUserController,
  deleteSpecificUser,
  forgetPassword,
  loginUser,
  myProfile,
  readAllUser,
  readSpecificlUser,
  resetPassword,
  updatePassword,
  updateProfile,
  updateSpecificUser,
  verifyEmail,
} from "../controller/webUserController.js";
import { authorized } from "../midddleware/authorized.js";
import { isAuthenticated } from "../midddleware/isAuthenticated.js";

const webUserRouter = Router();

webUserRouter.route("/web-user").post(createWebUserController).get(readAllUser);

webUserRouter.route("/verify-email").patch(verifyEmail);

webUserRouter.route("/login").post(loginUser);

webUserRouter.route("/my-profile").get(isAuthenticated, myProfile);

webUserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);

webUserRouter.route("/update-password").patch(isAuthenticated, updatePassword);

webUserRouter.route("/forget-password").post(isAuthenticated, forgetPassword);

webUserRouter.route("/reset-password").patch(isAuthenticated, resetPassword);

webUserRouter
  .route("/web-user/:id")
  .get(readSpecificlUser)
  .patch(
    isAuthenticated,
    authorized(["admin", "superadmin"]),
    updateSpecificUser
  )
  .delete(isAuthenticated, authorized(["superadmin"]), deleteSpecificUser);

export default webUserRouter;
