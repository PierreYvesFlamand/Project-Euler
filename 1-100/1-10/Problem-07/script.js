/*
 * Problem 7
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13
 * we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

let answer = null;
let prime = 0;
let count = 0;

while (answer === null) {
    if (is_prime(++prime)) {
        if (++count === 10001) {
            answer = prime;
        }
    }
}

// Answer : 104743
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
