const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    console.log("this is the home route ...");
    res.render("index");
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
