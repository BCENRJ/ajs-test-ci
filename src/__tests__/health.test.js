import checkHealth from "../health";

test.each(
    [
        ["маг", 90, "healthy"],
        ["лучник", 45, "wounded"],
        ["мечник", 14, "critical"],
    ],
)("testing checkHealth func %s name and %i health", (name, health, toBeResult) => {
    const result = checkHealth({ name, health });
    expect(result).toBe(toBeResult);
});
