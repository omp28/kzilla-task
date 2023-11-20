var express = require("express");
var router = express.Router();
var cors = require("cors");

router.use(cors());

router.get("/", function (req, res, next) {
  res.send({ message: "Hello There!" });
});


router.post("/", (req, res, next) => {
  const { username, password } = req.body;
  console.log({ username, password });
  res.send("POST request successful");
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  res.send({ message: "Login successful", token: "fakeToken" });
});

router.post("/protectedRoute", (req, res) => {
  const { authorization } = req.headers;
  const token = authorization;

  if (!token) {
    res.status(401).send({ message: "Unauthorized" });
  } else {
    res.send({ message: "Protected route accessed!" });
  }
});

module.exports = router;
