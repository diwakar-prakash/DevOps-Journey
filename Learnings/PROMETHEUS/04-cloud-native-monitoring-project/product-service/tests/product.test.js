const request = require('supertest');
const app = require('../src/app.js');

describe('Product API', () => {
    test("GET /product should return 200", async () => {
        const response = await request(app).get('/products');
        expect(response.statusCode).toBe(200);
    });
});
