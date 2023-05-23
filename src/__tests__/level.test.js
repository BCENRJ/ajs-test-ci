import fetchData from "../http";
import getLevel from "../level";

jest.mock("../http");

beforeEach(() => { jest.resetAllMocks(); });

test.each([
    ["ok", 1, 5],
    ["ok", 2, 10],
])("test getLevel function %s status %i level", (status, id, level) => {
    fetchData.mockReturnValue({ status, level });
    const result = getLevel(id);
    expect(result).toBe(`Ваш текущий уровень: ${level}`);
});

test("test getLevel function", () => {
    fetchData.mockReturnValue({ status: "null" });
    const result = getLevel(1);
    expect(result).toBe("Информация об уровне временно недоступна");
});
