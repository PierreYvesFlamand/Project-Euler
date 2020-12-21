/*
* Problem 5
* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
* What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

let number = 1;
let i;
let lowest_number = 0;

// Tant que lowest_number vaut 0, c'est qu'il n'a pas encore été trouvé
while(lowest_number == 0){
    for(i = 1; i <= 20; i++){
        if(number % i != 0){
            i = 21;
        }
        if(i == 20){
            lowest_number = number;
        }
    }
    number++;
}

console.log(lowest_number);