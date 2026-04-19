const request = require('supertest');
const app = require('../src/index');

describe('product service checking', () => {
    it('product service testing', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
    })
})
