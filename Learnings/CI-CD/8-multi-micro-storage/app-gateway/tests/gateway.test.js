const request = require("supertest");
const app = require("../src/index");
const axios = require("axios");

jest.mock("axios");

describe("GET /users", () => {
  it("should return users", async () => {
    axios.get.mockResolvedValue({
      data: [{ id: 1, name: "Vivek" }]
    });

    const res = await request(app).get("/users");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

