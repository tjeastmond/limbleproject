import { Request } from "express";
import queryFilters from "../routes/queryFilters";
import { QueryFilters } from "../types/types";

describe("queryFilters", () => {
  it("should return empty arrays for workers and locations if query params are not strings", () => {
    const req = {
      query: { workers: null, locations: null, status: null },
    } as unknown as Request;

    const result: QueryFilters = queryFilters(req);
    expect(result.workers).toEqual([]);
    expect(result.locations).toEqual([]);
    expect(result.status).toBeUndefined();
  });

  it("should parse workers and locations correctly from query params", () => {
    const req = {
      query: { workers: "1,2,3", locations: "4,5,6", status: null },
    } as unknown as Request;

    const result: QueryFilters = queryFilters(req);
    expect(result.workers).toEqual([1, 2, 3]);
    expect(result.locations).toEqual([4, 5, 6]);
    expect(result.status).toBeUndefined();
  });

  it("should set status correctly if it is a string", () => {
    const req = {
      query: { workers: "1,2,3", locations: "4,5,6", status: "1" },
    } as unknown as Request;

    const result: QueryFilters = queryFilters(req);
    expect(result.workers).toEqual([1, 2, 3]);
    expect(result.locations).toEqual([4, 5, 6]);
    expect(result.status).toBe("1");
  });

  it("should set status to null if it is not a string", () => {
    const req = {
      query: { workers: "1,2,3", locations: "4,5,6", status: "0" },
    } as unknown as Request;

    const result: QueryFilters = queryFilters(req);
    expect(result.workers).toEqual([1, 2, 3]);
    expect(result.locations).toEqual([4, 5, 6]);
    expect(result.status).toBe("0");
  });

  it("should return false for non-string query params", () => {
    const req = {
      query: { workers: 123, locations: 456, status: true },
    } as unknown as Request;

    const result: QueryFilters = queryFilters(req);
    expect(result.workers).toEqual([]);
    expect(result.locations).toEqual([]);
    expect(result.status).toBeUndefined();
  });

  it("should return true for valid string query params", () => {
    const req = {
      query: { workers: "1,2,3", locations: "4,5,6", status: "1" },
    } as unknown as Request;

    const result: QueryFilters = queryFilters(req);
    expect(result.workers).toEqual([1, 2, 3]);
    expect(result.locations).toEqual([4, 5, 6]);
    expect(result.status).toBe("1");
  });

  it("should throw an error for invalid workers query param", () => {
    const req = { query: { workers: "1,a,2" } } as unknown as Request;
    expect(() => queryFilters(req)).toThrow("Invalid query string");
  });

  it("should throw an error for invalid locations query param", () => {
    const req = { query: { locations: "4,b,5" } } as unknown as Request;
    expect(() => queryFilters(req)).toThrow("Invalid query string");
  });
});
