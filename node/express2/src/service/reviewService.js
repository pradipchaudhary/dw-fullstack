import { Review } from "../schema/model.js";

export const createReviewService = async (req) => {
  return await Review.create(req.body);
};

export const readAllReviewService = async (req) => {
  return await Review.find({})
    .populate("user", "-password")
    .populate("product");
};
export const readSpecificReviewService = async (req) => {
  return await Review.findById(req.params.id, req.body)
    .populate("user", "-password")
    .populate("product");
};
export const updateReviewService = async (req) => {
  return await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
};
export const deleteReviewService = async (req) => {
  return await Review.findByIdAndDelete(req.params.id);
};
