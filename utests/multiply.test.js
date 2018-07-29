const multiply = require("../services/multiply.js");

test("multiplies 2 * 3 to equal 6", () => {
	expect(multiply(2, 3)).toEqual(6);
});