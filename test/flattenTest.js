const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

//Testing

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),flatten([1, 2, [3, 4], 5, [6]])); //passes