# Project Euler - Problem 1

## Multiples of 3 and 5

<details><summary><b>Solution</b></summary>
<p>

```js
let answer = 0;

for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        answer += i;
    }
}
```

</p>
</detail>
