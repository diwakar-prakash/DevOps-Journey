const request = require("supertest");
const app = require("../app");

describe("Password Strength API", () => {

  it("Should return strong password", async () => {
    const res = await request(app)
      .post("/analyze-password")
      .send({ password: "Hello123@Strong" });

    expect(res.statusCode).toEqual(200);
    expect(res.body.strength).toBe("Strong");
  });

  it("Should return weak password", async () => {
    const res = await request(app)
      .post("/analyze-password")
      .send({ password: "123" });

    expect(res.body.strength).toBe("Weak");
  });

});