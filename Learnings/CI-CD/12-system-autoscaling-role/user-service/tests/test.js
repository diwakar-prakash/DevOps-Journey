const request = require('supertest');
const app = require('../src/index');

describe('test the user', () => {
    it('test user', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
    })
})

