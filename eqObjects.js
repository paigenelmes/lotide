//Assert Equal function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Equal Objects function

//Returns true if both objcts have identical keys & values
//Otherwise you get false

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

//Test cases for primitives as values

//AB test cases

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// console.log(eqObjects(ab, ba)); //returns true
// console.log(eqObjects(ab, abc)); //returns false

// assertEqual((eqObjects(ab, ba)), true); //passes

//Dessert test cases, just to make sure

// const desserts1 = {cake: "Chocolate", icing: "Vanilla"};
// const desserts2 = {icing: "Vanilla", cake: "Chocolate"};
// const desserts3 = {cake: "Chocolate", icing: "Vanilla", sprinkles: "Rainbow"};

// assertEqual((eqObjects(desserts1, desserts2)), true); //passes
// assertEqual((eqObjects(desserts1, desserts3)), false); //passes

//Test case for arrays as values

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1"};
const cd2 = {c: "1", d: ["2", 3, 4]};

console.log((eqObjects(cd, dc))); //returns true
console.log((eqObjects(cd, cd2))); //returning false

assertEqual((eqObjects(cd, cd2)), false); //passes