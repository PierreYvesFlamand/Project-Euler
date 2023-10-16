/**
 * Problem 32 - Pandigital Products
 * 
 * We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
 * 
 * The product 7254 is unusual, as the identity, 39 * 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.
 * 
 * Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
 * 
 * HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
 * 
 */

const pandigital1Through9 = new Set();
let answer = 0;

for (let a = 1; a < 100; a++) {
    for (let b = 1; b < 10000; b++) {
        const product = a * b;
        if (isPandigital1Through9(String(a) + String(b) + String(product))) {
            pandigital1Through9.add(product);
        }
    }
}

for (const value of pandigital1Through9) {
    answer += value;
}

module.exports = answer;

function isPandigital1Through9(digits) {
    if (digits.length !== 9) return false;
    if (digits.includes('0')) return false;

    const set = new Set();
    digits.toString().split('').forEach(digit => set.add(digit));
    return set.size === 9;
}