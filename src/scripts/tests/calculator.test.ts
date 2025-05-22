import { add } from '../calculator';

describe('Calculator', () => {
	describe('add numbers', () => {
		test('input is empty string', () => {
			expect(add('')).toBe(0);
		});

		test('should return addition of two valid numbers', () => {
			expect(add('1,2')).toBe(3);
		});

		test('should return addition of multiple numbers', () => {
			expect(add('1,2,3,4,5')).toBe(15);
		});

		test('should return addition of valid numbers if delimiter is \n', () => {
			expect(add('1\n2,3')).toBe(6);
		});

		test('it should return addition of given number with user provided delimiter', () => {
			expect(add('//;\n1;2')).toBe(3);
		});

		test('it show error if negative numbers', () => {
			expect(add('//;\n1;-2')).toBe('Negative numbers not allowed -2');
		});

		test('should return not valid numbers', () => {
			expect(add('1,q')).toBe('Not a valid number');
		});

		test('should show error if negative numbers passed', () => {
			expect(add('-1')).toBe('Negative numbers not allowed -1');
		});

		test('should show error if negative numbers passed', () => {
			expect(add('-1,2,-3')).toBe('Negative numbers not allowed -1,-3');
		});
	});
});
