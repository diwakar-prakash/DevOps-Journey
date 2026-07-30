const express = require('express');
const app = express();
const gatewayRoutes = require('./routes/gateway.routes.js');
const metricsMiddleware = require('./middleware/metrics.middleware.js');
const { register } = require('./metrics/metrics.js');

app.use(express.json());
app.use(metricsMiddleware);

app.get('/health', ( req, res ) => {
    res.status(200).json({
        status: "UP",
        service: "API Gateway"
    });
});

app.use('/', gatewayRoutes);

app.get('/metrics', async( req, res ) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
});

module.exports = app;