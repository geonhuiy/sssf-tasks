"use strict";
// catRoute
const express = require("express");
const router = express.Router();
const app = express();
const catController = require('../controllers/catController');

/*router.get("/", (req, res) => {
  res.send("From this endpoint you can get cats.");
});*/

router.get('/', catController.cat_list_get);

router.post("/", (req, res) => {
  res.send("From this endpoint you can add cats.");
});

router.put("/", (req, res) => {
  res.send("From this endpoint you can edit cats.");
});

router.delete("/", (req, res) => {
  res.send("From this endpoint you can delete cats.");
});

router.get(`/:id`, catController.cat_get);

module.exports = router;
