/**
 * Problem 57 - Square Root Convergents
 * 
 * It is possible to show that the square root of two can be expressed as an infinite continued fraction.
 * 2^{1/2} = 1 + 1 /{2 + 1 /{2 + 1 /{2 + ...}}}
 * 
 * By expanding this for the first four iterations, we get:
 * 1 + 1/2 = 3/2 = 1.5
 * 1 + 1 / {2 + 1/2} = 7/5 = 1.4
 * 1 + 1 / {2 + 1 / {2 + 1/2}} = {17}/{12} = 1.41666...
 * 1 + 1 / {2 + 1 / {2 + 1 / {2 + 1/2}}} = {41}/{29} = 1.41379...
 * 
 * The next three expansions are {99}/{70}, {239}/{169}, and {577}/{408}, but the eighth expansion, {1393}/{985}, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.
 * In the first one-thousand expansions, how many fractions contain a numerator with more digits than the denominator?
 */

let input = 1000;
let answer = 0;

let numerator = 0n;
let denominator = 1n;
for (let i = 0; i < input; i++) {
    let tmpDenominator = denominator;
    denominator = numerator + 2n * denominator;
    numerator = tmpDenominator;

    if (String(numerator + denominator).length > String(denominator).length) answer++;
}

module.exports = answer;