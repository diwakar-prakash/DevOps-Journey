const express = require("express");

const app = express();

app.get("/orders", (req, res) => {
  res.status(200).json([
    { id: 1, user: "Vivek", product: "Laptop" },
    { id: 2, user: "Harsh", product: "Mobile" }
  ]);
});

module.exports = app;

