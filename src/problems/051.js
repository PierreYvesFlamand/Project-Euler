/**
 * Problem 51 - Prime Digit Replacements
 * 
 * By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.
 * By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers,
 * yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.
 * 
 * Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.
 */

let answer;
const arrangements = {};

for (let i = 10; ; i++) {
    if (answer) break;

    const numberStr = String(i);

    if (!arrangements[numberStr.length]) arrangements[numberStr.length] = generateAllArrangements(numberStr.length);

    for (const arrangement of arrangements[numberStr.length]) {
        if (arrangement[arrangement.length - 1] === false && Number(numberStr) % 2 === 0) continue;

        let primes = new Set();
        let nbNotPrimes = 0;

        for (let j = 0; j <= 9; j++) {
            if (nbNotPrimes === 3) break;

            const n = Number([...numberStr].map((n, i) => arrangement[i] ? j : n).join(''))
            if (String(n).length === numberStr.length && isPrime(n)) {
                primes.add(n);
            } else {
                nbNotPrimes++;
            }
        }

        if (primes.size >= 8) {
            answer = Array.from(primes)[0];
            break;
        }
    }
}

module.exports = answer;

function generateAllArrangements(n) {
    if (n === 0) return [[]];

    const arrangements = [];
    const smallerArrangements = generateAllArrangements(n - 1);

    for (const smallerArrangement of smallerArrangements) {
        arrangements.push([...smallerArrangement, true]);
        arrangements.push([...smallerArrangement, false]);
    }

    return arrangements;
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