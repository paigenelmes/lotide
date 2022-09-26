const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let result = {};
  for (let letters of sentence) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  return result;
};

//Testing

console.log(countLetters("LHL"));
console.log(countLetters("Paige"));
console.log(countLetters("Strawberry"));
assertEqual(countLetters("LHL"), countLetters("LHL"));