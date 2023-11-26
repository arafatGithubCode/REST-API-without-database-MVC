const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    userName: "saimon",
    userEmail: "saimon@gmail.com",
  },
  {
    id: uuidv4(),
    userName: "mon",
    userEmail: "mon@gmail.com",
  },
];

module.exports = users;
