const express = require('express');
const userRoutes = require('./routes/user.routes.js');
const metricsMiddleware = require('./middleware/metrics.middleware.js');
const { register } = require("./metrics/metrics.js");
const app = express();

app.use(express.json());
app.use(metricsMiddleware);
app.get('/health', (req, res) => {
    res.status(200).json({
        status: "UP",
        service: "User Service"
    })
})

app.get('/metrics', async( req, res ) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
})

app.use('/users', userRoutes);
module.exports = app;
