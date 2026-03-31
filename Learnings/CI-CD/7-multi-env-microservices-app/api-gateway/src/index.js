const app = require('./server');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API GATEWAY is running at the PORT ${PORT}`);
})

