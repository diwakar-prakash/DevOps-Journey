const express = require("express");

const app = express();

app.get("/orders", (req, res) => {
    res.status(200).json([
        { id: 1, name: "Vivek", item: "Mobile" },
        { id: 2, name: "Himanshu", item: "Laptop" }
    ]);
});

module.exports = app;

