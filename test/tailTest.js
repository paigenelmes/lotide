const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');


//Test cases
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]); //Passes; these arrays are a match
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(words.length, 3); // Passes; these lengths are a match
//Test one element
const oneElement = tail(["Paige"]);
console.log("Tail with One Element:", tail(oneElement)); // The array with one element yields an empty array as the tail
//Test empty array
console.log("Tail with Empty Array:", tail([])); // Empty array returns an empty array as expected