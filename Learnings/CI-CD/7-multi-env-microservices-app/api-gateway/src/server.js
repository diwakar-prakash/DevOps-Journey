const express = require("express");
const axios = require("axios");

const app = express();

const USER_SERVICE = "http://user-service:3000";
const PRODUCT_SERVICE = "http://product-service:3000";
const ORDER_SERVICE = "http://order-service:3000";

// users wala
app.get("/users", async (req, res) => {
  const response = await axios.get(`${USER_SERVICE}/users`);
  res.json(response.data);
});

// products ke liye 
app.get("/products", async (req, res) => {
  const response = await axios.get(`${PRODUCT_SERVICE}/products`);
  res.json(response.data);
});

// Orders wala
app.get("/orders", async (req, res) => {
  const response = await axios.get(`${ORDER_SERVICE}/orders`);
  res.json(response.data);
});

module.exports = app;

