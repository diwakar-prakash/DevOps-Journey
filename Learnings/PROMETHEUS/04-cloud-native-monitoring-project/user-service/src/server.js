require("dotenv").config();

const app = require('./app.js');
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> {
    console.log(`The User Service is listening on the port ${PORT}`);
});

