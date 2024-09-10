import { User } from "../schema/model.js";

export const createUserService = async (req) => {
  return await User.create(req.body);
};

export const readAllUserService = async (req) => {
  return await User.find({})
};
export const readSpecificUserService = async (req) => {
  return await User.findById(req.params.id, req.body);
};
export const updateUserService = async (req) => {
  return await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
};
export const deleteUserService = async (req) => {
  return await User.findByIdAndDelete(req.params.id);
};
