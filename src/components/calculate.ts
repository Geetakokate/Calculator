type Addition = (num1: number, num2: number) => number;

interface operatorFunctionMappingType {
	[key: string]: Addition;
}

// Extracting numbers
// if user specified delimiters in string then extracting string by considering dynamic delimiter
// otherwise checking by , and \n delimiter
const extractNumbers = (str: string) => {
	if (str.startsWith('//')) {
		const newStr = str.substring(4, str.length);

		return newStr
			.split(new RegExp(`([,\n${str[2]}])`))
			.filter((_, index) => index % 2 === 0);
	} else {
		return str.split(/([,\n])/).filter((_, index) => index % 2 === 0);
	}
};

const addition = (num1: number, num2: number) => num1 + num2;
const subtraction = (num1: number, num2: number) => num1 - num2;
const multiplication = (num1: number, num2: number) => num1 * num2;
const division = (num1: number, num2: number) => num1 / num2;

//method will return result of valid numbers. Else it'll return error message if not valid numbers or negative numbers in input string.
const calculate = (inputString: string, operator: string): any => {
	// return output as 0 if empty string in input
	if (inputString.length === 0) return 0;

	const operatorFunctionMapping: operatorFunctionMappingType = {
		add: addition,
		subtract: subtraction,
		multiply: multiplication,
		divide: division,
	};
	let negativeNumbers: number[] = [];
	let isInvalidNumber: boolean = false;
	const numbers = extractNumbers(inputString);
	let result = numbers.length > 0 ? parseInt(numbers[0]) : 0;

	const fn = operatorFunctionMapping[operator];
	if (!fn) return 'Invalid operator';

	const parsedNumbers: number[] = [];

	for (const num of numbers) {
		const parsed = Number(num);
		if (Number.isNaN(parsed)) {
			isInvalidNumber = true;
			break;
		}
		if (parsed < 0) {
			negativeNumbers.push(parsed);
		}
		parsedNumbers.push(parsed);
	}

	if (isInvalidNumber) return 'Not a valid number';
	if (negativeNumbers.length > 0) {
		return `Negative numbers not allowed ${negativeNumbers.join()}`;
	}

	if (parsedNumbers.length === 0) return 0;

	result = parsedNumbers[0];
	for (let i = 1; i < parsedNumbers.length; i++) {
		const current = parsedNumbers[i];
		if (operator === 'divide' && current === 0) {
			return 'Division by zero';
		}
		result = fn(result, current);
	}

	return `Result is ${result}`;
};

export default calculate;
