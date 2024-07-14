import request from "supertest";
import express from "express";
import errorHandler from "../routes/errorHandler";

describe("Error Handler Middleware", () => {
  let app: express.Express;

  beforeEach(() => {
    app = express();
    app.get("/error", () => {
      throw new Error("Test Error");
    });
    app.use(errorHandler);
  });

  it("should handle errors and respond with 500 status", async () => {
    const response = await request(app).get("/error");
    expect(response.status).toBe(500);
    expect(response.text).toBe("Internal Server Error");
  });

  it("should log the error", async () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation();
    await request(app).get("/error");
    expect(consoleSpy).toHaveBeenCalledWith("Error: Error: Test Error");
    consoleSpy.mockRestore();
  });
});
