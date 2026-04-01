const request = require("supertest");

const app = require("../src/index");


describe("User Service", () => {

    it("should return users", async () => {
        const res = await request(app).get("/users");

        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

});
