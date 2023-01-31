// INSTRUCTIONS

// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example 

// 123  => 6
// 223  => 7
// 1337 => 14

// Resolved January 31th 2023
// By Ramon Manrique Figueroa

function getSumOfDigits(integer) {
    let integers = integer.toString().split('');
    let sum = 0;
    
    for (let i = 0; i < integers.length; i++) {   
        sum = Number(sum) + Number(integers[i]);  
    }
    
    return sum;
}