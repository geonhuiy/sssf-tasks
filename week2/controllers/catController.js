"use strict";
const catModel = require("../models/catModel");

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

module.exports = {
  cat_list_get,
  cat_get
};
