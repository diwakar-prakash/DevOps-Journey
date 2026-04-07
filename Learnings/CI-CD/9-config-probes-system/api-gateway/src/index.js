const express = require("express");
const axios = require("axios");

const app = express();

const USER_SERVICE = "http://user-service:3001";
const PRODUCT_SERVICE = "http://product-service:3001";

app.get("/users", async (req, res) => {
  const response = await axios.get(`${USER_SERVICE}/users`);
  res.json(response.data);
});

app.get("/products", async (req, res) => {
  const response = await axios.get(`${PRODUCT_SERVICE}/products`);
  res.json(response.data);
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/ready", (req, res) => {
  res.status(200).send("READY");
});

module.exports = app;

