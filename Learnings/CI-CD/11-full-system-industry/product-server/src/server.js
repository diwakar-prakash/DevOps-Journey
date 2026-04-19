const app = require('./index');

const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Product Service is running on the PORT ${PORT}`);
})

