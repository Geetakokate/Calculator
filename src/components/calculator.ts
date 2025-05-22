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

//method will return result of valid numbers. Else it'll return error message if not valid numbers or negative numbers in input string.
const calculate = (inputString: string, operator: string): any => {
	// return output as 0 if empty string in input
	if (inputString.length === 0) return 0;

	const operatorFunctionMapping: operatorFunctionMappingType = {
		'+': addition,
	};
	let negativeNumbers: number[] = [];
	let isInvalidNumber: boolean = false;
	let result = 0;

	extractNumbers(inputString).map((num: string) => {
		const parsedNumber = parseInt(num);

		// If condition will check if extracted character is other than number
		// Else will collect negative numbers to display if any and perform specific operation on positive numbers
		if (Number.isNaN(parsedNumber)) {
			isInvalidNumber = true;
			return;
		} else {
			if (parsedNumber < 0) {
				negativeNumbers.push(parsedNumber);
			} else {
				result = operatorFunctionMapping[operator](
					result,
					parsedNumber
				);
			}
		}
	});

	if (isInvalidNumber) return 'Not a valid number';

	if (negativeNumbers.length > 0) {
		return `Negative numbers not allowed ${negativeNumbers.join()}`;
	} else {
		return `Addition is ${result}`;
	}
};

export const add = (inputString: string): any => {
	return calculate(inputString, '+');
};

export default add;
