"use strict";
// userRoute
const express = require("express");
const app = express();
const router = express.Router();
const userController = require('../controllers/userController');
const bodyParser = require('body-parser');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));

router.get('/', userController.user_list_get);
router.get(`/:id`, userController.user_get);
router.post('/', (req, res) => {
    userController.user_create_post(req, res);
})
module.exports = router;
