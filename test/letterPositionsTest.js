const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

//Testing

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse").h, [3, 5]);
assertArraysEqual(letterPositions("coffee").f, [2, 3]);