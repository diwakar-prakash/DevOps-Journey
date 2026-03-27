const express = require('express');
const axios = require('axios');

const app = express();

app.get('/users', async (req, res) => {
    try {
        const dataa = await axios.get('http://user-service:3000/users');
        res.json(dataa.data);
    } catch (error) {
        res.status(500).json({ error: "Bhai user-service me error aa gaya" });
    }
});

app.get('/products', async (req, res) => {
    try {
        const dataa = await axios.get('http://product-service:3000/products');
        res.json(dataa.data);
    } catch (error) {
        res.status(500).json({ error: "The error came in product-service" });
    }
});

module.exports = app;

