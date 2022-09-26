const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//countOnly takes in an array and an object.
//It will return an object containing counts of everything listed in the input object.
//Only keys with a truthy object should be counted.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  //empty object for results
  let results = {};
  //Looping over allItems
  for (let item of allItems) {
    //Increment the counter for each item
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        
        results[item] = 1;
      }
    }
  }
  return results;
};


//Testing

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);