const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    service: "gitops-node-app",
    status: "UP"
  });
});

app.get("/vivek", ( req, res ) => {
  res.status(200).json({
    message : "Vivek bhai Aache hai, aur wo london me hai"
  })
})

module.exports = app;