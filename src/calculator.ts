// Extracting numbers by considering , and \n delimiters will be used
const extractNumbers = (str: string) =>
	str.split(/([,\n])/).filter((_, index) => index % 2 === 0);

// Add method will return sum of valid numbers. Else it'll return error message if not valid numbers or negative numbers in input string.
export const add = (inputString: string): any => {
	if (inputString.length === 0) return 0;

	let negativeNumbers: number[] = [];
	let isInvalidNumber: boolean = false;
	let sum = 0;

	extractNumbers(inputString).map((num: string) => {
		const parsedNumber = parseInt(num);

		if (Number.isNaN(parsedNumber)) {
			isInvalidNumber = true;
			return;
		} else {
			if (parsedNumber < 0) {
				negativeNumbers.push(parsedNumber);
			} else {
				sum += parsedNumber;
			}
		}
	});

	if (isInvalidNumber) return 'Not a valid number';

	if (negativeNumbers.length > 0) {
		return `Negative numbers not allowed ${negativeNumbers.join()}`;
	} else {
		return sum;
	}
};
