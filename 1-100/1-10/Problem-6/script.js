/*
* Problem 6
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

const TARGET = 100;
let sum_of_squares = 0, squares_of_sum = 0, difference;
let i;

for(i = 1; i <= TARGET; i++) {
    sum_of_squares += i * i;
}

// (n * (n+1)) / 2 = 1 + 2 + ... + (n - 1) + n
squares_of_sum = (TARGET * (TARGET + 1)) / 2;
squares_of_sum *= squares_of_sum;

difference = squares_of_sum - sum_of_squares;
console.log(difference);