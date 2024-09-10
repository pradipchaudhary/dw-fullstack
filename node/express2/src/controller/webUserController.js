import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secretKey } from "../../constant.js";
import { WebUser } from "../schema/model.js";
import { sendEmail } from "../utils/sendMail.js";

export let createWebUserController = async (req, res, next) => {
  try {
    let data = req.body;
    let hasedPass = await bcrypt.hash(data.password, 10);

    data = {
      ...data,
      isVerifiedEmail: false,
      password: hasedPass,
    };
    let result = await WebUser.create(data);

    const info = {
      _id: result._id,
    };

    const expireDate = {
      expiresIn: "5d",
    };

    let token = jwt.sign(info, secretKey, expireDate);

    await sendEmail({
      from: "yeeee <yangjilama13@gmail.com>",
      to: [data.email],
      subject: "resigration",
      html: `<h1>you have successfully register in our system</h1>
      <a href="http://localhost:3000/verify?token=${token}">
        http://localhost:3000/verify?token=${token}
        </a>`,
    });

    res.status(201).json({
      success: true,
      message: "webUser created succesfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let verifyEmail = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization.split(" ")[1];
    console.log(tokenString);
    //verify token
    let infoObj = jwt.verify(tokenString, secretKey);
    let userId = infoObj._id;

    let result = await WebUser.findByIdAndUpdate(
      userId,
      {
        isVerifiedEmail: true,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      message: "user verfied successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let loginUser = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let user = await WebUser.findOne({ email: email });
    // console.log(user)

    if (user) {
      if (user.isVerifiedEmail) {
        let isValidPass = await bcrypt.compare(password, user.password);
        if (isValidPass) {
          const info = {
            _id: user._id,
          };

          const expireDate = {
            expiresIn: "365d",
          };

          let token = jwt.sign(info, secretKey, expireDate);
          res.status(200).json({
            success: true,
            message: "user login successfully",
            data: token,
          });
        } else {
          let error = new Error("credential not found");
          throw error;
        }
      }
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let myProfile = async (req, res, next) => {
  try {
    let _id = req._id;
    let result = await WebUser.findById(_id);

    res.status(200).json({
      success: true,
      message: "profile read succesfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "unable to read profile",
    });
  }
};

export let updateProfile = async (req, res, next) => {
  try {
    let _id = req._id;
    let data = req.body;

    delete data.email;
    delete data.password;
    let result = await WebUser.findByIdAndUpdate(_id, data, { new: true });

    res.status(201).json({
      success: true,
      message: "profile upadted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updatePassword = async (req, res, next) => {
  try {
    let _id = req._id;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;

    let data = await WebUser.findById(_id);
    let hasedPass = data.password;

    let isValidPass = await bcrypt.compare(oldPassword, hasedPass);
    if (isValidPass) {
      let newHasedPass = await bcrypt.hash(newPassword, 10);
      let result = await WebUser.findByIdAndUpdate(
        _id,
        {
          password: newHasedPass,
        },
        { new: true }
      );

      res.status(201).json({
        success: true,
        message: "password updated successfully",
        data: result,
      });
    } else {
      let error = new Error("credential doesn't match");
      throw error;
    }
  } catch (error) {
    res.json({
      success: true,
      message: error.message,
    });
  }
};

export const readAllUser = async (req, res, next) => {
  try {
    let result = await WebUser.find();
    res.status(200).json({
      success: true,
      message: "read user succesfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificlUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    let result = await WebUser.findById(id);
    res.status(200).json({
      success: true,
      message: "read user succesfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateSpecificUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    let data = req.body;
    delete data.email;
    delete data.password;

    let result = await WebUser.findByIdAndUpdate(id, data, { new: true });

    res.status(201).json({
      success: true,
      message: "User update success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteSpecificUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    let result = await WebUser.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "WebUser Deleted Succesfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const forgetPassword = async (req, res, next) => {
  try {
    let email = req.body.email;
    let result = await WebUser.findOne({ email: email });

    if (result) {
      const info = {
        id: result._id,
      };

      const expireDate = {
        expiresIn: "5d",
      };

      let token = jwt.sign(info, secretKey, expireDate);

      await sendEmail({
        from: "yeeee <yangjilama13@gmail.com>",
        to: email,
        subject: "reset password",
        html: `<h1>please click given link to reset password</h1>
        <a href="http://localhost:3000/reset-password?token=${token}">
          http://localhost:3000/reset-password?token=${token}
          </a>`,
      });

      res.status(200).json({
        success: true,
        message: "link has been sent to your email to reset your password",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "email does not exist",
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    let hasedPass = await bcrypt.hash(req.body.password, 10);

    let result = await WebUser.findByIdAndUpdate(
      req._id,
      { password: hasedPass },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      success: true,
      message: "reset password success.",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};
