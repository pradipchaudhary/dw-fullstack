import expressAsyncHandler from "express-async-handler";
import {
  createReviewService,
  deleteReviewService,
  readAllReviewService,
  readSpecificReviewService,
  updateReviewService,
} from "../service/reviewService.js";

export let createReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await createReviewService(req);

    res.status(200).json({
      success: true,
      message: "succesfully created post",
      result: result,
    });
  }
);

export let readAllReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await readAllReviewService(req);
    res.status(200).json({
      success: true,
      message: "Review read successfully",
      result: result,
    });
  }
);
export let readSpecificReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await readSpecificReviewService(req);
    res.status(200).json({
      success: true,
      message: "Review get successfuly",
      result: result,
    });
  }
);
export let upadteReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await updateReviewService(req);
    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      result: result,
    });
  }
);
export let deleteReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await deleteReviewService(req);
    res.status(200).json({
      success: true,
      message: "Review Deleted Succesfully",
      result: result,
    });
  }
);
