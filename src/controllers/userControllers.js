const expressValidator = require("express-validator");
const dbQueries = require("../db/queries");

exports.usernameListGet = async (req, res, next) => {
  if (req.query.search) {
    next();
  } else {
    const usernames = await dbQueries.getAllUsernames();
    res.render("homePage", { usernames: usernames });
  }
};

exports.usernameFormGet = async (req, res) => {
  res.render("usernameForm");
};

exports.createUsernamePost = async (req, res) => {
  let username = req.body.username;
  await dbQueries.insertUsername(username);
  res.redirect("/");
};

exports.usernameSearch = async (req, res) => {
  let username = req.query.search;
  let searchResults = await dbQueries.findUser(username);
  res.render("homePage", { usernames: searchResults });
};
