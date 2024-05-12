const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");

/* app.use("/random", (req, res, next) => {
  const date = (req.time = new Date(Date.now()).toString());
  console.log("random");
  console.log(req.method, req.path, req.query, req.hostname, date);
  next();
}); */

/* app.use("/api", (req, res, next) => {
  let { token } = req.query;
  console.log(token);
  if (token === "giveaccess") {
    next();
  } else {
    res.send("access denied");
  }
  
}); */

const checkToken = (req, res, next) => {
  let { token } = req.query;
  console.log(token);
  if (token === "giveaccess") {
    next();
  } else {
    // res.send("access denied");
    throw new ExpressError(401, "Access Denied");
  }
};

app.get("/", (req, res) => res.send("Root!"));

app.get("/api", checkToken, (req, res) => res.send("api data"));

app.get("/random", (req, res) => res.send("randomm!"));

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.use((err, req, res, next) => {
  //   console.log(err);
  // console.log("-------err------");
  let { status=500, message="Some Error Occurred" } = err;
  res.status(status).send(message);
  // next(err);
  // res.send(err);
});

//404
/* app.use((req, res) => {
  res.send("page not found");
}); */

app.listen(port, () => console.log(`Example app listening on ${port}`));
