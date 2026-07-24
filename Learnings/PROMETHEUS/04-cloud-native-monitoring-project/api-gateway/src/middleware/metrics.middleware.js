const { httpRequestCounter, activeRequests, httpRequestDuration} = require("../metrics/metrics.js");

module.exports = ( req, res, next ) => {
    activeRequests.inc();
    const end = httpRequestDuration.startTimer();

    res.on("finish", () => {
        activeRequests.dec();
        httpRequestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status: res.statusCode
        });

        end({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status: res.statusCode
        });
    });
    next();
};
