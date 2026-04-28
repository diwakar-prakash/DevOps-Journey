const app = require('./index');
const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
    console.log(`Api Gateway is running on the port ${PORT}`);
})

const shutdown = () => {
    console.log("Shutting down api-gateway...");
    server.close(() => {
        process.exit(0);
    });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

