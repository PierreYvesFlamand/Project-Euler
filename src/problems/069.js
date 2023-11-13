/**
 * Problem 69 - Totient Maximum
 */


function primeFactors(n) {
    const factors = [];
    let divisor = 2;

    while (n > 1) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

function getFactors(n) {
    const primeFactorsList = primeFactors(n);
    const uniquePrimeFactors = [...new Set(primeFactorsList)];
    const factorCount = uniquePrimeFactors.map(factor => primeFactorsList.filter(item => item === factor).length + 1);

    const factors = [];

    for (let i = 0; i < Math.pow(2, uniquePrimeFactors.length); i++) {
        let factor = 1;
        for (let j = 0; j < uniquePrimeFactors.length; j++) {
            if (i & (1 << j)) {
                factor *= Math.pow(uniquePrimeFactors[j], factorCount[j] - 1);
            }
        }
        factors.push(factor);
    }

    factors.sort((a, b) => a - b);
    return factors;
}

console.log(getFactors(4));


// const positiveFactors = {};

// let maxValue = 0;
// let answer;

// for (let i = 2; i <= 10 ** 1; i++) {
//     console.log(i, getRelativePrimes(i));
//     const result = i / getRelativePrimes(i).length;
//     if (result > maxValue) {
//         maxValue = result;
//         answer = i;
//     }
// }
// console.log(positiveFactors);
// module.exports = answer;

function getRelativePrimes(n) {
    const relativePrimes = [1];
    for (let i = 2; i < n; i++) {
        if (!haveOneCommonNumber(getPositiveFactors(n), getPositiveFactors(i))) relativePrimes.push(i);
    }
    return relativePrimes;
}

function getPositiveFactors(n) {
    if (positiveFactors[n]) return positiveFactors[n];

    const primeFactorsList = primeFactors(n);
    const uniquePrimeFactors = [...new Set(primeFactorsList)];
    const factorCount = uniquePrimeFactors.map(factor => primeFactorsList.filter(item => item === factor).length + 1);

    const factors = [];

    for (let i = 0; i < Math.pow(2, uniquePrimeFactors.length); i++) {
        let factor = 1;
        for (let j = 0; j < uniquePrimeFactors.length; j++) {
            if (i & (1 << j)) {
                factor *= Math.pow(uniquePrimeFactors[j], factorCount[j] - 1);
            }
        }
        factors.push(factor);
    }

    factors.sort((a, b) => a - b);
    positiveFactors[n] = factors;

    return positiveFactors[n];
}

function haveOneCommonNumber(array1, array2) {
    for (const number of array1) {
        if (array2.includes(number)) return true;
    }

    return false;
}