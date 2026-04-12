const request = require('supertest');
const app = require('../src/index');

describe("Testing", () => {
    it('test', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
    })
})
