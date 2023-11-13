/**
 * Problem 60 - Prime Pair Sets
 * 
 * The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime.
 * For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.
 * 
 * Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.
 */

let answer;

const primes = [];
function addNextPrimes() {
    let testedNumber = primes[primes.length - 1] + 1 || 3;
    while (!isPrime(testedNumber)) testedNumber++;
    primes.push(testedNumber);
}

const selectedPrimesPos = [0, 1];

addNextPrimes();
addNextPrimes();

while (!answer) {
    let isOkPrime = true;
    const selectedPrimes = selectedPrimesPos.map(pos => primes[pos]);

    for (let i = 0; i < selectedPrimes.length - 1; i++) {
        if (!isOkPrime) break;

        for (let y = i + 1; y < selectedPrimes.length; y++) {
            if (!isPrime(Number(String(selectedPrimes[i]) + String(selectedPrimes[y]))) || !isPrime(Number(String(selectedPrimes[y]) + String(selectedPrimes[i])))) {
                isOkPrime = false;
                break;
            }
        }
    }

    if (!isOkPrime) {
        addNextPrimes();
        selectedPrimesPos[selectedPrimesPos.length - 1] = selectedPrimesPos[selectedPrimesPos.length - 1] + 1;
    } else if (selectedPrimes.length < 5) {
        addNextPrimes();
        selectedPrimesPos.push(selectedPrimesPos[selectedPrimesPos.length - 1] + 1);
    } else {
        console.log(selectedPrimesPos.map(pos => primes[pos]));
        answer = selectedPrimesPos.map(pos => primes[pos]).reduce((sum, x) => sum += x, 0);
    }
}

module.exports = answer;

function getAllPairs(array) {
    const pairs = [];

    for (let i = 0; i < array.length - 1; i++) {
        for (let y = i + 1; y < array.length; y++) {
            pairs.push([array[i], array[y]]);
        }
    }

    return pairs;
}

function isPrime(n) {
    if (n <= (primes[primes.length - 1] || 0)) {
        return primes.includes(n);
    }

    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}