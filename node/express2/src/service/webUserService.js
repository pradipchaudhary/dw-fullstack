import { WebUser } from "../schema/model.js";


export const createWebUserService = async (req) => {
  return await  WebUser.create(req.body);
};

export const readAllWebUserService = async (req) => {
  return await WebUser.find({});
};
export const readSpecificWebUserService = async (req) => {
  return await WebUser.findById(req.params.id, req.body);
};
export const updateWebUserService = async (req) => {
  return await WebUser.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
};
export const deleteWebUserService = async (req) => {
  return await WebUser.findByIdAndDelete(req.params.id);
};
