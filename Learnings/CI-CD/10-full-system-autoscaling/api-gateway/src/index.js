const express = require('express');
const app = express();
const axios = require('axios');

const PRODUCT_SERVICE = 'http://product-service:3001';
const USER_SERVICE = 'http://user-service:3001';

app.get('/users', async ( req , res ) => {
    const response = await axios.get(`${USER_SERVICE}/users`);
    res.json(response.data);
})

app.get('/products', async ( req , res ) => {
    const response = await axios.get(`${PRODUCE_SERVICE}/products`);
    res.json(response.data);
})

app.get('/health', ( req , res ) => {
    res.status(200).send("OK");
})

app.get('/ready', ( req , res ) => {
    res.status(200).send("READY");
})

module.exports = app;
