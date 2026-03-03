const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    service: "gitops-node-app",
    status: "UP"
  });
});

module.exports = app;