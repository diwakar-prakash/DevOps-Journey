const app = require('./index');

const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`User Service running on port ${PORT}`);
});

// This line is only to check weather the ci-cd is working properly or not..
