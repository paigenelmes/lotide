const assertEqual = function(actual, expected) {
  //compare lengths of the arrays first
  if (actual.length !== expected.length) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  //then loop over the array and compare the contents
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const tail = function(array) {
  let empty = [];
  if (array.length <= 1) {
    return empty;
  } else {
    let tailArray = array.slice(1);
    return tailArray;
  }
};

//Test cases
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); //Passes; these arrays are a match
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // Passes; these lengths are a match
//Test one element
const oneElement = tail(["Paige"]);
console.log(tail(oneElement)); // The array with one element yields an empty array as the tail
//Test empty array
console.log(tail([])); // Empty array returns an empty array as expected