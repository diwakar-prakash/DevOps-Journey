const request = require("supertest");
const app = require("../src/app");

describe("API TESTS", () => {
  test("GET / should return hello message", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello DevOps");
  });

  test("GET /health should return status", async () => {
    const res = await request(app).get("/health");
    expect(res.body.status).toBe("UP");
  });
});
