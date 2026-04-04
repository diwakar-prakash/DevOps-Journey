const request = require("supertest");

const app = require("../src/index");

describe("Order Service", () => {

    it("should return orders", async () => {
        const res = await request(app).get("/orders");

        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

});
