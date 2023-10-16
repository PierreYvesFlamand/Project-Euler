/**
 * Problem 38 - Pandigital Multiples
 * 
 * Take the number 192 and multiply it by each of 1, 2, and 3:
 * 
 *              192 * 1 = 192
 *              192 * 2 = 384
 *              192 * 3 = 576
 * 
 * By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3).
 * The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).
 * What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ..., n) where n > 1?
 */

let answer = 0;

let n = 1;

while (getConcatenatedProduct(n, 2).length <= 9) {
    let mult = 2;
    while (getConcatenatedProduct(n, mult).length <= 9) {
        if (isPandigital1Through9(getConcatenatedProduct(n, mult))) {
            answer = answer < Number(getConcatenatedProduct(n, mult)) ? Number(getConcatenatedProduct(n, mult)) : answer;
        }
        mult++;
    }
    n++;
}

module.exports = answer;

function getConcatenatedProduct(n, maxMultiplier) {
    let result = '';
    for (let i = 1; i <= maxMultiplier; i++) {
        result += String(n * i);
    }
    return result;
}

function isPandigital1Through9(digits) {
    if (digits.length !== 9) return false;
    if (digits.includes('0')) return false;

    const set = new Set();
    digits.toString().split('').forEach(digit => set.add(digit));
    return set.size === 9;
}