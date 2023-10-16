/**
 * Problem 19 - Counting Sundays
 *
 * You are given the following information, but you may prefer to do some research for yourself.

 *      - 1 Jan 1900 was a Monday.
 *      - Thirty days has September,
 *          April, June and November.
 *          All the rest have thirty-one,
 *          Saving February alone,
 *          Which has twenty-eight, rain or shine.
 *          And on leap years, twenty-nine.
 *      - A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 * 
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

let answer = 0;
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let curDay = 0; // 0 = Monday -> 1 = Thesday -> ... -> 6 = Sunday
const updateCurDay = (curDay, increment) => (curDay + increment) % 7;

// 1 Jan 1900 is Monday --> Thus 1 Jan 1901 is Tuesday
curDay = updateCurDay(curDay, 365 % 7);

for (let year = 1901; year <= 2000; year++) {
    for (let month = 0; month < 12; month++) {
        // Check if 1st is 6 (Sunday)
        if (curDay === 6) {
            answer++;
        }

        // Add days of this month
        curDay = updateCurDay(curDay, monthDays[month]);

        // Add 1 day every February on Leap year
        if (month === 1 && (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)) {
            curDay = updateCurDay(curDay, 1);
        }
    }
}

module.exports = answer;
