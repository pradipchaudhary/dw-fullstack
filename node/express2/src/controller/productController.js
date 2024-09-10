import expressAsyncHandler from "express-async-handler";
import {
  createProductService,
  deleteProductService,
  readAllProductService,
  readSpecificProductService,
  updateProductService,
} from "../service/productService.js";

import { EventEmitter } from "events";

const myEvent = new EventEmitter();

let count = 0;

myEvent.on("countApi", () => {
  //creating an event
  count++;
  console.log(count);
});

export let createProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await createProductService(req);
    res.status(200).json({
      success: true,
      message: "post succesfully created ",
      result: result,
    });
  }
);

export let readAllProductController = expressAsyncHandler(
  async (req, res, next) => {
    myEvent.emit("countApi");
    let result = await readAllProductService(req);
    res.status(200).json({
      success: true,
      message: "Product read successfully",
      result: result,
    });
  }
);
export let readSpecificProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await readSpecificProductService(req);
    res.status(200).json({
      success: true,
      message: "Product get successfuly",
      result: result,
    });
  }
);
export let upadteProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await updateProductService(req);
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      result: result,
    });
  }
);
export let deleteProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await deleteProductService(req);
    res.status(200).json({
      success: true,
      message: "Product Deleted Succesfully",
      result: result,
    });
  }
);
