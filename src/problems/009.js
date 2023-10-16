/**
 * Problem 9 - Special Pythagorean triplet
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *       a² + b² = c²
 * For example, 3² + 4² = 9 + 16 = 25 = 5².
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

let answer;
let c = 3;

while (!answer) {
    for (let b = 2; b < c; b++) {
        for (let a = 1; a < b; a++) {
            if (a * a + b * b === c * c && a + b + c === 1000) {
                answer = a * b * c;
            }
        }
    }
    c++;
}

module.exports = answer;
