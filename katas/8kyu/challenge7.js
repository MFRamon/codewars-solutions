// INSTRUCTIONS

// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

// Resolved January 30th 2023
// By Ramon Manrique Figueroa

function invert(array) {
let copyArray = [...array];
    return copyArray.map((element, index, array) => { 
        if(Math.sign(element) === 1 || Math.sign(element) === -1){
            return element * -1
        }
    
        if(Math.sign(element) === 0){
            return element * -1
        }
    })
}
