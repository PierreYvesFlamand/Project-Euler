/**
 * Problem 53 - Combinatoric Selections
 * 
 * There are exactly ten ways of selecting three from five, 12345:
 *      123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
 * 
 * In combinatorics, we use the notation, (5 3) = 10.
 * In general, (n r) = n!/r!(n-r)!, where r <= n, n! = n * (n-1) * ... * 3 * 2 * 1, and 0! = 1.
 * 
 * It is not until n = 23, that a value exceeds one-million: ({23} {10}) = 1144066.
 * How many, not necessarily distinct, values of (n r) for 1 <= n <= 100, are greater than one-million?
 */

let answer = 0;

for (let n = 1; n <= 100; n++) {
    for (let r = 1; r <= n; r++) {
        if (getResult(n, r) > 10 ** 6) answer++;
    }
}

module.exports = answer;

function getResult(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function factorial(num) {
    let sum = 1;
    for (let i = 2; i <= num; i++) sum *= i;
    return sum;
}