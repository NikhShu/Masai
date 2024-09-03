let numbers = [5, 3, 8, 1, 2];
console.log("Initial array:", numbers);

function addNumber(array, number) {
    array.push(number);
    console.log(`After adding ${number}:`, array);
}

function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
    console.log(`After removing ${number}:`, array);
}

function sortNumbers(array) {
    const sortedArray = [...array].sort((a, b) => a - b); 
    console.log("Sorted array:", sortedArray);
    return sortedArray;
}

function calculateSum(array) {
    const sum = array.reduce((total, num) => total + num, 0);
    console.log("Sum of numbers:", sum);
    return sum;
}

function calculateAverage(array) {
    const sum = calculateSum(array);
    const average = sum / array.length;
    console.log("Average of numbers:", average);
    return average;
}

addNumber(numbers, 4); 
removeNumber(numbers, 3); 
const sortedArray = sortNumbers(numbers); 
const sum = calculateSum(numbers); 
const average = calculateAverage(numbers); 
