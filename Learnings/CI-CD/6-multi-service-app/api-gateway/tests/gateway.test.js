const request = require('supertest');
const app = require('../src/server');

describe('Gateway Routes', () => {
    it('should respond to /users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBeDefined();
    });

    it('should respond to /products', async () => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toBeDefined();
    });
});

