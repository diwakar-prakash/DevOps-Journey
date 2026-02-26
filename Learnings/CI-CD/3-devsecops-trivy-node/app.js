const express = require("express");
const passwordRoutes = require("./routes/passwordRoutes");

const app = express();
app.use(express.json());
app.use(passwordRoutes);

module.exports = app;
