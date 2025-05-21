const isNumber = (str: string): boolean => {
	console.info(str, '1');
	if (typeof str != 'string') return false;

	return str.length > 0 && !isNaN(parseInt(str, 10));
};

export const add = (inputString: string): number => {
	if (inputString.length === 0) return 0;

	const sum: number = inputString
		.split(',')
		.reduce((sum: number, num: string): number => sum + parseInt(num), 0);

	return sum >= 0 ? sum : -1;
};
