# Project Euler - Problem 7

## 10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13

we can see that the 6th prime is 13.

What is the 10 001st prime number?

<details><summary><b>Solution</b></summary>
<p>

```js
let answer = null;
let prime = 0;
let count = 0;

while (answer === null) {
    if (is_prime(++prime)) {
        if (++count === 10001) {
            answer = prime;
        }
    }
}

function is_prime(number) {
    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else if (number % 2 !== 0) {
        for (let i = 3, sqrt = Math.floor(Math.sqrt(number)); i <= sqrt; i += 2) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
```

**Answer : 104743**

[Live Demo](https://pierreyvesflamand.github.io/Project-Euler/1-100/1-10/Problem-07/)

</p>
</detail>
