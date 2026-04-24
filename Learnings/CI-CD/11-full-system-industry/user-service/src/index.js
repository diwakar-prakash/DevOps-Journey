const express = require('express');
const app = express();

const APP_NAME = process.env.APP_NAME || "user-service";

const heavyTask = () => {
	let count = 0;
	for ( let i = 0; i<1e8; i++ ) {
		count += i;
	}
};

app.get('/users', (req, res) => {
    heavyTask();
    res.json({
        service: APP_NAME,
        data: [
            { id: 1, name: "Vivek" },
            { id: 2, name: "Harsh" },
            { id: 3, name: "Himanshu" },
	    { id: 4, name: "Mark" },
	    { id: 5, name: "Donald" },
	    { id: 6, name: "Virat" }
        ]
    });
});

app.get('/health', (req, res) => {
    res.send("OK");
});

app.get('/ready', (req, res) => {
    res.send("READY");
});

module.exports = app;

