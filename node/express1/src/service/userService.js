import { User } from "../schema/model.js";

export const realAllUserService = async () => {
    return await User.find({});
};

export const createUserService = async (req) => {
    return await User.create(req.body);
};
