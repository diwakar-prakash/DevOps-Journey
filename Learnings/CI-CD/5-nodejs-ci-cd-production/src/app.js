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
        { id: 1, name: "Diwakar Motabhai" },
        { id: 2, name: "Vivek Rajnikant" },
        { id : 3, name : "Harsh Undertaker" },
        { id : 4, name: "Sonu Mulla" } 
    ]);
});

module.exports = app;
