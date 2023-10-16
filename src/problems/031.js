/**
 * Problem 31 - Coin Sums
 * 
 * In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:
 *      1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
 * 
 * It is possible to make £2 in the following way:
 *      1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 * 
 * How many different ways can £2 be made using any number of coins?
 */

let answer = 0;

for (a = 0; a <= 200 / 200; a++) {
    for (b = 0; b <= 200 / 100; b++) {
        for (c = 0; c <= 200 / 50; c++) {
            for (d = 0; d <= 200 / 20; d++) {
                for (e = 0; e <= 200 / 10; e++) {
                    for (f = 0; f <= 200 / 5; f++) {
                        for (g = 0; g <= 200 / 2; g++) {
                            for (h = 0; h <= 200 / 1; h++) {
                                if (a * 200 + b * 100 + c * 50 + d * 20 + e * 10 + f * 5 + g * 2 + h === 200) {
                                    answer++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = answer;