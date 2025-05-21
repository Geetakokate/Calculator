// Add method will return sum of valid numbers. Else it'll return error message if not valid numbers or negative numbers in input string.
export const add = (inputString: string): any => {
	if (inputString.length === 0) return 0;

	let negativeNumbers: number[] = [];
	let isInvalidNumber: boolean = false;
	let sum = 0;

	inputString.split(',').map((num: string) => {
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
