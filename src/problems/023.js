/**
 * Problem 23 - Non-Abundant Sums
 * 
 * A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
 * For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
 * A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
 * 
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.
 * By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.
 * However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
 * Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

let answer = 0;
const abundantNumbers = [];

for (let i = 1; i <= 28123; i++) {
    if (i < getProperDivisorsSum(i)) abundantNumbers.push(i);
}

const abundantNumbersSums = new Set();
for (const abundantNumber1 of abundantNumbers) {
    for (const abundantNumber2 of abundantNumbers) {
        abundantNumbersSums.add(abundantNumber1 + abundantNumber2);
    }
}

for (let y = 1; y <= 28123; y++) {
    if (!abundantNumbersSums.has(y)) answer += y;
}

module.exports = answer;

function getProperDivisorsSum(number) {
    let divisorsSum = 1;
    let currentDivisor = 2;
    while (currentDivisor <= number / 2) {
        if ((number / currentDivisor) % 1 === 0) {
            divisorsSum += currentDivisor;
        }
        currentDivisor++;
    }
    return divisorsSum;
}