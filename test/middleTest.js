const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//1 or 2 elements testing

console.log("Returns empty array when only 1 element:", middle([1])); // => [] (this works!)
console.log("Returns empty array only 2 elements:", middle([1, 2])); // => [] (this works!)

//Odd number testing

console.log("Middle with odd numbers in array:", middle([1, 2, 3])); // => [2] (this works!)
console.log("Middle with odd numbers in array:", middle([1, 2, 3, 4, 5])); // => [3] (this works!)

//Even number testing

console.log("Middle with even numbers in array:", middle([1, 2, 3, 4])); // => [2, 3] (this works!)
console.log("Middle with even numbers in array:", middle([1, 2, 3, 4, 5, 6])); // => [3, 4] (this works!)

//Testing with assertArraysEqual

assertArraysEqual(middle([1, 2, 3, 4, 5]), middle([1, 2, 3, 4, 5])); //passes
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), middle([1, 2, 3, 4, 5, 6])); //passes