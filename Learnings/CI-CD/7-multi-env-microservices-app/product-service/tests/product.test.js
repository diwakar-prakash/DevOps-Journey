const app = require("../src/server");

const request = require('supertest');

describe("GET /products", () => {
    it("should return products", async () => {
        const res = await request(app).get('/products');

        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

