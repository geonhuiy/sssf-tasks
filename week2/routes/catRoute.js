"use strict";
// catRoute
const express = require("express");
const router = express.Router();
const catController = require('../controllers/catController');
const multer = require('multer');
const upload = multer({ dest: './uploads/'})
const bodyParser = require('body-parser');
express().use(bodyParser.json());
/*router.get("/", (req, res) => {
  res.send("From this endpoint you can get cats.");
});*/

router.get('/', catController.cat_list_get);

/*router.post("/", (req, res) => {
  res.send("From this endpoint you can add cats.");
});*/

router.post('/', upload.single('catPic'), (req, res, next) => {
  catController.cat_create_post(req,res);
})
/*router.post('/', (req, res) => {
  
})*/

router.put('/', (req, res) => {
  catController.cat_update_put(req,res);
});

router.delete("/", (req, res) => {
  res.send("From this endpoint you can delete cats.");
});

router.get(`/:id`, catController.cat_get);

module.exports = router;
