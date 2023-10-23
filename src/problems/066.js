/**
 * Problem 66 - Diophantine Equation
 * 
 * Consider quadratic Diophantine equations of the form:
 *              x^2 - Dy^2 = 1
 * 
 * For example, when D=13, the minimal solution in x is 649^2 - 13 * 180^2 = 1.
 * It can be assumed that there are no solutions in positive integers when D is square.
 * By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the following:
 * 
 *  3^2  - 2 * 2^2 = 1
 *  2^2  - 3 * 1^2 = 1
 * {9}^2 - 5 * 4^2 = 1
 *  5^2  - 6 * 2^2 = 1
 *  8^2  - 7 * 3^2 = 1
 * 
 * 
 * x^2 - d * y^2 = 1
 * x^2 - d * y^2 = 1 - x^2
 * - 1 - d * y^2 = - x^2
 * 1 + d * y^2 = x^2
 * (1 + d * y^2)^1/2 = x
 * 
 * 
 * (2 * 2^2)^1/2 = x
 * (8)^1/2 = x
 * 
 * Hence, by considering minimal solutions in x for D <= 7, the largest x is obtained when D=5.
 * Find the value of D <= 1000 in minimal solutions of x for which the largest value of x is obtained.
 */

let answer = 0;

for (let d = 2; d <= 1000; d++) {
    if (Math.sqrt(d) % 1 === 0) continue;

    for (let y = 1; ; y++) {
        const x = Math.sqrt(1 + d * (y ** 2));
        if (x % 1 === 0) {
            // console.log(`${x}^2 - ${d} * ${y}^2 = 1`);
            if(answer < x) answer = x;
            break;
        }
    }
}


module.exports = answer;