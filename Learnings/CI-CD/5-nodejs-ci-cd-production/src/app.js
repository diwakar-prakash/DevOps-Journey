const express = require('express');
const app = express();

app.get('/', ( req , res ) => {
    res.send("Hello DevOps");
})

app.get('/health', ( req, res ) => {
    res.json({
        status: "UP"
    });
});

app.get('/users', ( req, res ) => {
    res.json([
        { id: 1, name: "Diwakar" },
        { id: 2, name: "Vivek Chaudhary" }
    ]);
});

module.exports = app;
