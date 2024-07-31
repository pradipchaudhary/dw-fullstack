import { Todo } from "../models/todo.js";

// Get all todo lists
export const getAllTodo = async (req, res, next) => {
    try {
        const data = await Todo.find({});
        res.json({
            success: true,
            message: "Get all data successfully!",
            data: data,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export const createTodo = async (req, res, next) => {
    try {
        const data = await Todo.create(req.body);
        res.status(201).json({
            success: true,
            message: "Get all todo successfully!",
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// Get specific todo
export const getTodo = async (req, res, next) => {
    try {
        const data = await Todo.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Get specific todo!",
            data: data,
        });
    } catch (error) {
        res.staus(400).json({
            success: false,
            message: error.message,
        });
    }
};

// update specific todo
export const updateTodo = async (req, res, next) => {
    try {
        const data = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(201).json({
            success: true,
            message: "Update successfully!",
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// delete specific todo

export const deleteTodo = async (req, res, next) => {
    try {
        const data = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Delete successfully!",
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
