import { Router } from "express";
import upload from "../middleware/upload.js";
import sharp from "sharp";
import fs from "fs";
import validateAndProcessImage from "../middleware/imageValidationMiddleware.js";
const fileRouter = Router();

/**
 *
 * Post Single File handling
 * -> pass file
 * -> store in public(static) folder
 * -> send link of the file to the res
 *
 * # Multiple file handler
 * -> it stores files coming from myFile to the public
 * -> form postman always send file at myFile field
 * -> add files information to req (req.files)
 *
 * *Note:
 * upload.single("myFile")
 *  - it stores file coming in myFile to the public
 *  - form postman always asend file at myFile field
 *
 */

// Single file route
fileRouter
    .route("/single")
    .post(
        upload.single("myFile"),
        validateAndProcessImage,
        (req, res, next) => {
            const link = `http://localhost:8000/${req.file.filename}`;
            res.json({
                success: true,
                menubar: `${req.file.originalname} uploaded successfully.`,
                date: link,
            });
        }
    );

// multiple file route
fileRouter.route("/multiple").post(
    upload.array("myFile"),
    async (req, res, next) => {
        try {
            const maxHeight = 500;
            const maxWidth = 500;

            // Iterate over each uploaded file
            for (const file of req.files) {
                const filePath = file.path;

                // Process the image file with sharp to get metadata
                const metadata = await sharp(filePath).metadata();

                if (metadata.width > maxWidth || metadata.height > maxHeight) {
                    // If dimensions are not valid, delete the file
                    fs.unlinkSync(filePath);
                    return res
                        .status(400)
                        .send(
                            `Image dimensions must be less than ${maxWidth}x${maxHeight} pixels. File: ${file.originalname} is ${metadata.width}x${metadata.height} pixels.`
                        );
                }

                // Optionally, perform additional processing like resizing, compression, etc.
                // await sharp(filePath).resize(maxWidth, maxHeight).toFile(`resized-${file.filename}`);
            }

            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            console.error("Error processing images:", error);
            res.status(500).send("Error processing images");
        }
    },
    (req, res, next) => {
        console.log("Hello");
        // console.log("multiple file : ", req.files);
        // const files = req.file.map((file, index) => {
        //     return `http://localhost:8000/${file.filename}`;
        // });

        // res.json({
        //     success: true,
        //     message: `${req.file.originalname} uploaded successfully.`,
        //     // result: files,
        // });
    }
);

export default fileRouter;

/**
 * 
 * File:  {
  fieldname: 'myFile',
  originalname: 'leaf-8483401_1920.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: './public',
  filename: '1723086483193leaf-8483401_1920.jpg',
  path: 'public\\1723086483193leaf-8483401_1920.jpg',
  size: 225287
}

 */
