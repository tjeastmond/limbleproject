import request from "supertest";
import express, { Request, Response } from "express";
import asyncHandler from "../routes/asyncHandler";

const app = express();

app.get(
  "/test",
  asyncHandler(async (_req: Request, res: Response) => {
    res.status(200).send("Success");
  }),
);

app.get(
  "/error",
  asyncHandler(async (_req: Request, _res: Response) => {
    throw new Error("Test error");
  }),
);

describe("asyncHandler", () => {
  it("should handle successful async route", async () => {
    const response = await request(app).get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Success");
  });

  it("should handle errors in async route", async () => {
    const response = await request(app).get("/error");
    expect(response.status).toBe(500);
  });
});
