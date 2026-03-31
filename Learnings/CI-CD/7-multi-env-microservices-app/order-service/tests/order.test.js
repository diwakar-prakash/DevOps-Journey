const request = require('supertest');
const app = require('../src/server');

describe("GET /orders", () => {
    it("should get orders", async () => {
        const res = await request(app).get('/orders');

        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

