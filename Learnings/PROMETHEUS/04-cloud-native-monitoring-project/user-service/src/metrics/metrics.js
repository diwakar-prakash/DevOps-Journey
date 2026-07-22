const client = require("prom-client");
client.collectDefaultMetrics();

const register = client.register;

const httpRequestCounter = new client.Counter({
    name: "http_requests_total",
    help: "Total HTTP Requests",
    labelNames: ["method", "route", "status"]
});

const httpRequestDuration = new client.Histogram({
    name: "http_request_duration_seconds",
    help: "Duration of HTTP Requests",
    labelNames: ["method", "route", "status"],
    buckets: [0.1,0.5,1,2,5]
})

const activeRequests = new client.Gauge({
    name: "active_requests",
    help: "Current Active Requests"
});

const usersCreatedCounter = new client.Counter({
    name: "users_created_total", 
    help: "Total Users Created"
});

module.exports = {
    register, 
    httpRequestCounter,
    httpRequestDuration,
    activeRequests,
    usersCreatedCounter
};

