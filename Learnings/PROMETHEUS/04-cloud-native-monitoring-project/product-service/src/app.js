const express = require("express");
const app = express();

app.use(express.json());
const route = require("./routes/product.routes.js");
const { register } = require('./metrics/metrics.js');
const metricsMiddleware = require('./middleware/metrics.middleware.js');
app.use(metricsMiddleware);

app.get('/health', ( req, res ) => {
    res.status(200).json({
        status: "UP",
        service: "Product Service"
    });
});

app.use('/products', route);

app.use('/metrics', async ( req, res ) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
})

module.exports = app;