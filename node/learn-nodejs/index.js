const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    console.log("this is the home route ...");
    // res.send("Home page... ");
    res.render("index");
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});
