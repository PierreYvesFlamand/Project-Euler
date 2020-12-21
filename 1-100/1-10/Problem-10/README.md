# Project Euler - Problem 10

## Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

<details><summary><b>Solution</b></summary>
<p>

```js
let answer = 0;
let number = 0;

while (number < 2000000) {
    if (is_prime(++number)) {
        answer += number;
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

**Answer : 142913828922**

[Live Demo](https://pierreyvesflamand.github.io/Project-Euler/1-100/1-10/Problem-10/)

</p>
</detail>
