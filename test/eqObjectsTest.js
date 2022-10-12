const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');
const assertObjectsEqual = require('../assertObjectsEqual');

//Test cases for primitives as values

//AB test cases

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log("Should be true", eqObjects(ab, ba)); //returns true
console.log("Should be false", eqObjects(ab, abc)); //returns false
assertEqual((eqObjects(ab, ba)), true); //passes

//Additional test cases with dessert objects

const desserts1 = {cake: "Chocolate", icing: "Vanilla"};
const desserts2 = {icing: "Vanilla", cake: "Chocolate"};
const desserts3 = {cake: "Chocolate", icing: "Vanilla", sprinkles: "Rainbow"};

assertEqual((eqObjects(desserts1, desserts2)), true); //passes
assertEqual((eqObjects(desserts1, desserts3)), false); //passes

//Test case for arrays as values

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1"};
const cd2 = {c: "1", d: ["2", 3, 4]};

console.log("Should be true", (eqObjects(cd, dc))); //returns true
console.log("Should be false", (eqObjects(cd, cd2))); //returning false

//Test with assert equal

assertEqual((eqObjects(cd, cd2)), false); //passes

//Test with assert objects equal

assertObjectsEqual((eqObjects(cd, cd2)), false); //passes