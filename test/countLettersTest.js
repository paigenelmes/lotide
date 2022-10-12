const countLetters = require('../countLetters');
const assertObjectsEqual = require('../assertObjectsEqual');

//Testing Count Letters

console.log(countLetters("LHL"));
console.log(countLetters("Paige"));
console.log(countLetters("Strawberry"));

//Testing Count Letters with Assert Objects Equal

assertObjectsEqual(countLetters("Coffee"), countLetters("Coffee")); //passes as it should
assertObjectsEqual(countLetters("Tea"), countLetters("Coffee")); //fails as it should