const express = require("express");

const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  host: "postgres",
  user: "admin",
  password: "password",
  database: "mydb",
  port: 5432
})

app.get("/users", (req, res) => {
    res.status(200).json([
        { id: 1, name: "Donald" },
        { id: 2, name: "Morgan" }
    ]);
});

app.get("/db-test", async ( req , res ) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch ( err ) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;

