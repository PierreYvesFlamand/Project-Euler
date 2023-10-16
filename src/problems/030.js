/**
 * Problem 30 - Digit Fifth Powers
 * 
 * Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
 * 
 *             1634 = 1^4 + 6^4 + 3^4 + 4^4
 *             8208 = 8^4 + 2^4 + 0^4 + 8^4
 *             9474 = 9^4 + 4^4 + 7^4 + 4^4
 * 
 * As 1 = 1^4 is not a sum it is not included.
 * The sum of these numbers is 1634 + 8208 + 9474 = 19316.
 * Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
 */

const input = 5;
let answer = 0;

const maxNumberOfDigits = findMaxNumberOfDigitsToTest(input);

for (let i = 10; i < Math.pow(10, maxNumberOfDigits); i++) {
    if (i === getSumOfPowerODigits(i, input)) {
        answer += i;
    }
}

module.exports = answer;

function findMaxNumberOfDigitsToTest(power) {
    let i = 2;
    while ((Math.pow(9, power) * i).toString().length >= i) {
        i++;
    }
    return i;
}

function getSumOfPowerODigits(number, power) {
    let sum = 0;
    number.toString().split('').forEach(element => {
        sum += Math.pow(Number(element), power);
    });
    return sum;
}