const request = require('supertest');
const app = require('../src/index');

describe('Product Service here', () => {
    it("The product service will be ", async () => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toBe(200);
    })
});
