const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  res.status(200).json([
    { id: 1, product: "Laptop", price: 80000 },
    { id: 2, product: "Mobile", price: 30000 }
  ]);
});

module.exports = app;

