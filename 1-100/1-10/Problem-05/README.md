# Project Euler - Problem 5

## Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

<details><summary><b>Solution</b></summary>
<p>

```js
let number = 0;
let answer = null;

while (answer === null) {
    number++;
    for (i = 1; i <= 20; i++) {
        if (number % i !== 0) {
            break;
        }
        if (i === 20) {
            answer = number;
        }
    }
}
```

**Answer : 232792560**

[Live Demo](https://pierreyvesflamand.github.io/Project-Euler/1-100/1-10/Problem-05/)

</p>
</detail>
