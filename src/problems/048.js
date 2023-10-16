/**
 * Problem 48 - Self Powers
 *
 * The series, 1^1 + 2^2 + 3^3 + ... + 10^{10} = 10405071317.
 * Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^{1000}.
 */

const input = 1000;
let answer;

let n = 0n;
for (let i = 1n; i <= input; i++) {
    n += i ** i;
}

answer = Number(String(n).slice(String(n).length - 10, String(n).length));
module.exports = answer;