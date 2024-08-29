const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", (req, res) => {
    const { name, email, message } = req.body;
    res.render("display-list", { name, email, message });
});
// Dynamic routes
// Create dynamic with name params
// app.get("/profile/:username/:age", (req, res) => {
//     console.log(req.params);
//     res.send(`${req.params.username} profile.. and age are ${req.params.age}`);
// });

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});
