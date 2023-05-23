import sortPlayers from "../sortHealth";

test("test sortPlayers function", () => {
    const data = [
        { name: "мечник", health: 10 },
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
    ];
    const expectData = [
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
        { name: "мечник", health: 10 },
    ];

    const result = sortPlayers(data);
    expect(result).toEqual(expectData);
});
