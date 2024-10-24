const expressValidator = require("express-validator");
const dbQueries = require("../db/queries");

exports.usernameListGet = async (req, res) => {
  const usernames = await dbQueries.getAllUsernames();
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

exports.usernameFormGet = async (req, res) => {
  res.render("usernameForm");
};

exports.createUsernamePost = async (req, res) => {
  let username = req.body.username;
  await dbQueries.insertUsername(username);
  res.redirect("/");
};
