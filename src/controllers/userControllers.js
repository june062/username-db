const expressValidator = require("express-validator");

exports.usernameListGet = (req, res) => {
  console.log("usernames will be logged here - wip");
};

exports.usernameFormGet = (req, res) => {
  res.render("usernameForm");
};

exports.createUsernamePost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};
