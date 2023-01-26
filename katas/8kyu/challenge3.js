// INSTRUCTIONS 
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.

// Note: only positive integers will be tested.
// https://en.wikipedia.org/wiki/Triangle

// MDN Useful Links for resolving this challenge
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

//KATA Link : https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

function otherAngle(a, b) {
    return Math.abs(a + b - 180);
}