const subtract = require("../services/subtract.js");

describe("subtract", () => {
	test("subtracts 3 - 2 to equal 1", () => {
		expect(subtract(3, 2)).toEqual(1);
	});
});