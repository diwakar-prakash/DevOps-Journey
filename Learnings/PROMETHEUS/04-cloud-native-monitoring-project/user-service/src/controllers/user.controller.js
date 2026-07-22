const pool = require("../config/db");
const { usersCreatedCounter } = require("../metrics/metrics.js");

const getUsers = async (req, res) => {

    try {

        const users = await pool.query(
            "SELECT * FROM users ORDER BY id ASC"
        );

        res.status(200).json(users.rows);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            message: "Unable to fetch users"
        });

    }

};

const createUser = async (req, res) => {

    try {

        const { name, email } = req.body;

        const user = await pool.query(
            "INSERT INTO users(name,email) VALUES($1,$2) RETURNING *",
            [name, email]
        );
        usersCreatedCounter.inc();
        res.status(201).json(user.rows[0]);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            message: "Unable to create user"
        });

    }

};

module.exports = {
    getUsers,
    createUser
};