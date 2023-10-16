/**
 * Problem 7 - 10001st prime
 * 
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13
 * We can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

let answer;
let prime = 0;
let count = 0;

while (!answer) {
    if (isPrime(++prime)) {
        if (++count === 10001) {
            answer = prime;
        }
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
