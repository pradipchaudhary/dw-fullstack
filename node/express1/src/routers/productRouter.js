import { Router } from "express";
const productRouter = Router();

productRouter
    .route("/product")
    .get((req, res) => {
        res.json("Get all products!");
    })
    .post((req, res) => {
        res.json("Post products!");
    });

productRouter
    .route("/product/:id")
    .get((req, res) => {
        res.json("Get specific product!");
    })
    .patch((req, res) => {
        res.json("Update specific product!");
    })
    .delete((req, res) => {
        res.json("Delete specfic product!");
    });
export default productRouter;
