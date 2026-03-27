const request = require('supertest');
const app = require('../src/server');

describe('GET /products', () => {
    it('should return product list', async () => {
        const res = await request(app).get('/products');

        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
