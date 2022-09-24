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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual(["Paige"], ["David"]); // false
assertArraysEqual([1, 2, 3], [4, 5, 6]); // false
assertArraysEqual(["Paige"], ["Paige"]); // true