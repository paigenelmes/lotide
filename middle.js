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

const middle = function(originalArray) {
  let middleArray = [];
  let arrayLength = originalArray.length;
  //If arrays have more than 2 elements and are odd numbers, return an array with a single middle element
  if ((arrayLength % 2 !== 0) && (arrayLength > 2)) {
    let middleIndex = Math.floor(arrayLength / 2);
    middleArray = [originalArray[Math.floor(middleIndex)]];
    //If arrays have more than 2 elements and are even numbers, return an array with 2 middle elements
  } else if ((arrayLength % 2 === 0) && (arrayLength > 2)) {
    let middleIndex = Math.floor(arrayLength / 2);
    middleArray = [originalArray[Math.floor(middleIndex - 1)], originalArray[Math.floor(middleIndex)]];
    //If arrays less than 2 elements, return an empty array
  } else {
    middleArray = [];
  }
  return middleArray;
};


//1 or 2 elements testing

console.log(middle([1])); // => [] this works!
console.log(middle([1, 2])); // => [] this works!

//Odd number testing

console.log(middle([1, 2, 3])); // => [2] this works!
console.log(middle([1, 2, 3, 4, 5])); // => [3] this works!

//Even number testing

console.log(middle([1, 2, 3, 4])); // => [2, 3] this works!
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4] this works!
