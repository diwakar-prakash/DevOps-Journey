const app = require('./index');

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Product Service is running at the PORT ${PORT}`);
})

