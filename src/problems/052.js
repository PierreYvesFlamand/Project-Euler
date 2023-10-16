/**
 * Problem 52 - Permuted Multiples
 * 
 * It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.
 * Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
 */

let answer;

let i = 1;
while (!answer) {
    if (
        hasSameNumbers(i, 2 * i) &&
        hasSameNumbers(i, 3 * i) &&
        hasSameNumbers(i, 4 * i) &&
        hasSameNumbers(i, 5 * i) &&
        hasSameNumbers(i, 6 * i)
    ) answer = i;
    i++;
}

module.exports = answer;

function hasSameNumbers(n1, n2) {
    return isSameSets(new Set([...String(n1)]), new Set([...String(n2)]));
}

function isSameSets(set1, set2) {
    return set1.size === set2.size && [...set1].every(set1Value => set2.has(set1Value));
}