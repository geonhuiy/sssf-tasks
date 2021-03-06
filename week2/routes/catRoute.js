"use strict";
// catRoute
const express = require("express");
const router = express.Router();
const app = express();
const catController = require('../controllers/catController');
const multer = require('multer');
const upload = multer({ dest: './uploads/'})

/*router.get("/", (req, res) => {
  res.send("From this endpoint you can get cats.");
});*/

router.get('/', catController.cat_list_get);

/*router.post("/", (req, res) => {
  res.send("From this endpoint you can add cats.");
});*/

router.post('/', upload.single('catPic'), (req, res, next) => {
    
})

router.put("/", (req, res) => {
  res.send("From this endpoint you can edit cats.");
});

router.delete("/", (req, res) => {
  res.send("From this endpoint you can delete cats.");
});

router.get(`/:id`, catController.cat_get);

module.exports = router;
