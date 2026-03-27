const app = require('./server');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The user service is up at the PORT ${PORT}`);
})

