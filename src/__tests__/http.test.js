import fetchData from "../http";

test("test http", () => {
    expect(fetchData).toThrow(Error);
});
