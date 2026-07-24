require("dotenv").config();

module.exports = {
    userService: process.env.USER_SERVICE_URL,
    productService: process.env.PRODUCT_SERVICE_URL
}
