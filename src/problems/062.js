/**
 * Problem 62 - Cubic Permutations
 * 
 * The cube, 41063625 (345^3), can be permuted to produce two other cubes: 56623104 (384^3) and 66430125 (405^3). In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.
 * Find the smallest cube for which exactly five permutations of its digits are cube.
 */

let answer;

let base = 1;
let n = base ** 3
// while (!answer) {
//     let cubeFounds = [];

//     for (nStr of getLexicographicPermutations(String(n))) {
//         if (nStr.split('')[0] === '0') continue;
//         if (cubeFounds.includes(nStr)) continue;
//         if (n === Number(nStr)) continue;
//         if (Math.cbrt(Number(nStr)) % 1 === 0) {
//             cubeFounds.push(nStr);
//             if (cubeFounds.length === 3) {
//                 console.log(cubeFounds);
//                 answer = n;
//                 break;
//             }
//         };

//     }

//     cubeFounds = [];
//     base++;
//     n = base ** 3;
// }

// console.log(getLexicographicPermutations(String(41063625)));

module.exports = answer;

function getLexicographicPermutations(digits) {
    const lexicographicPermutations = [];

    function permute(digits, lexicographicPermutationInFormation = []) {
        if (digits.length === 0) {
            lexicographicPermutations.push(lexicographicPermutationInFormation.join(''));
            return;
        }

        for (let i = 0; i < digits.length; i++) {
            const rest = [...digits.slice(0, i), ...digits.slice(i + 1)];
            permute(rest, [...lexicographicPermutationInFormation, digits[i]]);
        }
    }

    permute(digits);

    return lexicographicPermutations;
}
