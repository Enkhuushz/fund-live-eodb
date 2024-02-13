const sqlite3 = require("sqlite3").verbose();
const DB_PATH = "./stopoutdb.dblite";

let db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
  }
});

module.exports = db;
