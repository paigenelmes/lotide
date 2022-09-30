//Equal Objects function

const eqObjects = function(object1, object2) {
  //Variables for length of each object
  const object1Length = Object.keys(object1).length;
  const object2Length = Object.keys(object2).length;
  //Variable for object 1 keys
  const object1Keys = Object.keys(object1);
  //If the object lengths are not equal, return false
  if (object1Length !== object2Length) {
    return false;
    //Otherwise loop over the keys of object1
  } else {
    for (let keys of object1Keys) {
      //if both values are an array, pass them to the equal arrays function
      if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
        return eqArrays(object1[keys], object2[keys]);
        //Comparing object key values. If not equal, return false
      } else if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
  }
  //Return true at the end if none of these return false
  return true;
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

// Assert Objects Equal function

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//Test cases

const dinner1 = {
  soup: "Minestrone",
  salad: "Ceasar",
  main: "Steak"
};

const dinner2 = {
  soup: "Chowder",
  salad: "Kale",
  main: "Crab"
};

const dinner3 = {
  main: "Steak",
  salad: "Ceasar",
  soup: "Minestrone"
};

assertObjectsEqual(dinner1, dinner2); //fails
assertObjectsEqual(dinner1, dinner3); //passes

