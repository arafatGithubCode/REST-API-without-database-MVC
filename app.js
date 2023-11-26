const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const usersRoute = require("./routes/users.route");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//users route
app.use("/users", usersRoute);

//home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//error for route not found
app.use((req, res, next) => {
  res.status(404).json({
    statusCode: 404,
    message: "Resources are not found",
  });
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({
    statusCode: 500,
    message: "something went wrong",
  });
});

module.exports = app;
