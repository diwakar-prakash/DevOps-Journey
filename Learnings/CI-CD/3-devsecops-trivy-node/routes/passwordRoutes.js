const express = require("express");
const router = express.Router();
const { analyzePassword } = require("../controllers/passwordController");

router.post("/analyze-password", analyzePassword);

module.exports = router;