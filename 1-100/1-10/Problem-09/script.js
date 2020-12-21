/*
 * Problem 9
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *       a² + b² = c²
 * For example, 3² + 4² = 9 + 16 = 25 = 5².
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

let a,
    b,
    c = 3;
let product = 0;

while (product == 0) {
    for (b = 2; b < c; b++) {
        for (a = 1; a < b; a++) {
            if (a * a + b * b == c * c && a + b + c == 1000) {
                product = a * b * c;
            }
        }
    }
    c++;
}

console.log(product);
