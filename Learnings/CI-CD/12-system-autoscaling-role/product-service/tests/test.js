const request = require('supertest');
const app = require('../src/index');

describe('test the products', () => {
    it('test products', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
    })
})

