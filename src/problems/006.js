/**
 * Problem 6 - Sum square difference
 *
 * The sum of the squares of the first ten natural numbers is
 *       1² + 2² + ... + 10² = 385
 *
 * The square of the sum of the first ten natural numbers is
 *       (1 + 2 + ... + 10)² = 55² = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
 *       3025 - 385 = 2640
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

const input = 100;
let answer;
let sum_of_squares = 0;
let square_of_sums;

for (let i = 1; i <= input; i++) {
    sum_of_squares += i * i;
}

// (n * (n+1)) / 2   ===>   sum(1 -> n) = 1 + 2 + ... + (n - 1) + n
square_of_sums = (input * (input + 1)) / 2;
square_of_sums *= square_of_sums;

answer = square_of_sums - sum_of_squares;

module.exports = answer;

