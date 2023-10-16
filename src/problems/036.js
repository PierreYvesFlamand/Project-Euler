/**
 * Problem 36 - Double-base Palindromes
 * 
 * The decimal number, 585 = 1001001001_2 (binary), is palindromic in both bases.
 * Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
 * 
 * (Please note that the palindromic number, in either base, may not include leading zeros.)
 */

const input = 1000000;
let answer = 0;

for (let i = 1; i < input; i++) {
    if (!isPalindrome(i)) continue;
    if (!isPalindrome(convertToBinary(i))) continue;
    answer += i;
}

module.exports = answer;

function isPalindrome(n) {
    return n.toString() === n.toString().split('').reverse().join('');
}

function convertToBinary(n) {
    return n.toString(2);
}