"use strict";
const userModel = require("../models/userModel");

const users = userModel.users;

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get = async (req, res) => {
  const user1 = await userModel.getUser(req.params.id);
  user1.forEach(user => {
      delete user.password;
  });
  res.json(user1);
};

module.exports = {
  user_list_get,
  user_get
};
