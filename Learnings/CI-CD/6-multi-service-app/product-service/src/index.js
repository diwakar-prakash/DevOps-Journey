const app = require("./server");

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The Product Service is running on the PORT ${PORT}`);
})

