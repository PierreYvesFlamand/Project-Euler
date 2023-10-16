/**
 * Problem 49 - Prime Permutations
 *
 * The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways:
 *       (i) each of the three terms are prime
 *      (ii) each of the 4-digit numbers are permutations of one another.
 *
 * There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.
 * What 12-digit number do you form by concatenating the three terms in this sequence?
 */

let answer;

for (let i = 1000; i < 10000; i++) {
    if (!isPrime(i)) continue;

    let increaser = 1;
    while (i + increaser * 2 < 10000) {
        let n1 = i;
        let n2 = i + increaser;
        let n3 = i + increaser * 2;

        if (isPrime(n2) && isPrime(n3)) {
            if (
                n1 !== 1487 &&
                isSameSets(new Set([...String(n1)].map(v => Number(v))), new Set([...String(n2)].map(v => Number(v)))) &&
                isSameSets(new Set([...String(n1)].map(v => Number(v))), new Set([...String(n3)].map(v => Number(v))))
            ) {
                answer = Number(`${n1}${n2}${n3}`);
            }
        }
        increaser++;
    }
}

module.exports = answer;

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function isSameSets(set1, set2) {
    return set1.size === set2.size && [...set1].every(set1Value => set2.has(set1Value));
}