/**
 * Problem 17 - Number letter counts
 * 
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five,
 * then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words,
 * how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two)
 * contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
 * The use of "and" when writing out numbers is in compliance with British usage.
 */

const wordsMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventhen',
    18: 'eighteen',
    19: 'nineteen',

    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',

    100: 'hundred',
    1000: 'thousand',
};

let answer = 0;
let nbLetters1to99 = 0;

for (let i = 1; i <= 99; i++) {
    if (i < 20) {
        nbLetters1to99 += wordsMap[i].length;
    } else {
        const unit = i % 10;
        const ten = i - unit;

        nbLetters1to99 += wordsMap[ten].length + (unit ? wordsMap[unit].length : 0);
    }
}

// Add 1 -> 99
answer += nbLetters1to99;

// Add 100 -> 999
for (i = 1; i <= 9; i++) {
    // 100 | 200 | 300 | ...
    answer += wordsMap[i].length + wordsMap[100].length;

    // 101 -> 199 | 201 -> 299 | ...
    answer += (wordsMap[i].length + wordsMap[100].length + 'and'.length) * 99 + nbLetters1to99;
}

// Add 1000
answer += wordsMap[1].length + wordsMap[1000].length;

module.exports = answer;
