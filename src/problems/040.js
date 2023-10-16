/**
 * Problem 40 - Champernowne's Constant
 * 
 * An irrational decimal fraction is created by concatenating the positive integers:
 *          0.12345678910{1}112131415161718192021...
 * 
 * It can be seen that the 12^th digit of the fractional part is 1.
 * If d_n represents the n^th digit of the fractional part, find the value of the following expression.
 *          d_1 * d_{10} * d_{100} * d_{1000} * d_{10000} * d_{100000} * d_{1000000}
 */

const input = [1, 10, 100, 1000, 10000, 100000, 1000000];
let answer;

let n = 1;
const array = [];

while (array.length < Math.max(...input)) {
    array.push(...String(n).split(''));
    n++;
}

answer = input.reduce((sum, i) => sum *= Number(array[i - 1]), 1);

module.exports = answer;