"use strict";
const userModel = require("../models/userModel");

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  var filtered = users.filter(user => user.id == req.params.id);
  filtered.forEach(user => {
      delete user.password;
  });
  res.json(filtered);
};

module.exports = {
  user_list_get,
  user_get
};
