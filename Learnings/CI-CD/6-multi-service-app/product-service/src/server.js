const express = require("express");

const app = express();

app.get('/products', ( req , res ) => {
    res.status(200).json([
        {id: 1, product: "LAPTOP", price: 80000},
        {id: 2, product: "Mobile", price: 35000},
        {id: 3, product: "AC", price: 40000}
    ]);
});

module.exports = app;