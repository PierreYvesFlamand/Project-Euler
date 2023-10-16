/**
 * Problem 46 - Goldbach's Other Conjecture
 *
 * It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.
 *
 *  9 =  7 + 2 * 1^2
 * 15 =  7 + 2 * 2^2
 * 21 =  3 + 2 * 3^2
 * 25 =  7 + 2 * 3^2
 * 27 = 19 + 2 * 2^2
 * 33 = 31 + 2 * 1^2
 *
 * It turns out that the conjecture was false.
 * What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
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

let i = 9;
while (!answer) {
    addPrimesUntil(primes, i);
    if (i % 2 === 1 && !primes.find(v => v === i)) {
        let isValid = false;

        for (const prime of primes) {
            if (isValid || prime > i) break;

            let baseSquare = 1;
            let sum;
            do {
                sum = prime + 2 * Math.pow(baseSquare, 2);
                baseSquare++;
                if (sum === i) isValid = true;
            } while (sum < i && !isValid);
        }

        if (!isValid) {
            answer = i;
        }
    }
    i++;
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