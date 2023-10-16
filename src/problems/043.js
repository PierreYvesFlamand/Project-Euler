/**
 * Problem 43 - Sub-string Divisibility
 * 
 * The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.
 * Let d_1 be the 1st digit, d_2 be the 2nd digit, and so on. In this way, we note the following:
 * 
 * - d_2 d_3 d_4    = 406 is divisible by 2
 * - d_3 d_4 d_5    = 063 is divisible by 3
 * - d_4 d_5 d_6    = 635 is divisible by 5
 * - d_5 d_6 d_7    = 357 is divisible by 7
 * - d_6 d_7 d_8    = 572 is divisible by 11
 * - d_7 d_8 d_9    = 728 is divisible by 13
 * - d_8 d_9 d_{10} = 289 is divisible by 17
 * 
 * Find the sum of all 0 to 9 pandigital numbers with this property.
 */

let answer = 0;

for (const pandigitalNumberStr of getLexicographicPermutations('0123456789')) {
    if (pandigitalNumberStr[0] === 0) {
        continue;
    }

    const pandigitalNumber = Number(pandigitalNumberStr);

    if (isSubStringDivisible(pandigitalNumber)) {
        answer += pandigitalNumber;
    }
}

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

function isSubStringDivisible(number) {
    const primes = [2, 3, 5, 7, 11, 13, 17];
    const numberStr = String(number);

    for (let i = 1; i <= 7; i++) {
        const substring = parseInt(numberStr.slice(i, i + 3), 10);

        if (substring % primes[i - 1] !== 0) {
            return false;
        }
    }

    return true;
}