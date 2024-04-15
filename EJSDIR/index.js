const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs"); //template engine enable you to use static template files in applications
app.set("views", path.join(__dirname, "/views")); //parent theke access korte parbo

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/roll_dice", (req, res) => {
  let num = Math.floor(Math.random() * 6) + 1;
  res.render("roll_dice.ejs", { diceVal: num });
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  res.render("instagram.ejs", { username });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
