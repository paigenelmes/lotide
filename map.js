const words = ["ground", "control", "to", "major", "tom"];

//Map function

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Equal Arrays function

const eqArrays = function(actual, expected) {
  //compare lengths of the arrays first
  if (actual.length !== expected.length) {
    return false;
  }
  //then loop over the array and compare the contents
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

//Assert Arrays Equal function

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Testing map function
const results1 = map(words, word => word[0]);
//Comparing results1 & results1 with assert arrays equal and expected result
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); //passes

//Testing map function, adding extra words to the array

const results2 = map(words, word => word + "! yeah!");
//Adding a different extra word
const results3 = map(words, word => word + "! hey!");
//Comparing results2 with results3 with Assert Arrays Equal
assertArraysEqual(results2, results3); //fails as it should

//Test to return each word with the first letter sliced off
const results4 = map(words, word => word.slice(1));
assertArraysEqual(results4, [ 'round', 'ontrol', 'o', 'ajor', 'om' ]); //passes as it should