/**
 * Problem 16 - Power digit sum
 * 
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2^1000?
 */

const input = 1000;
let answer;
let number = [2];
let report;

for (let i = 1; i < input; i++) {
    report = false;

    number = number.map((num) => {
        let temp = num * 2;

        if (report) {
            temp++;
            report = false;
        }
        if (temp >= 10) {
            temp -= 10;
            report = true;
        }

        return temp;
    });

    if (report) {
        number.push(1);
    }
}

answer = number.reduce((a, b) => a + b);

module.exports = answer;
