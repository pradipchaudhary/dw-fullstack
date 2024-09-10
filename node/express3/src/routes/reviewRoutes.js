import { Router } from "express";
import {
    createReview,
    deleteReview,
    getAllReview,
    getSingleReview,
    updateReview,
} from "../controllers/reviewController.js";
const reviewRoutes = Router();

reviewRoutes.route("/").post(createReview).get(getAllReview);
reviewRoutes
    .route("/:id")
    .get(getSingleReview)
    .patch(updateReview)
    .delete(deleteReview);

export default reviewRoutes;
