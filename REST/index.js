const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
let allPosts = require("./data");
var methodOverride = require("method-override");

// console.log(data);
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// override with POST having ?_method=DELETE ot PATCH
app.use(methodOverride("_method"));

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts: allPosts });
});
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = crypto.randomUUID();
  allPosts.push({ id, username, content });
  res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = allPosts.find((p) => id == p.id);
  res.render("show.ejs", { post });
});
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  //   console.log(newContent);
  let post = allPosts.find((p) => id == p.id);
  post.content = newContent;
  //   console.log(post);
  res.redirect("/posts");
});
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = allPosts.find((p) => id == p.id);
  res.render("edit.ejs", { post });
});
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  allPosts = allPosts.filter((p) => id !== p.id);
  console.log(post);
  res.redirect("/posts");
});
app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
