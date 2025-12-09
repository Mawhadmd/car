const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "carsdb",
});

app.get("/cars", (req, res) => {
  db.query("SELECT * FROM cars", (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.post("/cars", (req, res) => {
  const { brand, model } = req.body;
  db.query(
    "INSERT INTO cars (brand, model) VALUES (?, ?)",
    [brand, model],
    (err, result) => {
      if (err) return res.json(err);
      return res.json("Car added successfully");
    }
  );
});

app.delete("/cars/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM cars WHERE id=?", [id], (err, result) => {
    if (err) return res.json(err);
    return res.json("Car deleted successfully");
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
