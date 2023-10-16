/**
 * Problem 33 - Digit Cancelling Fractions
 * 
 * The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.
 * We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
 * There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.
 * If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
 */

let answer;
let numerator = 1;
let denominator = 1;

for (let a = 1; a < 100; a++) {
    for (let b = 1; b < 100; b++) {
        if (a === b) continue;
        if (a / b > 1) continue;

        const sameDigit = find2SameDigit(a, b);
        if (!sameDigit) continue;

        const newA = Number(String(a).replace(sameDigit, ''));
        const newB = Number(String(b).replace(sameDigit, ''));

        if (a / b === newA / newB) {
            numerator *= newA;
            denominator *= newB;
        }
    }
}

answer = denominator / numerator;
module.exports = answer;

function find2SameDigit(n1, n2) {
    firstN1Digit = Math.floor(n1 / 10);
    secondN1Digit = n1 % 10;
    firstN2Digit = Math.floor(n2 / 10);
    secondN2Digit = n2 % 10;

    if (firstN1Digit === firstN2Digit || firstN1Digit === secondN2Digit) return firstN1Digit;
    if (secondN1Digit === firstN2Digit || secondN1Digit === secondN2Digit) return secondN1Digit;
    return null;
}