"use strict";
const catModel = require("../models/catModel");
var multer=require("multer");
const cats = catModel.cats;

const cat_list_get = async(req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get = async (req, res) => {
  const cats = await catModel.getCat(req.params.id);
  res.json(cats);
  //res.json(cats.filter(cat => cat.id == req.params.id));
};

const cat_create_post = async (req, res) => {
  const cat = await catModel.addCat( req.body.name, req.body.age, req.body.weight, req.body.owner, req.file.filename);
}

module.exports = {
  cat_list_get,
  cat_get,
  cat_create_post
};
