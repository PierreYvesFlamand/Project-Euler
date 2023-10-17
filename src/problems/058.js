/**
 * Problem 58 - Spiral Primes
 * 
 * Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.
 * 
 *                      (37)  36  35  34  33  32 (31)
 *                       38  (17) 16  15  14 (13) 30
 *                       39   18  (5)  4  (3) 12  29
 *                       40   19   6   1   2  11  28
 *                       41   20  (7)  8   9  10  27
 *                       42   21  22  23  24  25  26
 *                      (43)  44  45  46  47  48  49
 * 
 * It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ≈ 62%.
 * If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?
 */

let answer;

let currentNumber = 1;
let numerator = 0;
let denominator = 1;

for (let i = 3; ; i++) {
    denominator += 4;

    for (let y = 0; y < 4; y++) {
        currentNumber += i - 1;
        if (isPrime(currentNumber)) numerator++;
    }

    if (numerator / denominator < 0.1) {
        answer = i;
        break;
    }
}

module.exports = answer;



// let answer;

// const square = [[1]];
// let nextNumber = 2;

// for (squareLength = 3; ; squareLength += 2) {
//     square.forEach(line => {
//         line.push([]);
//         line.unshift([]);
//     })

//     const arrToPush = [];
//     const arrToUnshift = [];

//     for (let i = 0; i < squareLength; i++) {
//         arrToPush.push([]);
//         arrToUnshift.push([]);
//     }

//     square.push(arrToPush);
//     square.unshift(arrToUnshift);

//     // Add numbers
//     for (let i = square.length - 2; i >= 0; i--) {
//         square[i][square.length - 1] = nextNumber++;
//     }

//     for (let i = square.length - 2; i >= 0; i--) {
//         square[0][i] = nextNumber++;
//     }

//     for (let i = 1; i < square.length; i++) {
//         square[i][0] = nextNumber++;
//     }

//     for (let i = 1; i < square.length; i++) {
//         square[square.length - 1][i] = nextNumber++;
//     }

//     const ratio = getDiagonalPrimeRatio(square);

//     if (ratio < 0.13) {
//         answer = square.length;
//         break;
//     }

// }

// module.exports = answer;

// function getCenter(l) {
//     return (l - 1) / 2;
// }

// function getDiagonalPrimeRatio(square) {
//     let numerator = 0;
//     const denominator = square.length * 2 - 1;

//     let sum = 0;
//     for (let i = 0; i < square.length; i++) {
//         const a = square[i][i];
//         const b = square[square.length - 1 - i][i];

//         numerator += isPrime(a) ? 1 : 0;
//         if (a === b) continue;
//         numerator += isPrime(b) ? 1 : 0;
//     }
//     return numerator / denominator;
// }

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}