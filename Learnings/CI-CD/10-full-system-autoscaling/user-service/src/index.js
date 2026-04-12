const express = require('express');

const app = express();

const APP_NAME = process.env.APP_NAME || "user service";
const SECRET_KEY = process.env.SECRET_KEY || "default-secret";

app.get('/users', ( req , res ) => {
    res.status(200).json({
        service : APP_NAME,
        data: [
            { id : 1, name : "Vivek" },
            { id : 2, name : "Harsh" }
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
