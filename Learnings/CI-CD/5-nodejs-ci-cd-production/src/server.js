const app = require('./app');

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`The server is listening on the port ${PORT}`);
})

