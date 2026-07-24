const express = require('express');
const { createProxyMiddleware } = require("http-proxy-middleware");
const { 
    userService,
    productService
} = require("../config/gateway.config.js");

const router = express.Router();

const services = [
    { path: '/users', target: userService },
    { path: '/products', target: productService }
];

services.forEach(({path, target}) => {
    router.use(
        path, 
        createProxyMiddleware({
            target,
            changeOrigin: true
        })
    );
});

module.exports = router;
