/**
 * Problem 20 - Factorial Digit Sum
 * 
 * n! means n * (n - 1) * ... * 3 * 2 * 1.
 * For example, 10! = 10 * 9 * ... * 3 * 2 * 1 = 3628800, and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 * Find the sum of the digits in the number 100!.
 */

const input = 100n;
let answer = factorial(input).toString().split('').reduce((a, x) => a + Number(x), 0);

module.exports = answer;

function factorial(number) {
    let sum = 1n;
    for (let i = 2n; i <= number; i++) sum *= i;
    return sum;
}