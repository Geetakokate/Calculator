import { add } from '../src/calculator';

describe('Calculator', () => {
	test('input is empty string', () => {
		expect(add('')).toBe(0);
	});
	test('input string contains valid numbers', () => {
		expect(add('1,2')).toBe(3);
	});
});
