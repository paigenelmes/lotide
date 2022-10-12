const assertObjectsEqual = require('../assertObjectsEqual');

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