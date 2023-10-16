/**
 * Problem 41 - Pandigital Prime
 * 
 * We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.
 * What is the largest n-digit pandigital prime that exists?
 * 
 * Personnal hint : 
 * - Don't try every number from 1 -> 1 000 000 000 (too long)
 * - Generating pandigials is probably faster
 *          - Only 409 113 pandigials
 *          - Onlye 225 090 even pandigials 
 */

let answer;

let pandigitalNumbers = [
    ...generatePandigitalNumbers(String(1)),
    ...generatePandigitalNumbers(String(2)),
    ...generatePandigitalNumbers(String(3)),
    ...generatePandigitalNumbers(String(4)),
    ...generatePandigitalNumbers(String(5)),
    ...generatePandigitalNumbers(String(6)),
    ...generatePandigitalNumbers(String(7)),
    ...generatePandigitalNumbers(String(8)),
    ...generatePandigitalNumbers(String(9))
];

// // Error : Maximum call stack size exceeded
// for (let i = 1; i <= 9; i++) {
//     pandigitalNumbers.push(...generatePandigitalNumbers(String(i)));
// }

pandigitalNumbers = pandigitalNumbers.map(s => Number(s)).filter(n => n % 2 === 1).sort((a, b) => a - b);

for (let y = pandigitalNumbers.length - 1; y >= 0; y--) {
    if (isPrime(pandigitalNumbers[y])) {
        answer = pandigitalNumbers[y];
        break;
    }
}

module.exports = answer;

function generatePandigitalNumbers(n) {
    let number = '';

    for (let i = 1; i <= n; i++) {
        number += String(i);
    }

    return getLexicographicPermutations(number);
}

function getLexicographicPermutations(digits) {
    const lexicographicPermutations = [];
    const digitsArray = [...digits];

    while (true) {
        lexicographicPermutations.push(digitsArray.join(''));

        let i = digitsArray.length - 2;

        // Find the largest index i such that digitsArray[i] < digitsArray[i+1]
        while (i >= 0 && digitsArray[i] >= digitsArray[i + 1]) {
            i--;
        }

        // If no such index is found, we have generated all permutations
        if (i === -1) {
            break;
        }

        let j = digitsArray.length - 1;

        // Find the largest index j such that digitsArray[j] > digitsArray[i]
        while (digitsArray[j] <= digitsArray[i]) {
            j--;
        }

        // Swap digitsArray[i] and digitsArray[j]
        [digitsArray[i], digitsArray[j]] = [digitsArray[j], digitsArray[i]];

        // Reverse the portion of the array to the right of i
        const reversed = digitsArray.splice(i + 1).reverse();
        digitsArray.push(...reversed);
    }

    return lexicographicPermutations;
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}