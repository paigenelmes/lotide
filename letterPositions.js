//Letter Positions Function

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letters = sentence[i];
    //If the letters are not an empty space, then we will carry on
    if (letters !== " ") {
      //If the array exists, we need to push the position into the result. If not, we need to create a new array.
      if (results[letters]) {
        results[letters].push(i);
      } else {
        results[letters] = [i];
      }
    }
  }
  return results;
};

//Equal Arrays Function

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

//Assert Arrays Equal Function

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Testing

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);

assertArraysEqual(letterPositions("lighthouse").h, [3, 5]);