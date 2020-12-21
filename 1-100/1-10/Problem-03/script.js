/*
 * Problem 3
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

let answer;
let target = 600851475143;
let prime = 1;

while (target !== 1) {
    if (is_prime(prime)) {
        while (target % prime === 0) {
            target /= prime;
            answer = prime;
        }
    }
    prime++;
}

// Answer : 6857
document.getElementById('answer').textContent = answer;

function is_prime(number) {
    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else if (number % 2 !== 0) {
        for (let i = 3, sqrt = Math.floor(Math.sqrt(number)); i <= sqrt; i += 2) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
