const request = require("supertest");
const app = require("../src/index");
const axios = require("axios");

jest.mock("axios");

describe("API Gateway", () => {

  it("should return users from user-service", async () => {

    axios.get.mockResolvedValue({
      data: {
        service: "User Service",
        data: [{ id: 1, name: "Vivek" }]
      }
    });

    const res = await request(app).get("/users");

    expect(res.statusCode).toBe(200);
    expect(res.body.service).toBe("User Service");
    expect(res.body.data.length).toBeGreaterThan(0);
  });


  it("should return products from product-service", async () => {

    axios.get.mockResolvedValue({
      data: {
        service: "Product Service",
        data: [{ id: 1, name: "Laptop" }]
      }
    });

    const res = await request(app).get("/products");

    expect(res.statusCode).toBe(200);
    expect(res.body.service).toBe("Product Service");
  });


  it("should return OK for health check", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("OK");
  });


  it("should return READY for readiness check", async () => {
    const res = await request(app).get("/ready");

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("READY");
  });

});