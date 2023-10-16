/**
 * Problem 47 - Distinct Primes Factors
 *
 * The first two consecutive numbers to have two distinct prime factors are:
 *
 *              14 = 2 * 7
 *              15 = 3 * 5
 *
 * The first three consecutive numbers to have three distinct prime factors are:
 *
 *              644 = 2^2 *  7 * 23
 *              645 =   3 *  5 * 43
 *              646 =   2 * 17 * 19
 *
 * Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?
 */

let answer;

const primes = [];
function addPrimesUntil(array, n) {
    while ((array[array.length - 1] || 0) <= n) {
        let newPrime = (array[array.length - 1] || 0) + 1;
        while (!isPrime(newPrime)) {
            newPrime++;
        }
        array.push(newPrime);
    };
}

let i = 1;
let valid = 0;
while (valid < 4) {
    addPrimesUntil(primes, i);
    if (primes.find(v => v === i)) {
        valid = 0;
        i++;
        continue;
    }

    const primeFactors = [];
    for (let y = 0; primes[y] * 2 <= i; y++) {
        if (i % primes[y] === 0) primeFactors.push(primes[y]);
    }

    if (primeFactors.length === 4) {
        valid++;
    } else {
        valid = 0;
    }
    i++;
}

answer = i - 4;
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