/**
 * Problem 3 - Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

let input = 600851475143;
let answer;
let prime = 1;

while (input !== 1) {
    prime = getTheNextPrime(prime);
    while (input % prime === 0) {
        input /= prime;
        answer = prime;
    }
}

module.exports = answer;

function getTheNextPrime(number) {
    do {
        number++;
    } while (!isPrime(number));
    return number;
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