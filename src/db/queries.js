const pool = require("./pool");

async function getAllUsernames() {
  let { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES($1)", [username]);
}
async function findUser(username) {
  let { rows } = await pool.query(
    "SELECT username FROM usernames WHERE username ILIKE $1",
    ["%" + username + "%"]
  );
  return rows;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  findUser,
};
