const express = require('express');
const app = express();

const APP_NAME = process.env.APP_NAME || 'product-service';

app.get('/products', ( req , res ) => {
    res.status(200).json({
        service: APP_NAME,
        data: [
            { id : 1, name : "Bedsheet", price : 500 },
            { id : 2, name : "Cooler" , price : 5000 }
        ]
    })
})

app.get('/health', ( req , res ) => {
    res.status(200).send("OK");
})

app.get('/ready', ( req , res ) => {
    res.status(200).send("READY");
})

module.exports = app;
