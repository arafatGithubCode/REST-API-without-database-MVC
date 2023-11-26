let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

//get user
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

//create user
const createUsers = (req, res) => {
  const newUser = {
    id: uuidv4(),
    userName: req.body.userName,
    userEmail: req.body.userEmail,
  };
  users.push(newUser);
  res.status(201).json(users);
};

//update user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { userName, userEmail } = req.body;
  users
    .filter((user) => user.id === userId)
    .map((selectedUser) => {
      selectedUser.userName = userName;
      selectedUser.userEmail = userEmail;
    });
  res.status(200).json(users);
};

//delete user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  users = users.filter((user) => user.id !== userId);
  res.status(202).json(users);
};

module.exports = { getAllUsers, createUsers, updateUser, deleteUser };
