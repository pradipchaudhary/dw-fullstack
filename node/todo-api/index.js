import express, { json } from "express";
import todoRouter from "./src/routers/todoRoute.js";
import mongoDb from "./src/config/db.js";
const app = express();
app.use(json());

// root router
app.get("/", (req, res, next) => {
    console.log("Home route");
    res.json({
        page: "Home Page ",
    });
});

// todo router
app.use("/todo", todoRouter);

app.listen(4000, () => {
    console.log(`Server running on http://localhost:4000`);
});
mongoDb();
