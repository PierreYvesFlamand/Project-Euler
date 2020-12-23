# Project Euler - Problem 16

## Power digit sum

2<sup>15</sup> = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2<sup>1000</sup>?

<details><summary><b>Solution</b></summary>
<p>

```js
let answer;
let number = [2];
let report;

for (let i = 1; i < 1000; i++) {
    report = false;

    number = number.map((num) => {
        let temp = num * 2;

        if (report) {
            temp++;
            report = false;
        }
        if (temp >= 10) {
            temp -= 10;
            report = true;
        }

        return temp;
    });

    if (report) {
        number.push(1);
    }
}

answer = number.reduce((a, b) => a + b);
```

**Answer : 1366**

[Live Demo](https://pierreyvesflamand.github.io/Project-Euler/1-100/11-20/Problem-16/)

</p>
</detail>
