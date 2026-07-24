const client = require("prom-client");
const register = new client.Registry();

client.collectDefaultMetrics({
    register
});

const httpRequestCounter = new client.Counter({
    name: "http_requests_total",
    help: "Total HTTP Requests",
    labelNames: ["method", "route", "status"],
    registers: [register]
})

const activeRequests = new client.Gauge({
    name: "active_requests",
    help: "Current Active Requests",
    register: [register]
})

const httpRequestDuration = new client.Histogram({
    name: "http_request_duration_seconds",
    help: "HTTP Request Duration",
    labelNames: ["method", "route", "status"],
    buckets: [0.1, 0.5, 1, 2, 5],
    register: [register]
})

module.exports = {
    register,
    httpRequestCounter,
    activeRequests,
    httpRequestDuration
}