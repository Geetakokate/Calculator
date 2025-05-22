"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// Extracting numbers
// if user specified delimiters in string then extracting string by considering dynamic delimiter
// otherwise checking by , and \n delimiter
var extractNumbers = function (str) {
    if (str.startsWith('//')) {
        var newStr = str.substring(4, str.length);
        return newStr
            .split(new RegExp("([,\n".concat(str[2], "])")))
            .filter(function (_, index) { return index % 2 === 0; });
    }
    else {
        return str.split(/([,\n])/).filter(function (_, index) { return index % 2 === 0; });
    }
};
// Add method will return sum of valid numbers. Else it'll return error message if not valid numbers or negative numbers in input string.
var add = function (inputString) {
    // return sum as 0 if empty string in input
    if (inputString.length === 0)
        return 0;
    var negativeNumbers = [];
    var isInvalidNumber = false;
    var sum = 0;
    extractNumbers(inputString).map(function (num) {
        var parsedNumber = parseInt(num);
        // If condition will check if extracted character is other than number
        // Else will collet negative numbers to display if any and sum up positive numbers otherwise
        if (Number.isNaN(parsedNumber)) {
            isInvalidNumber = true;
            return;
        }
        else {
            if (parsedNumber < 0) {
                negativeNumbers.push(parsedNumber);
            }
            else {
                sum += parsedNumber;
            }
        }
    });
    if (isInvalidNumber)
        return 'Not a valid number';
    if (negativeNumbers.length > 0) {
        return "Negative numbers not allowed ".concat(negativeNumbers.join());
    }
    else {
        return sum;
    }
};
exports.add = add;
