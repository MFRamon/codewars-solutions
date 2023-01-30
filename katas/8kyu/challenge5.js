// INSTRUCTIONS 
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// Resolved January 30th 2023
// By Ramon Manrique Figueroa

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}


// Interesting solution 

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }