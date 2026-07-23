const request = require('supertest');
const app = require('../src/app.js');

describe("Health API", () => {
    test("GET /health should return Product Service status", async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({
            status: "UP",
            service: "Product Service"
        });
    });
});