const request = require('supertest');
const app = require('../src/index');

describe('User Service', () => {
    it("will return users", async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200);
    })
})