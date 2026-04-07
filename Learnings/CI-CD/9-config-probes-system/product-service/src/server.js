const app = require('./index');

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Product Service is running on the Port ${PORT}`);
})

