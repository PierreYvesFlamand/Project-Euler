/**
 * Problem 68 - Magic 5-gon Ring
 * 
 * https://projecteuler.net/problem=68
 * 
 *  a
 *   b
 *  e  c d
 * f
 * 
 *              f                          
 *               a                         
 *                     g                  
 *          e         b                      
 *        j                             
 *            d     c h                     
 *             i                           
 *                                        
 *                                        
 * 
 */

let answer = 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const f of numbers) {

    for (const a of getNumbersWithout(f)) {
        if (a === 10) continue;

        for (const b of getNumbersWithout(f, a)) {
            if (b === 10) continue;

            for (const g of getNumbersWithout(f, a, b)) {
                const c = f + a + b - g - b;
                if (c === 10) continue;
                if (!canBe([f, a, b, g], c)) continue;

                for (const h of getNumbersWithout(f, a, b, g, c)) {
                    const d = f + a + b - h - c;
                    if (d === 10) continue;
                    if (!canBe([f, a, b, g, h, c], d)) continue;

                    for (const i of getNumbersWithout(f, a, b, g, c, h, d)) {

                        const e = f + a + b - d - i;
                        if (e === 10) continue;
                        if (!canBe([f, a, b, g, h, c, i, d], e)) continue;

                        const j = getNumbersWithout(f, a, b, g, c, h, d, i, e)[0];
                        if (f + a + b !== j + e + a) continue;

                        let groups = [
                            [f, a, b],
                            [g, b, c],
                            [h, c, d],
                            [i, d, e],
                            [j, e, a]
                        ];

                        while (groups[0][0] > groups[1][0] || groups[0][0] > groups[2][0]) {
                            groups.unshift(groups.pop());
                        }

                        const finalNumber = Number(groups.map(g => g.join('')).join(''));

                        if (answer < finalNumber) answer = finalNumber;
                    }
                }
            }
        }
    }
}

// const numbers = [1, 2, 3, 4, 5, 6];

// for (const a of numbers) {
//     for (const b of getNumbersWithout(a)) {
//         for (const c of getNumbersWithout(a, b)) {
//             for (const d of getNumbersWithout(a, b, c)) {
//                 const e = a + b + c - c - d;
//                 if (canBe([a, b, c, d], e)) {
//                     const f = getNumbersWithout(a, b, c, d, e)[0];
//                     if (a + b + c - b - e === f) {
//                         let groups = [
//                             [a, b, c],
//                             [d, c, e],
//                             [f, e, b]
//                         ];

//                         while(groups[0][0] > groups[1][0] || groups[0][0] > groups[2][0]){
//                             groups.unshift(groups.pop());
//                         }

//                         const finalNumber = Number(groups.map(g => g.join('')).join(''));

//                         if (answer < finalNumber) answer = finalNumber;
//                     }
//                 }
//             }
//         }
//     }
// }

module.exports = answer;

function getNumbersWithout(...numberTaken) {
    return [...numbers.filter(n => !numberTaken.includes(n))];
}

function canBe(numberTaken, n) {
    return [...numbers.filter(n => !numberTaken.includes(n))].includes(n);
}