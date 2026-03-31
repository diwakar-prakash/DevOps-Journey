const express = require('express');
const app = express();

app.get('/users', ( req , res ) => {
    res.status(200).json([
        { id: 1, name: "Vivek" },
        { id: 2, name: "Harsh" },
	{ id: 3, name: "Sonu" }
    ]);
});

module.exports = app;

