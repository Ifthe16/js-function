/**
 * Objective: write a function to give me the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: set a parameter(s)
 * step-4: pass the parameter(s), check wether parameter is passed in a proper format
 * step-5: do the function tasks (step by step)
*/

function sumOfNumbers(numbers) {
    // console.log(numbers);
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const numbs = [54, 62, 12, 6];
const sum = sumOfNumbers(numbs);
console.log('sum of numbers is', sum);

// example 02
function sumOfNumbers2(numbers) {
    // console.log(numbers);
    let sum2 = 0;
    for (const number of numbers) {
        // console.log(number);
        sum2 = sum2 + number;
    }
    return sum2;
}

const numbs2 = [4, 2, 1, 6];
const sum2 = sumOfNumbers2(numbs2);
console.log('sum of numbers is', sum2);