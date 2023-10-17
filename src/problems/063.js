/**
 * Problem 63 - Powerful Digit Counts
 * 
 * The 5-digit number, 16807=7^5, is also a fifth power. Similarly, the 9-digit number, 134217728=8^9, is a ninth power.
 * How many n-digit positive integers exist which are also an nth power?
 */

let answer = 0;

for (let i = 2n; i < 30n; i++) {
    let found = false
    let n = 1n;
    while (BigInt(String(n ** i).length) <= i) {
        if (BigInt(String(n ** i).length) === i) {
            answer++;
            found = true;
        }
        n++;
    }

    if (!found) break;
}

module.exports = answer;