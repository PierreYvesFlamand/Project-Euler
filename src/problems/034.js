/**
 * Problem 34 - Digit Factorials
 * 
 * 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
 * Find the sum of all numbers which are equal to the sum of the factorial of their digits.
 * 
 * Note: As 1! = 1 and 2! = 2 are not sums they are not included.
 */

let answer = 0;

let maxDigit = 1;
while (String(factorial(9) * maxDigit).length > maxDigit) {
    maxDigit++;
}

for (let i = 10; i < Math.pow(10, maxDigit); i++) {
    if (String(i).split('').reduce((sum, i) => sum += factorial(i), 0) === i) {
        answer += i;
    }
}

module.exports = answer;

function factorial(num) {
    let sum = 1;
    for (let i = 2; i <= num; i++) sum *= i;
    return sum;
}