const request = require('supertest');
const app = require('../src/app.js');

describe("Health API", () => {
    test("GET the /health, should return UP", async () => {
        const response = await request(app).get("/health");
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            service: "User Service",
            status: "UP"
        });
    });
});
