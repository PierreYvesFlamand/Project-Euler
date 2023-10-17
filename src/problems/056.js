/**
 * Problem 56 - Powerful Digit Sum
 * 
 * A googol (10^{100}) is a massive number: one followed by one-hundred zeros; 
 * 100^{100} is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.
 * 
 * Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?
 */

const input = 100;
let answer = 0;

for (let a = 0n; a < input; a++) {
    for (let b = 0n; b < input; b++) {
        const digitalSum = String(a ** b).split('').reduce((sum, nStr) => sum += Number(nStr), 0);
        if (digitalSum > answer) answer = digitalSum;
    }
}

module.exports = answer;