const pool = require("../config/db.js");
const { productsCreatedCounter, productsUpdatedCounter, productsDeletedCounter } = require('../metrics/metrics.js');

// Get All Products

const getProducts = async ( req , res ) => {
    try {
        const result = await pool.query(
            "SELECT * FROM products ORDER BY id"
        );

        res.status(200).json(result.rows);
    } catch( err ) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Get Product via ID

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            "SELECT * FROM products WHERE id=$1",
            [id]
        );
        if(result.rows.length === 0) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// Create Product

const createProduct = async ( req , res ) => {
    try {
        const { name, price, quantity } = req.body;

        const result = await pool.query(
            `INSERT INTO products
            (name, price, quantity)
            VALUES ($1, $2, $3)
            RETURNING *`,
            [name, price, quantity]
        );
        productsCreatedCounter.inc();
        res.status(201).json(result.rows[0]);
    }
    catch ( error ) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Update Product

const updateProduct = async ( req , res ) => {
    try {
        const { id } = req.params;

        const { name, price, quantity } = req.body;

        const result = await pool.query(
            `UPDATE products
            SET
                name=$1,
                price=$2,
                quantity=$3
            WHERE id=$4
            RETURNING *`,
            [name, price, quantity, id]
        );

        if( result.rows.length === 0 ) {
            return res.status(404).json({
                message:"Product Not Found"
            })
        }

        productsUpdatedCounter.inc();

        res.status(200).json(result.rows[0]);
    }
    catch ( err ) {
        res.status(500).json({
            message: err.message
        });
    }
}

// Delete Product

const deleteProduct = async ( req, res ) => {
    try {
        const { id } = req.params;

    const result = await pool.query(
        `DELETE FROM products
         WHERE id=$1
         RETURNING *`,
        [id]
    );

    if(result.rows.length === 0) {
        return res.status(404).json({
            message: "Product Not Found"
        });
    }

    productsDeletedCounter.inc();

    res.status(200).json({
        message: "Prdouct Deleted Successfully"
    })
    }
    catch ( err ) {
        res.status(500).json({
            message : err.message
        })
    }
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}