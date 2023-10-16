/**
 * Problem 37 - Truncatable Primes
 * 
 * The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7.
 * Similarly we can work from right to left: 3797, 379, 37, and 3.
 * Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
 * 
 * NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
 */

let input = 11;
let answer = 0;
let n = 10 - 1;

while (input) {
    let shouldStop = false;
    n++;
    if (!isPrime(n)) continue;
    for (let i = 1; i < String(n).length; i++) {
        if (shouldStop) continue;

        if (!isPrime(n % Math.pow(10, i))) shouldStop = true;
        if (!isPrime(Math.floor(n / Math.pow(10, i)))) shouldStop = true;
    }
    if (!shouldStop) {
        answer += n
        input--;
    }
}

module.exports = answer;

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}