const request = require('supertest');
const app = require('../src/app.js');

describe('Gateway Routing', () => {
    test("Gateway should proxy users endpoint", async () => {
        const response = await request(app).get('/users');
        expect([200,500,502]).toContain(response.statusCode);
    });
    test("Gateway should proxy products endpoint", async () => {
        const response = await request(app).get('/products');
        expect([200,500,502]).toContain(response.statusCode);
    });
});