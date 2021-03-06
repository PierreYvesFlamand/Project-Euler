# Project Euler - Problem 4

## Largest palindrome product

A palindromic number reads the same both ways.

The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

<details><summary><b>Solution</b></summary>
<p>

```js
let answer = 0;

for (let i = 1; i <= 999; i++) {
    for (let j = i; j <= 999; j++) {
        const product = i * j;
        if (product.toString() === product.toString().split('').reverse().join('') && product > answer) {
            answer = product;
        }
    }
}
```

**Answer : 906609**

[Live Demo](https://pierreyvesflamand.github.io/Project-Euler/1-100/1-10/Problem-04/)

</p>
</detail>
