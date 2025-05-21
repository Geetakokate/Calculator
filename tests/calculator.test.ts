import { add } from '../src/calculator';

describe('Calculator', () => {
	test('input is empty string', () => {
		expect(add('')).toBe(0);
	});

	test('should return addition of two valid numbers', () => {
		expect(add('1,2')).toBe(3);
	});

	test('should return -1 if not valid numbers', () => {
		expect(add('1,q')).toBe('Not a valid number');
	});

	test('should show error if negative numbers passed', () => {
		expect(add('-1')).toBe('Negative numbers not allowed -1');
	});

	test('should show error if negative numbers passed', () => {
		expect(add('-1,2,-3')).toBe('Negative numbers not allowed -1,-3');
	});
});
