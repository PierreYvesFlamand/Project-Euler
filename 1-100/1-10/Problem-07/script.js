/*
 * Problem 7
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13
 * we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

const TARGET = 10001;
let prime = 1;
let i;
let j = 1;
let target_prime = 0;

// Tant que target_prime vaut 0, c'est qu'il n'a pas encore été trouvé
while (target_prime == 0) {
    if (is_prime(prime)) {
        if (j++ == TARGET) {
            target_prime = prime;
        }
    }
    prime++;
}

console.log(target_prime);

// * FUNCTION * //
function is_prime(number) {
    let i;
    let sqrt;

    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else if (number % 2 !== 0) {
        sqrt = Math.ceil(Math.sqrt(number));
        for (i = 3; i < sqrt; i += 2) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
