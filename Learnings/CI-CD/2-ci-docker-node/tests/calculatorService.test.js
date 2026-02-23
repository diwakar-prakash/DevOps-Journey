const { add } = require('../services/calculatorService');

test('addition of 2 + 3 is equals to 5', () => {
	expect(add(2, 3)).toBe(5);
});


