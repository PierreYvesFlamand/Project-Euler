/**
 * Problem 21 - Amicable Numbers
 * 
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 * If d(a) = b and d(b) = a, where a != b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 * Evaluate the sum of all the amicable numbers under 10000.
 */

const input = 10000;
let answer = 0;
const arrayOfSumOfProperDivisors = [];
const amicableNumbers = new Set();


for (let i = 1; i <= input; i++) {
    arrayOfSumOfProperDivisors.push(getProperDivisorsSum(i));
}

arrayOfSumOfProperDivisors.forEach((sumOfProperDivisors, index) => {
    const a = index + 1;
    const b = sumOfProperDivisors;

    if (a === b) return;
    if (arrayOfSumOfProperDivisors[b - 1] === a) {
        amicableNumbers.add(a);
    }
});

for (const amicableNumber of amicableNumbers) {
    answer += amicableNumber;
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