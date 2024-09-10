import jwt from "jsonwebtoken";
import { secretKey } from "../../constant.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization.split(" ")[[1]];
    let user = await jwt.verify(tokenString, secretKey);
    req._id = user._id;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "token not valid",
    });
  }
};
