import { QueryFilters } from "../types/types";
import parseFilters from "../models/parseFilters";

describe("parseFilters", () => {
  test("should return base query when no filters are provided", () => {
    const filters: QueryFilters = { workers: [], locations: [], status: "" };
    const result = parseFilters(filters);
    expect(result).toBe("where 1=1");
  });

  test("should add workers filter when workers are provided", () => {
    const filters: QueryFilters = {
      workers: [1, 2, 3],
      locations: [],
      status: "",
    };

    const result = parseFilters(filters);
    expect(result).toBe("where 1=1 and lt.worker_id in (1,2,3)");
  });

  test("should add locations filter when locations are provided", () => {
    const filters: QueryFilters = {
      workers: [],
      locations: [4, 5, 6],
      status: "",
    };

    const result = parseFilters(filters);
    expect(result).toBe("where 1=1 and t.location_id in (4,5,6)");
  });

  test("should add status filter when status is provided", () => {
    const filters: QueryFilters = { workers: [], locations: [], status: "1" };
    const result = parseFilters(filters);
    expect(result).toBe("where 1=1 and t.status = 1");
  });

  test("should handle all filters together", () => {
    const filters: QueryFilters = { workers: [1], locations: [2], status: "0" };
    const result = parseFilters(filters);
    expect(result).toBe(
      "where 1=1 and lt.worker_id in (1) and t.location_id in (2) and t.status = 0",
    );
  });

  test("should handle worst case with all filters empty", () => {
    const filters: QueryFilters = { workers: [], locations: [], status: "" };
    const result = parseFilters(filters);
    expect(result).toBe("where 1=1");
  });

  test("should handle worst case with all filters set", () => {
    const filters: QueryFilters = {
      workers: [1, 2, 3, 4, 5],
      locations: [6, 7, 8, 9, 10],
      status: "1",
    };
    const result = parseFilters(filters);
    expect(result).toBe(
      "where 1=1 and lt.worker_id in (1,2,3,4,5) and t.location_id in (6,7,8,9,10) and t.status = 1",
    );
  });
});
