require('dotenv').config();

const app = require('./app.js');

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`PRODUCT SERVICE running on PORT ${PORT}`);
})