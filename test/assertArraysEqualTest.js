const assertArraysEqual = require('../assertArraysEqual');

//Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual(["Paige"], ["David"]); // false
assertArraysEqual([1, 2, 3], [4, 5, 6]); // false
assertArraysEqual(["Paige"], ["Paige"]); // true