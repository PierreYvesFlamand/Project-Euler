/**
 * Problem 5 - Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

const input = 20;
let number = 0;
let answer;

while (!answer) {
    number++;
    for (i = 1; i <= input; i++) {
        if (number % i !== 0) {
            break;
        }
        if (i === input) {
            answer = number;
        }
    }
}

module.exports = answer;