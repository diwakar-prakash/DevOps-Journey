const express = require('express');
const app = express();

const APP_NAME = process.env.APP_NAME;

app.get('/products', ( req , res ) => {
    res.status(200).json({
        service : APP_NAME,
        data : [
            { id : 1, name : "Laptop", price : 2000000 },
            { id : 2, name : "Company", price : 2000000000000  }
        ]
    });
});

app.get('/health', ( req , res ) => {
    res.send("OK");
})

app.get('/ready', ( req , res ) => {
    res.send("READY");
})

module.exports = app;
