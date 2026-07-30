const request = require('supertest');
const app = require('../src/app.js');

describe("Gateway Health API", () => {
    test("GET /health should return API Gateway status", async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({
            status: "UP",
            service: "API Gateway"
        });
    });
});

