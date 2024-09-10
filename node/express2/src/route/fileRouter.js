import { Router } from "express";
import upload from "../midddleware/upload.js";

const fileRouter = Router();

/* 
    /file/single => post
        post file
        store at  public(static)
        send link of that file to the res
*/

fileRouter
  .route("/file/single")
  .post(upload.single("myFile"), (req, res, next) => {
    let link = `http.//localhost:8000/${req.file.filename}`;

    res.json({
      success: true,
      message: `${req.file.originalname} uploaded successfully`,
      result: link,
    });
  });
fileRouter
  .route("/file/multiple")
  .post(upload.array("myFile"), (req, res, next) => {
    let link = req.files.map((item, i) => {
      return `http.//localhost:8000/${item.filename}`;
    });
    res.json({
      success: true,
      message: `uploaded successfully`,
      result: link,
    });
  });

export default fileRouter;

/* 
upload.single("myFile")
        it stores file coming in my file at public
        from postman always send file at field at myFile field
        add file information to req(req.file)

 upload.array("myFile")
        it stores file coming in my file at public
        from postman always send file at field at myFile field
        add files information to req(req.files)
*/
