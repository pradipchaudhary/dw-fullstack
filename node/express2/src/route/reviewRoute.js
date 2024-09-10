import { Router } from "express";
import {
  createReviewController,
  deleteReviewController,
  readAllReviewController,
  readSpecificReviewController,
  upadteReviewController,
} from "../controller/reviewController.js";
import reviewValidation from "../validation/reviewValidation.js";
import validation from "../midddleware/validation.js";

const ReviewRouter = Router();

ReviewRouter.route("/review")
  .post(validation(reviewValidation), createReviewController)
  .get(readAllReviewController);

ReviewRouter.route("/review/:id")
  .get(readSpecificReviewController)
  .patch(upadteReviewController)
  .delete(deleteReviewController);

export default ReviewRouter;
