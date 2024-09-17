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
        console.log(result);

        const info = {
            _id: result._id,
        };

        const expireDate = {
            expiresIn: "5d",
        };

        let token = jwt.sign(info, secretKey, expireDate);

        // Send verification email
        const verificationUrl = `http://localhost:5173/admin/verify-email?token=${token}`;

        await sendEmail({
            from: `dw17 projects <${data.user}>`,
            to: [data.email],
            subject: "Admin Verification",
            html: `<div>
              <p>Hello,</p>
  
              <p>This is a Admin verification message from my sendmail Express2 application. Please confirm receipt of this email.</p>

              <p>
                <a href=${verificationUrl}>
                ${verificationUrl}
                </a>
              </p>
  
              <p>Thank you!</p>
  
              <p>Best regards,</p>
              <p>${data.username}</p>
  
          </div>`,
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
        const { email, password } = req.body;

        // Check if the user exists
        const user = await WebUser.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found!",
            });
        }

        // Check if the user's email is verified
        if (!user.isVerifiedEmail) {
            return res.status(403).json({
                success: false,
                message: "Please verify your email before logging in.",
            });
        }

        // Validate the password
        const isValidPass = await bcrypt.compare(password, user.password);
        if (!isValidPass) {
            return res.status(401).json({
                success: false,
                message:
                    "Invalid credentials. Please check your email and password.",
            });
        }

        // Create a JWT token with user information
        const tokenPayload = { _id: user._id };
        const tokenOptions = { expiresIn: "365d" };
        const token = jwt.sign(tokenPayload, secretKey, tokenOptions);

        // Respond with success message and token
        return res.status(200).json({
            success: true,
            message: "User logged in successfully.",
            token,
        });
    } catch (error) {
        // Error handling
        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "An error occurred while processing the login request.",
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
                message:
                    "link has been sent to your email to reset your password",
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
