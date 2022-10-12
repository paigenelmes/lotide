const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

//Testing

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
//Comparing results1 & results1 with assert arrays equal and expected result
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); //passes

//Testing map function, adding an extra character to the array
const results2 = map(words, word => word + "!");
//Adding a different extra character
const results3 = map(words, word => word + "?");

//Comparing results2 with results3 with Assert Arrays Equal
assertArraysEqual(results2, results3); //fails as it should

//Test to return each word with the first letter sliced off
const results4 = map(words, word => word.slice(1));
assertArraysEqual(results4, [ 'round', 'ontrol', 'o', 'ajor', 'om' ]); //passes as it should