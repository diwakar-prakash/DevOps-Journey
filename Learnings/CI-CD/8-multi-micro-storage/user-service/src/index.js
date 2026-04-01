const express = require("express");

const app = express();

app.get("/users", (req, res) => {
    res.status(200).json([
        { id: 1, name: "Donald" },
        { id: 2, name: "Kier" }
    ]);
});

module.exports = app;

