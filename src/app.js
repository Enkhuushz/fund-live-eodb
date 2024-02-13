const express = require("express");
const app = express();
const db = require("./dbConfig");

const port = 3002;

app.get("/data", (req, res) => {
  db.all("SELECT * FROM daily_funds", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  if (db) {
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Closed the database connection.");
    });
  }
  process.exit(1);
});
