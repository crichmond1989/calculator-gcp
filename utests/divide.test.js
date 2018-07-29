const divide = require("../services/divide.js");

test("divide 6 / 3 to equal 2", () => {
	expect(divide(6, 3)).toEqual(2);
});

test("divide by 0 to equal Infinity", () => {
	expect(divide(6, 0)).toEqual(Infinity);
});