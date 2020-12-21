/*
 * Problem 3
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

let number = 600851475143,
    prime = 1,
    i,
    biggest_prime;

// Quand number vaut 1 la décomposition en facteur premier est finie
while (number !== 1) {
    if (is_prime(prime)) {
        // Décomposition de number le plus possible avec le nombre premier
        while (number % prime == 0) {
            number /= prime;
            biggest_prime = prime;
        }
    }
    prime++;
}

console.log(biggest_prime);

// * FUNCTION * //
function is_prime(number) {
    let i, sqrt;

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
