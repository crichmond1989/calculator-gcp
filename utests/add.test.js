const add = require("../services/add.js");

describe("add", () => {
	test("adds 1 + 2 to equal 3", () => {
		expect(add(1, 2)).toEqual(3);
	});
});