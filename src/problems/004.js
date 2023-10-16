/**
 * Problem 4 - Largest palindrome product
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const input = 999;
let answer = 0;

for (let i = 1; i <= input; i++) {
    for (let j = i; j <= input; j++) {
        const product = i * j;
        if (product > answer && isPalindrome(product)) {
            answer = product;
        }
    }
}

module.exports = answer;

function isPalindrome(n) {
    return n.toString() === n.toString().split('').reverse().join('');
}