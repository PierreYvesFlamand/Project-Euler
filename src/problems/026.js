/**
 * Problem 26 - Reciprocal Cycles
 * 
 * A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:
 * 
 *                  1/2 = 0.5
 *                  1/3 = 0.(3)
 *                  1/4 = 0.25
 *                  1/5 = 0.2
 *                  1/6 = 0.1(6)
 *                  1/7 = 0.(142857)
 *                  1/8 = 0.125
 *                  1/9 = 0.(1)
 *                  1/10 = 0.1
 * 
 * Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.
 * Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 */

const input = 1000;
let currentMaxRecurringCycleLength = 0;
let answer;

for (let i = 2; i < input; i++) {
    const recurringCycleLength = calculateRecurringCycleLength(1, i);

    if (recurringCycleLength > currentMaxRecurringCycleLength) {
        currentMaxRecurringCycleLength = recurringCycleLength;
        answer = i;
    }
}

function calculateRecurringCycleLength(numerator, denominator) {
    const recurringCycleMap = new Map();
    let remainder = numerator % denominator;

    while (remainder !== 0 && !recurringCycleMap.has(remainder)) {
        recurringCycleMap.set(remainder, recurringCycleMap.size);
        remainder *= 10;
        remainder %= denominator;
    }

    if (remainder !== 0) {
        return recurringCycleMap.size;
    } else {
        return 0;
    }
}


module.exports = answer;