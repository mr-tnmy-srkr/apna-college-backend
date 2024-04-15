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
  const users = ["jhon", "doe", "adam", "eve"];
  let { username } = req.params;
  res.render("instagram.ejs", { username, users });
});

app.get("/v2/ig/:username", (req, res) => {
  let { username } = req.params;
  const instagramData = require("./data.json");
  const data = instagramData[username];
  if (data) {
    res.render("instagram_2.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
