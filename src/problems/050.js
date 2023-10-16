/**
 * Problem 50 - Consecutive Prime Sum
 * 
 * The prime 41, can be written as the sum of six consecutive primes:
 *          41 = 2 + 3 + 5 + 7 + 11 + 13.
 * 
 * This is the longest sum of consecutive primes that adds to a prime below one-hundred.
 * The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
 * Which prime, below one-million, can be written as the sum of the most consecutive primes?
 */

const input = 10 ** 6;
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
addPrimesUntil(primes, input);

let currentMaxConsecutive = 0;
for (let i = 0; i < primes.length; i++) {
    let sum = 0;
    let maxConsecutive = 0;
    for (let y = i; y < primes.length; y++) {
        maxConsecutive++;
        sum += primes[y];

        if(maxConsecutive > currentMaxConsecutive && sum < input && isPrime(sum)){
            currentMaxConsecutive = maxConsecutive;
            answer = sum;
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