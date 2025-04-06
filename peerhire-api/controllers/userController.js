const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
};

module.exports = { getUsers, createUser };
