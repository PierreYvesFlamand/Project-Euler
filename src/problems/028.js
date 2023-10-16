/**
 * Problem 28 - Number Spiral Diagonals
 * 
 * Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
 * 
 *              (21) 22  23  24 (25)
 *               20  (7)  8  (9) 10
 *               19   6  (1)  2  11
 *               18  (5)  4  (3) 12
 *              (17) 16  15  14 (13)
 * 
 * It can be verified that the sum of the numbers on the diagonals is 101.
 * What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */

const input = 1001;
let answer;

const square = [];

for (let i = 0; i < input; i++) {
    square.push([]);
}

square[getCenter()][getCenter()] = 1;
let numberToAdd = 2;

for (let i = 1; i <= getCenter(); i++) {
    for (let y = 0; y < i + (i - 1); y++) {
        square[getCenter() + y - (i - 1)][getCenter() + i] = numberToAdd++;
    }

    for (let y = 0; y < i; y++) {
        square[getCenter() + i][getCenter() + i - y] = numberToAdd++;
    }

    for (let y = 0; y < i; y++) {
        square[getCenter() + i][getCenter() - y] = numberToAdd++;
    }

    for (let y = 0; y < i; y++) {
        square[getCenter() + i - y][getCenter() - i] = numberToAdd++;
    }

    for (let y = 0; y < i; y++) {
        square[getCenter() - y][getCenter() - i] = numberToAdd++;
    }

    for (let y = 0; y < i; y++) {
        square[getCenter() - i][getCenter() - i + y] = numberToAdd++;
    }

    for (let y = 0; y < i; y++) {
        square[getCenter() - i][getCenter() + y] = numberToAdd++;
    }

    square[getCenter() - i][getCenter() + i] = numberToAdd++;
}

answer = getDiagonalSum(square);

module.exports = answer;

function getCenter() {
    return (input - 1) / 2;
}

function getDiagonalSum(square) {
    let sum = 0;
    for (let i = 0; i < square.length; i++) {
        sum += square[i][i] + square[square.length - 1 - i][i];

        if (i === (square.length - 1) / 2) {
            sum -= square[i][i];
        }
    }
    return sum;
}