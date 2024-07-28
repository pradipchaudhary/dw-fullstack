import { Router } from "express";
import { Book } from "../schema/model.js";
import {
    createBookController,
    deleteSpecificBookController,
    readAllBookController,
    readSpecificBookController,
    updateSpecificBookController,
} from "../controller/bookController.js";
const bookRouter = Router();

bookRouter.route("/book").post(createBookController).get(readAllBookController);

bookRouter
    .route("/book/:id")
    // Create book
    .get(readSpecificBookController)

    // Update book
    .patch(updateSpecificBookController)

    // Delete book
    .delete(deleteSpecificBookController);

// export default
export default bookRouter;
