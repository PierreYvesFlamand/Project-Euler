/**
 * Problem 35 - Circular Primes
 * 
 * The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
 * How many circular primes are there below one million?
 */

const input = 1000000;
let answer = 0;

for (let i = 2; i < input; i++) {
    if (getAllRatations(i).reduce((isAllPrime, n) => isAllPrime = isAllPrime === false ? false : isPrime(n), true)) {
        answer++;
    }
}

module.exports = answer;

function getAllRatations(n) {
    if (n < 10) return [n];

    const rotations = new Set();

    for (let i = 0; i < String(n).length; i++) {
        const rotation = String(n).slice(i) + String(n).slice(0, i);
        rotations.add(Number(rotation));
    }

    return Array.from(rotations);
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}