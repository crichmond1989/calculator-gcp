const subtract = require("../services/subtract.js");

test("subtracts 3 - 2 to equal 1", () => {
	expect(subtract(3, 2)).toEqual(1);
});