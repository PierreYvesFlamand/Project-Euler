/*
 * Problem 4
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

let number;
let check, unit, number_reversed;
let i, j;
let biggest_palindrome = 0;

for (i = 1; i <= 999; i++) {
    for (j = 1; j <= 999; j++) {
        number = i * j;

        // Construction l'inverse de la multiplication
        check = number;
        number_reversed = 0;
        while (check > 0) {
            unit = check % 10;
            check = parseInt(check / 10);
            number_reversed = number_reversed * 10 + unit;
        }

        // Si ils sont égaux, c'est que number est un Palindrome
        if (number == number_reversed && number > biggest_palindrome) {
            biggest_palindrome = number;
        }
    }
}

console.log(biggest_palindrome);
