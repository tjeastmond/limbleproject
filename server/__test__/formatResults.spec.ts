import formatResults from "../routes/formatResults";

describe("formatResults", () => {
  it("should return status 200 and success message when data is not empty", () => {
    const data = { key: "value" };
    const result = formatResults(data);
    expect(result.status).toBe(200);
    expect(result.message).toBe("Success");
    expect(result.length).toBe(1);
    expect(result.data).toEqual(data);
  });

  it("should return status 404 and no results message when data is empty", () => {
    const data = {};
    const result = formatResults(data);
    expect(result.status).toBe(404);
    expect(result.message).toBe("No results found");
    expect(result.length).toBe(0);
    expect(result.data).toEqual([]);
  });

  it("should handle data with multiple keys correctly", () => {
    const data = { key1: "value1", key2: "value2" };
    const result = formatResults(data);
    expect(result.status).toBe(200);
    expect(result.message).toBe("Success");
    expect(result.length).toBe(2);
    expect(result.data).toEqual(data);
  });
});
