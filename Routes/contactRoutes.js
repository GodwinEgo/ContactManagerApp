const express = require("express");
const dotenv = require("dotenv").config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

module.exports = router;
