/**
 * Problem 39 - Integer Right Triangles
 * 
 * If p is the perimeter of a right angle triangle with integral length sides, {a, b, c}, there are exactly three solutions for p = 120.
 * {20,48,52}, {24,45,51}, {30,40,50}
 * For which value of p <= 1000, is the number of solutions maximised?
 */

const input = 1000;
let answer;
let maxSolutions = 0;

for (let i = 3; i <= input; i++) {
    let solutions = 0;

    for (let a = 1; a < i; a++) {
        for (let b = 1; b < i; b++) {
            if (a + b >= i) continue;
            const c = getC(a, b);

            if (a + b + c === i) {
                solutions++;
            }
        }
    }

    if (solutions > maxSolutions) {
        maxSolutions = solutions;
        answer = i;
    }
}

module.exports = answer;

function getC(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}