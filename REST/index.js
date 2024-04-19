const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const posts = require("./data");
// console.log(data);
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts})
})

app.listen(port, ()=>{
    console.log(`listening on port : ${port}`);
})