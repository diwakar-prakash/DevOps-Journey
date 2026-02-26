const zxcvbn = require("zxcvbn");

exports.analyzePassword = (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: "Password required" });
  }

  const result = zxcvbn(password);

  let strength = "Weak";
  if (result.score >= 3) strength = "Strong";
  else if (result.score === 2) strength = "Medium";

  res.json({
    score: result.score,
    strength
  });
};