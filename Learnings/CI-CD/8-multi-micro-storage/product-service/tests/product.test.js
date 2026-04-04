const app = require('../src/index');

const request = require('supertest');

describe('get the products', () => {
    it('products', async() => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

