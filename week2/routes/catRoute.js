"use strict";
// catRoute
const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res) => {
  res.send("From this endpoint you can get cats.");
});

router.post("/", (req, res) => {
  res.send("From this endpoint you can add cats.");
});

router.put("/", (req, res) => {
  res.send("From this endpoint you can edit cats.");
});

router.delete("/", (req, res) => {
  res.send("From this endpoint you can delete cats.");
});

router.get(`/:id`, (req, res) => {
  res.send(`You requested a cat whose id is ${req.params.id}`);
});

module.exports = router;