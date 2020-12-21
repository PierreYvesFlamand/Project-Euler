/*
 * Problem 10
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

const TARGET = 2000000;
let number = 1;
let sum = 0;
let i;

while (number < TARGET) {
    if (is_prime(number)) {
        sum += number;
    }
    number++;
}

console.log(sum);

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
        for (i = 3; i <= sqrt; i += 2) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
