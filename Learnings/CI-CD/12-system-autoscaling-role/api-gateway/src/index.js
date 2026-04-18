const express = require('express');
const axios = require('axios');

const app = express();

const USER_SERVICE = process.env.USER_SERVICE_URL;
const PRODUCT_SERVICE = process.env.PRODUCT_SERVICE_URL;

app.get('/users', async (req, res) => {
    const response = await axios.get(`${USER_SERVICE}/users`);
    res.json(response.data);
});

app.get('/products', async (req, res) => {
    const response = await axios.get(`${PRODUCT_SERVICE}/products`);
    res.json(response.data);
});

app.get('/health', (req, res) => {
    res.send("OK");
});

app.get('/ready', (req, res) => {
    res.send("READY");
});

module.exports = app;

