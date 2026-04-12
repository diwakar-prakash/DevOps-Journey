const app = require('./index');

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`API GATEWAY is running at the port ${PORT}`);
})
