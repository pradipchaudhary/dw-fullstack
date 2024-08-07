import { Router } from "express";
const fileRouter = Router();

// Single file route
fileRouter.route("/single").post(
    (req, res, next) => {
        console.log("File uploaded successfully.");
        req.name = "Pradip Chaudhary";
        req.age = 40;
        next();
        // console.log(req);
    },
    (req, res, next) => {
        console.log(req);
    }
);

// multiple file route
fileRouter.route("/multiple").post((req, res, next) => {
    console.log("Multiple files uploaded successfully.");
});

export default fileRouter;
