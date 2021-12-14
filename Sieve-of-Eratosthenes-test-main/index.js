lowerNumber = 2;
higherNumber = 70

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lower Number to higherNumber

function sieveOfEratosthenes(){
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through lower number to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}}

sieveOfEratosthenes();