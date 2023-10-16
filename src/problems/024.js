/**
 * Problem 24 - Lexicographic Permutations
 * 
 * A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
 * If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
 *          012   021   102   120   201   210
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

const input1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const input2 = 1000000;
const lexicographicPermutations = getLexicographicPermutations(input1);
const answer = Number(lexicographicPermutations[input2 - 1]);

module.exports = answer;

function getLexicographicPermutations(digits) {
    const lexicographicPermutations = [];

    function permute(digits, lexicographicPermutationInFormation = []) {
        if (digits.length === 0) {
            lexicographicPermutations.push(lexicographicPermutationInFormation.join(''));
            return;
        }

        for (let i = 0; i < digits.length; i++) {
            const rest = [...digits.slice(0, i), ...digits.slice(i + 1)];
            permute(rest, [...lexicographicPermutationInFormation, digits[i]]);
        }
    }

    permute(digits);

    return lexicographicPermutations;
}