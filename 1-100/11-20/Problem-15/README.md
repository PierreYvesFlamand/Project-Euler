# Project Euler - Problem 15

## Lattice paths

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,

there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

<details><summary><b>Solution</b></summary>
<p>

[Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution)

2n! / n!(2n - n!) = 2n! / (n!)²

```js
let answer = factorial(20 * 2) / factorial(20) ** 2;

function factorial(num) {
    let sum = 1;
    for (let i = 2; i <= num; i++) sum *= i;
    return sum;
}
```

**Answer : 137846528820**

[Live Demo](https://pierreyvesflamand.github.io/Project-Euler/1-100/11-20/Problem-15/)

</p>
</detail>
