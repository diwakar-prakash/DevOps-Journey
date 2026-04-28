const express = require('express');
const axios = require('axios');

const app = express();

const USER_SERVICE = process.env.USER_SERVICE_URL;
const PRODUCT_SERVICE = process.env.PRODUCT_SERVICE_URL;

if(!USER_SERVICE || !PRODUCT_SERVICE) {
    console.error("Missing USER_SERVICE_URL or PRODUCT_SERVICE_URL");
    process.exit(1);
}

app.use((req, res, next) => {
    console.log(JSON.stringify({
        service: "api-gateway",
        method: req.method,
        url: req.url,
        time: new Date().toISOString()
    }));
    next();
});

app.get('/users', async (req, res) => {
    try {
        const response = await axios.get(`${USER_SERVICE}/users`, {
            timeout: 2000
        });
        res.json(response.data);
    } catch ( err ) {
        console.error("User Service Failed", err.message);
        res.status(500).json({ message : "user service not working "});
    }
});

app.get('/products', async (req, res) => {
    try {
        const response = await axios.get(`${PRODUCT_SERVICE}/products`, {
            timeout: 2000
        });
        res.json(response.data);
    } catch ( err ) {
        console.error("Product Service Failed", err.message);
        res.status(500).json({ message: "product service not working "});
    }
});

app.get('/health', (req, res) => {
    res.send("OK");
});

app.get('/ready', (req, res) => {
    res.send("READY");
});

module.exports = app;

