import calculate from '../calculate';

describe('Calculator', () => {
	describe('add numbers', () => {
		test('input is empty string', () => {
			expect(calculate('', 'add')).toBe(0);
		});

		test('should return addition of two valid numbers', () => {
			expect(calculate('1,2', 'add')).toBe('Result is 3');
		});

		test('should return addition of multiple numbers', () => {
			expect(calculate('1,2,3,4,5', 'add')).toBe('Result is 15');
		});

		test('should return addition of valid numbers if delimiter is \n', () => {
			expect(calculate('1\n2,3', 'add')).toBe('Result is 6');
		});

		test('it should return addition of given number with user provided delimiter', () => {
			expect(calculate('//;\n1;2', 'add')).toBe('Result is 3');
		});

		test('it show error if negative numbers', () => {
			expect(calculate('//;\n1;-2', 'add')).toBe(
				'Negative numbers not allowed -2'
			);
		});

		test('should return not valid numbers', () => {
			expect(calculate('1,q', 'add')).toBe('Not a valid number');
		});

		test('should show error if negative numbers passed', () => {
			expect(calculate('-1', 'add')).toBe(
				'Negative numbers not allowed -1'
			);
		});
	});
});
