/**
 * Problem 55 - Lychrel Numbers
 * 
 * If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.
 * Not all numbers produce palindromes so quickly. For example,
 * 
 *  349 +  943 = 1292
 * 1292 + 2921 = 4213
 * 4213 + 3124 = 7337
 * 
 * That is, 349 took three iterations to arrive at a palindrome.
 * 
 * Although no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome.
 * A number that never forms a palindrome through the reverse and add process is called a Lychrel number.
 * Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise.
 * In addition you are given that for every number below ten-thousand, it will either
 * (i) become a palindrome in less than fifty iterations, or, 
 * (ii) no one, with all the computing power that exists,
 * has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).
 * 
 * Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.
 * How many Lychrel numbers are there below ten-thousand?
 * 
 * NOTE: Wording was modified slightly on 24 April 2007 to emphasise the theoretical nature of Lychrel numbers.
 */

let input_max = 10000;
let input_max_iteration = 50;
let answer = 0;

for (let i = 0; i < input_max + 1; i++) {
    let nStr = String(i);

    for (let y = 1; y <= input_max_iteration; y++) {
        nStr = numberStrAdd(nStr, getNumberStrReverse(nStr));
        if (isNumberStrPalindrome(nStr)) break;
        if (y === input_max_iteration) answer++;
    }
}

module.exports = answer;

function numberStrAdd(nStr1, nStr2) {
    const result = [];

    nStr1 = nStr1.split('').reverse().map(nStr => Number(nStr));
    nStr2 = nStr2.split('').reverse().map(nStr => Number(nStr));

    let keep = 0;
    for (let i = 0; i < Math.max(nStr1.length, nStr2.length); i++) {
        result[i] = (nStr1[i] || 0) + (nStr2[i] || 0) + keep;
        keep = 0;

        if (result[i] >= 10) {
            result[i] -= 10;
            keep = 1;
        }
    }
    if (keep > 0) {
        result.push(1);
    }

    return result.reverse().join('');
}

function getNumberStrReverse(nStr) {
    nStr = nStr.split('').reverse();

    while (nStr[0] === '0') nStr.shift();

    return nStr.join('');
}

function isNumberStrPalindrome(nStr) {
    return nStr === nStr.split('').reverse().join('');
}