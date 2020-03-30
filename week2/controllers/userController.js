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

const user_create_post = async (req, res) => {
  const user = await userModel.addUser( req.body.name, req.body.email, req.body.passwd);
}
module.exports = {
  user_list_get,
  user_get,
  user_create_post
};
